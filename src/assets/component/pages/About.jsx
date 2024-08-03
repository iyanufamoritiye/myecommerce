import React, { useState } from "react";
import Header from "../../reusable/Header";
import Footer from "../../reusable/Footer";
import SideImage from "../../images/SideImage.svg";
import StaffCard from "../../Cardcomponent/StaffCard";
import TomCruise from "../../images/TomCruise.svg";
import EmmaWatson from "../../images/EmmaWatson.svg";
import WillSmith from "../../images/WillSmith.svg";
import Service from "../../Sectionfolder/Service";

const About = () => {
  const staffMembers = [
    { imageSrc: TomCruise, name: "Tom Cruise", position: "Founder & Chairman" },
    {
      imageSrc: EmmaWatson,
      name: "Emma Watson",
      position: "Managing Director",
    },
    { imageSrc: WillSmith, name: "Will Smith", position: "Product Designer" },
  ];

  const [selectedStaffIndex, setSelectedStaffIndex] = useState(2); // Set the third button as default

  const handleChangeStaff = (index) => {
    setSelectedStaffIndex(index);
  };

  return (
    <div>
      <Header wishlist={true} cart={true} account={true} />
      <div className=" max-w-screen  px-24 xs:px-4 sm:px-6 md:px-8  ">
        <div className="mt-12">
          <p className="mb-4 text-start">
            <span className="text-sm text-gray-500 font-normal mr-2">Home</span>
            <span className="text-sm text-gray-500 font-normal  mr-2">/</span>
            <span className="text-sm font-normal ">About</span>
          </p>
        </div>
        <div className="mt-12  flex justify-between  xs:flex-col md:flex-col md:gap-8  xs:gap-8 xs:w-full ">
          <div className="  flex flex-col justify-center    ">
            <h1 className="text-[54px] xs:text-3xl  sm:text-3xl font-semibold font-poppins text-start ">
              Our Story
            </h1>
            <p className="font-normal mt-6 text-base font-poppins text-start">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              <br />
              makterplace with an active presense in Bangladesh. Supported
              <br /> by wide range of tailored marketing, data and service
              solutions,
              <br /> Exclusive has 10,500 sallers and 300 brands and serves 3
              <br /> millioons customers across the region.
            </p>
            <p className="font-normal mt-3 text-base font-poppins text-start">
              Exclusive has more than 1 Million products to offer, growing at a
              <br />
              very fast. Exclusive offers a diverse assotment in categories
              <br />
              ranging from consumer.
            </p>
          </div>
          <div className="-mr-24   w-1/2 xs:w-full md:w-full lg:w-full">
            <img src={SideImage} alt="" className="" />
          </div>
        </div>
        <div
          className="mt-28 mb-32 flex justify-between xs:flex-col xs:items-center xs:gap-4 md:grid md:grid-cols-2 
        md:place-items-center md:gap-y-12    "
        >
          <div className="flex flex-col  items-center gap-5 w-[250px] p-6 border-2 border-gray-200">
            <div className=" items-center  relative h-20 w-20 rounded-full bg-gray-200">
              <div className=" absolute bottom-3 left-3 h-14 w-14  rounded-full bg-gray-950">
                <svg
                  width="35"
                  height="32"
                  viewBox="0 0 35 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute bottom-3 left-3 "
                >
                  <path
                    d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11"
                    stroke="#FAFAFA"
                    stroke-width="2"
                  />
                  <path
                    d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31"
                    stroke="#FAFAFA"
                    stroke-width="2"
                    stroke-miterlimit="16"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-3">
              <h2 className=" text-3xl font-semibold">10.5k </h2>
              <p className="text-base font-normal">Sallers active our site</p>
            </div>
          </div>
          <div className="flex flex-col bg-red-600  items-center gap-5 w-[250px] p-6 border-2 border-gray-200">
            <div className=" items-center  relative h-20 w-20 rounded-full bg-red-400">
              <div className=" absolute bottom-3 left-3 h-14 w-14  rounded-full bg-white ">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute bottom-2 left-2 "
                >
                  <path
                    d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453"
                    stroke="black"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 8.18176V12.1212M20 27.8787V31.8181"
                    stroke="black"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-3">
              <h2 className=" text-3xl font-semibold text-white ">33k </h2>
              <p className="text-base font-normal text-white">
                Monthly Produduct Sale
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center gap-5 w-[250px] p-6 border-2 border-gray-200">
            <div className=" items-center  relative h-20 w-20 rounded-full bg-gray-200">
              <div className=" absolute bottom-3 left-3 h-14 w-14  rounded-full bg-gray-950">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute bottom-2 left-2 "
                >
                  <path
                    d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-3">
              <h2 className=" text-3xl font-semibold">45.5k </h2>
              <p className="text-base font-normal">
                Customer active in our site
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center gap-5 w-[250px] p-6 border-2 border-gray-200">
            <div className=" items-center  relative h-20 w-20 rounded-full bg-gray-200">
              <div className=" absolute bottom-3 left-3 h-14 w-14  rounded-full bg-gray-950">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute bottom-2 left-2 "
                >
                  <path
                    d="M20.9278 18.1456V18.6456L21.4278 18.6456C22.0916 18.6457 22.739 18.8514 23.281 19.2346C23.8229 19.6178 24.2327 20.1595 24.454 20.7851C24.4727 20.8381 24.4808 20.8941 24.4778 20.9502C24.4748 21.0062 24.4608 21.0611 24.4366 21.1117C24.4124 21.1624 24.3784 21.2077 24.3367 21.2452C24.295 21.2828 24.2463 21.3117 24.1933 21.3304C24.1404 21.3491 24.0844 21.3571 24.0283 21.3542C23.9723 21.3512 23.9174 21.3372 23.8667 21.313C23.7645 21.2641 23.6858 21.1766 23.6481 21.0697L23.648 21.0695C23.4856 20.6104 23.1849 20.213 22.7873 19.9319C22.3896 19.6509 21.9146 19.5 21.4277 19.5002L20.9278 19.5003V20.0002V23.7092V24.2092H21.4278C22.2789 24.2092 23.0952 24.5473 23.697 25.1491C24.2988 25.7509 24.6369 26.5672 24.6369 27.4183C24.6369 28.2694 24.2988 29.0856 23.697 29.6874C23.0952 30.2892 22.2789 30.6273 21.4278 30.6273H20.9278V31.1273V31.5546H20.0733V31.1273V30.6273L19.5733 30.6273C18.9096 30.6273 18.2621 30.4215 17.7202 30.0383C17.1782 29.6551 16.7684 29.1134 16.5471 28.4876L16.5472 28.4875L16.5422 28.4744C16.5216 28.4211 16.512 28.3642 16.5138 28.3071C16.5156 28.25 16.5289 28.1939 16.5528 28.142C16.5767 28.0901 16.6107 28.0435 16.6529 28.005L16.317 27.6367L16.6529 28.005C16.6952 27.9665 16.7447 27.9369 16.7985 27.9179C16.8524 27.8988 16.9095 27.8908 16.9665 27.8942C17.0236 27.8977 17.0793 27.9125 17.1305 27.9379C17.1817 27.9632 17.2273 27.9986 17.2646 28.0419C17.3019 28.0852 17.3301 28.1355 17.3476 28.1899L17.3499 28.1969L17.3523 28.2039C17.6768 29.1186 18.5484 29.7728 19.5733 29.7728H20.0733V29.2728V25.5637V25.0637H19.5733C18.7222 25.0637 17.906 24.7256 17.3042 24.1238C16.7024 23.522 16.3643 22.7058 16.3643 21.8547C16.3643 21.0036 16.7024 20.1874 17.3042 19.5856C17.906 18.9837 18.7222 18.6456 19.5733 18.6456H20.0733V18.1456V17.7184H20.9278V18.1456ZM20.0733 20.0002V19.5002H19.5733C18.9488 19.5002 18.35 19.7482 17.9084 20.1898C17.4668 20.6314 17.2188 21.2302 17.2188 21.8547C17.2188 22.4792 17.4668 23.078 17.9084 23.5196C18.35 23.9612 18.9488 24.2092 19.5733 24.2092H20.0733V23.7092V20.0002ZM20.9278 29.2728V29.7728H21.4278C22.0523 29.7728 22.6512 29.5247 23.0927 29.0832C23.5343 28.6416 23.7824 28.0427 23.7824 27.4183C23.7824 26.7938 23.5343 26.1949 23.0927 25.7534C22.6512 25.3118 22.0523 25.0637 21.4278 25.0637H20.9278V25.5637V29.2728Z"
                    fill="white"
                    stroke="#FAFAFA"
                  />
                  <path
                    d="M13.2057 12.5777L13.5219 12.6998C17.8707 14.3798 23.1083 14.3797 27.457 12.698L27.7695 12.5772L28.0001 12.8203C29.8981 14.8211 31.4858 17.0948 32.7105 19.5658L32.7115 19.5677C33.9873 22.1703 34.7037 24.8133 34.5867 27.1301L34.5867 27.1301C34.4723 29.3912 33.5716 31.3572 31.5218 32.806L31.5218 32.806C29.4129 34.296 25.9467 35.3336 20.5354 35.3336C15.1198 35.3336 11.6397 34.3141 9.51316 32.8421L9.51293 32.842C7.44943 31.412 6.53763 29.472 6.41014 27.2374L13.2057 12.5777ZM13.2057 12.5777L12.9752 12.8262M13.2057 12.5777L12.9752 12.8262M12.9752 12.8262C11.1573 14.7856 9.46566 17.1897 8.25095 19.6929L8.25091 19.6929M12.9752 12.8262L8.25091 19.6929M8.25091 19.6929C6.98037 22.3123 6.2784 24.9432 6.41013 27.2372L8.25091 19.6929ZM30.3428 6.18136C30.7832 6.39921 31.1642 6.60759 31.4775 6.79428L28.3457 11.3725L28.1141 11.7111L28.401 12.0044C30.3394 13.9861 32.1697 16.5163 33.4805 19.1919C34.7935 21.8721 35.5679 24.6624 35.441 27.1735C35.3151 29.6637 34.3054 31.8863 32.0163 33.5035C29.7051 35.1363 26.0382 36.1881 20.5364 36.1881C15.0332 36.1881 11.3544 35.1551 9.02802 33.5441C6.72448 31.9489 5.6991 29.7543 5.55803 27.2856C5.41571 24.7951 6.17576 22.0153 7.48354 19.3201C8.7889 16.6299 10.6229 14.0598 12.5812 11.9993L12.8589 11.7071L12.6323 11.3738L9.52247 6.79791C9.67984 6.70521 9.8536 6.60746 10.043 6.50656L10.043 6.50656L10.0447 6.50564C10.2353 6.40316 10.4408 6.29767 10.6614 6.19013L10.8573 6.09458C13.1034 5.02401 16.6645 3.80945 20.5364 3.80945C24.4384 3.80945 27.9975 5.04283 30.2165 6.12005C30.2165 6.12005 30.2165 6.12005 30.2165 6.12006L30.3412 6.18057C30.3417 6.18083 30.3422 6.1811 30.3428 6.18136ZM26.7245 12.0592L26.8779 12.0047L26.9698 11.8703L29.7117 7.86178L30.2968 7.00635L29.2631 7.08078C26.6696 7.26751 23.6003 7.87479 20.6554 8.7274C18.6714 9.30056 16.4387 9.21929 14.3339 8.83106C13.8046 8.73294 13.279 8.61613 12.758 8.48086L11.4726 8.14712L12.2188 9.24574L13.9991 11.8671L14.091 12.0024L14.245 12.0572C18.1692 13.4543 22.7996 13.4542 26.7245 12.0592ZM12.08 6.48035L10.8004 7.02347L12.1328 7.41985C12.8897 7.64501 13.6821 7.84132 14.4877 7.99046L14.4881 7.99055C16.523 8.36535 18.6079 8.42979 20.4168 7.90582L20.4175 7.90561C22.3859 7.33216 24.388 6.88116 26.4122 6.5552L26.4768 5.58279C24.7353 5.05845 22.6905 4.66397 20.5354 4.66397C17.2536 4.66397 14.2063 5.57787 12.08 6.48035Z"
                    fill="#white"
                    stroke="#FAFAFA"
                  />
                </svg>
              </div>
            </div>
            <div className="mb-3">
              <h2 className=" text-3xl font-semibold">25k</h2>
              <p className="text-base font-normal">
                Anual gross sale in our site
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mb-12  xs:flex-col xs:items-center  xs:w-full  ">
          {staffMembers.map((member, index) => (
            <StaffCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
        <div class="  flex justify-center space-x-2 mb-24">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleChangeStaff(index % staffMembers.length)}
              className={`w-3 h-3 block rounded-full ${
                index % staffMembers.length === selectedStaffIndex
                  ? "bg-red-600 border-2 border-gray-600"
                  : "bg-gray-600"
              } hover:border-2 hover:border-gray-400 hover:bg-red-600 active:border-2 active:border-gray-400 active:bg-red-600`}
            ></button>
          ))}
        </div>
        <Service />
      </div>

      <Footer />
    </div>
  );
};

export default About;
