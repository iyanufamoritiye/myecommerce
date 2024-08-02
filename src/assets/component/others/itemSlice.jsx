import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

// Helper function to fetch user items
const getUserItems = async (collectionName, userId) => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "users", userId, collectionName)
    );
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error("Error fetching user items:", error);
    throw new Error("Failed to fetch items. Please try again later.");
  }
};

// Add Item to Cart
export const addItemToCart = createAsyncThunk(
  "item/addItemToCart",
  async (item, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const userCartRef = collection(doc(db, "users", user.uid), "cart");
        const docRef = await addDoc(userCartRef, item);
        return { id: docRef.id, ...item };
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add Item to Wishlist
export const addItemToWishlist = createAsyncThunk(
  "item/addItemToWishlist",
  async (item, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const userWishlistRef = collection(
          doc(db, "users", user.uid),
          "wishlist"
        );
        const docRef = await addDoc(userWishlistRef, item);
        return { id: docRef.id, ...item };
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Items from Cart
export const fetchCartItems = createAsyncThunk(
  "item/fetchCartItems",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const items = await getUserItems("cart", user.uid);
        return items;
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Items from Wishlist
export const fetchWishlistItems = createAsyncThunk(
  "item/fetchWishlistItems",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const items = await getUserItems("wishlist", user.uid);
        return items;
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Remove Item from Cart
export const removeCartItem = createAsyncThunk(
  "item/removeCartItem",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const userCartRef = doc(db, "users", user.uid, "cart", id);
        await deleteDoc(userCartRef);
        return id;
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Remove Item from Wishlist
export const removeWishlistItem = createAsyncThunk(
  "item/removeWishlistItem",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const userWishlistRef = doc(db, "users", user.uid, "wishlist", id);
        await deleteDoc(userWishlistRef);
        return id;
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update Item Quantity in Cart
export const updateCartItemQuantity = createAsyncThunk(
  "item/updateCartItemQuantity",
  async ({ id, quantity }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const user = state.auth.user; // Get user from authSlice
      if (user) {
        const itemRef = doc(db, "users", user.uid, "cart", id);
        await updateDoc(itemRef, { quantity });
        return { id, quantity };
      } else {
        return rejectWithValue("User is not authenticated");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const itemSlice = createSlice({
  name: "item",
  initialState: {
    cart: { items: [], total: 0, loading: false, error: null },
    wishlist: { items: [], loading: false, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCart.pending, (state) => {
        state.cart.loading = true;
        state.cart.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.cart.loading = false;
        state.cart.items.push(action.payload);
        state.cart.total +=
          action.payload.price * (action.payload.quantity || 1);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.cart.loading = false;
        state.cart.error = action.payload;
      })
      .addCase(addItemToWishlist.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(addItemToWishlist.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items.push(action.payload);
      })
      .addCase(addItemToWishlist.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.cart.loading = true;
        state.cart.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cart.loading = false;
        state.cart.items = action.payload;
        state.cart.total = action.payload.reduce(
          (acc, item) => acc + item.price * (item.quantity || 1),
          0
        );
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.cart.loading = false;
        state.cart.error = action.payload;
      })
      .addCase(fetchWishlistItems.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = action.payload;
      })
      .addCase(fetchWishlistItems.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      .addCase(removeCartItem.pending, (state) => {
        state.cart.loading = true;
        state.cart.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cart.loading = false;
        state.cart.items = state.cart.items.filter(
          (item) => item.id !== action.payload
        );
        // Update total after item removal
        state.cart.total = state.cart.items.reduce(
          (acc, item) => acc + item.price * (item.quantity || 1),
          0
        );
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.cart.loading = false;
        state.cart.error = action.payload;
      })
      .addCase(removeWishlistItem.pending, (state) => {
        state.wishlist.loading = true;
        state.wishlist.error = null;
      })
      .addCase(removeWishlistItem.fulfilled, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.items = state.wishlist.items.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(removeWishlistItem.rejected, (state, action) => {
        state.wishlist.loading = false;
        state.wishlist.error = action.payload;
      })
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.cart.loading = true;
        state.cart.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.cart.loading = false;
        const item = state.cart.items.find(
          (item) => item.id === action.payload.id
        );
        if (item) {
          item.quantity = action.payload.quantity;
          // Update total after quantity change
          state.cart.total = state.cart.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
        }
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.cart.loading = false;
        state.cart.error = action.payload;
      });
  },
});

export default itemSlice.reducer;
