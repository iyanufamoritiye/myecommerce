// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithCredential,
  PhoneAuthProvider,
  RecaptchaVerifier,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "../../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const serializeUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName || null,
});

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (
    { fullname, emailOrPhone, password, recaptchaContainerId },
    { rejectWithValue }
  ) => {
    try {
      const isEmail = emailOrPhone.includes("@");
      let userCredential;
      let confirmationResult;

      if (isEmail) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          emailOrPhone,
          password
        );
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), { fullname, emailOrPhone });
        return { user: serializeUser(user) };
      } else {
        const appVerifier = new RecaptchaVerifier(
          recaptchaContainerId,
          {
            size: "invisible",
            callback: (response) => {
              console.log("Recaptcha verified");
            },
            "expired-callback": () => {
              console.log("Recaptcha expired");
            },
          },
          auth
        );

        const phoneNumber = `+${emailOrPhone}`;
        confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          appVerifier
        );

        // Return confirmationResult and phone number to be used later in OTP verification
        return { confirmationResult, phoneNumber };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    { otp, confirmationResult, fullname, emailOrPhone },
    { rejectWithValue }
  ) => {
    try {
      const credential = PhoneAuthProvider.credential(
        confirmationResult.verificationId,
        otp
      );
      const userCredential = await signInWithCredential(auth, credential);

      // Save user data to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullname,
        phone: emailOrPhone,
      });

      return { user: serializeUser(userCredential.user) };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ emailOrPhone, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailOrPhone,
        password
      );
      return { user: serializeUser(userCredential.user) };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (
    {
      firstname,
      companyname,
      lastname,
      email,
      phone,
      address,
      currentpassword,
      newpassword,
    },
    { getState, rejectWithValue }
  ) => {
    try {
      const { uid } = getState().auth.user;

      // Update user profile information
      if (firstname || lastname) {
        await updateProfile(auth.currentUser, {
          displayName: `${firstname} ${lastname}`,
        });
      }

      // Update email if changed
      if (email && email !== auth.currentUser.email) {
        await updateEmail(auth.currentUser, email);
      }

      // Update password if changed
      if (newpassword && newpassword !== currentpassword) {
        await updatePassword(auth.currentUser, newpassword);
      }

      // Update Firestore document
      const userDocRef = doc(db, "users", uid);
      await updateDoc(userDocRef, {
        firstname,
        lastname,
        email,
        phone,
        address,
        companyname,
      });

      return { user: serializeUser(auth.currentUser) };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    otpSent: false,
    confirmationResult: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearOtp: (state) => {
      state.otpSent = false;
      state.confirmationResult = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.otpSent = false;
        state.confirmationResult = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearOtp, setUser, clearUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
