const Footer = () => {
  return (
    <div className="bg-[#D2E6E4] mt-10">
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-5 items-end gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="39"
              viewBox="0 0 64 39"
              fill="none"
            >
              <path
                d="M54.7296 35.4593L54.7296 19.5947C54.7296 19.5947 42.4914 21.1552 31.9543 26.3803C21.4172 21.1552 9.179 19.5947 9.179 19.5947L9.179 35.4593C5.58787 36.2632 2.68189 37.2325 0.720947 38.3438C7.33618 36.2632 18.842 34.8682 31.9307 34.8682C45.0194 34.8682 56.5252 36.2395 63.1404 38.3438C61.2031 37.2325 58.3208 36.2632 54.7296 35.4593Z"
                fill="#0B7077"
              />
              <path
                d="M12.5103 17.8921L12.5103 20.1382C16.8574 20.9657 24.7957 22.8099 31.9544 26.38C23.4963 19.7363 12.5103 17.8921 12.5103 17.8921Z"
                fill="#0B7077"
              />
              <path
                d="M51.422 17.8921C51.422 17.8921 40.436 19.7363 31.9779 26.38C39.1365 22.8335 47.0748 20.9657 51.422 20.1382L51.422 17.8921Z"
                fill="#0B7077"
              />
              <path
                d="M31.978 18.105C31.5291 19.098 30.844 19.9728 30.0407 20.6584L31.9544 23.9921L33.9153 20.6584C33.0884 19.9728 32.4269 19.098 31.978 18.105Z"
                fill="#0B7077"
              />
              <path
                d="M26.1661 15.6223C27.4419 15.6223 28.505 14.582 28.505 13.2816C28.505 12.0049 27.4655 10.9409 26.1661 10.9409C24.8903 10.9409 23.8271 11.9812 23.8271 13.2816C23.8271 14.582 24.8667 15.6223 26.1661 15.6223ZM25.3864 11.6502C25.8826 11.6502 26.2842 12.0521 26.2842 12.5487C26.2842 13.0452 25.8826 13.4471 25.3864 13.4471C24.8903 13.4471 24.4886 13.0452 24.4886 12.5487C24.4886 12.0521 24.8903 11.6502 25.3864 11.6502Z"
                fill="#0B7077"
              />
              <path
                d="M35.4273 13.2816C35.4273 14.5583 36.4668 15.6223 37.7426 15.6223C39.0184 15.6223 40.0816 14.582 40.0816 13.2816C40.0816 12.0049 39.0421 10.9409 37.7426 10.9409C36.4905 10.9646 35.4273 12.0049 35.4273 13.2816ZM38.0262 12.5487C38.0262 13.0452 37.6245 13.4471 37.1284 13.4471C36.6322 13.4471 36.2306 13.0452 36.2306 12.5487C36.2306 12.0521 36.6322 11.6502 37.1284 11.6502C37.6245 11.6502 38.0262 12.0521 38.0262 12.5487Z"
                fill="#0B7077"
              />
              <path
                d="M21.7007 17.8685C22.8584 19.0034 24.4413 19.689 26.166 19.689C28.7176 19.689 30.9384 18.1758 31.978 16.0007C32.9939 18.1758 35.2147 19.689 37.7899 19.689C39.5383 19.689 41.0976 18.9797 42.2552 17.8685C42.7514 18.5778 43.1766 19.3344 43.531 20.1146C44.9722 19.5708 46.2952 19.1689 47.4529 18.8378C46.6969 17.2774 45.5156 15.8825 44.0272 14.7003C44.1217 14.2511 44.1925 13.7546 44.1925 13.2817C44.1925 12.336 43.9799 11.4375 43.6019 10.61C43.153 9.28601 42.4679 8.05656 41.5937 6.96898L41.5465 0.65625L36.3015 3.11514C34.9312 2.59499 33.4664 2.33492 31.978 2.33492C30.4896 2.33492 29.0247 2.59499 27.6544 3.11514L22.3859 0.65625L22.3386 6.96898C21.4881 8.05656 20.803 9.26236 20.3541 10.5627C19.976 11.3902 19.7398 12.3123 19.7398 13.2817C19.7398 13.7782 19.787 14.2511 19.9052 14.7003C18.4167 15.8825 17.2591 17.2774 16.5031 18.8378C17.6371 19.1689 18.9838 19.5944 20.4249 20.1146C20.7793 19.3344 21.2046 18.5778 21.7007 17.8685ZM42.8222 13.2817C42.8222 16.0716 40.5542 18.3413 37.7663 18.3413C34.9785 18.3413 32.7104 16.0716 32.7104 13.2817C32.7104 10.4918 34.9785 8.22207 37.7663 8.22207C40.5542 8.24571 42.8222 10.5155 42.8222 13.2817ZM31.9544 3.68258C35.1675 3.68258 38.0971 5.07752 40.1053 7.32362C39.3729 7.03991 38.5696 6.87441 37.7427 6.87441C35.1911 6.87441 32.9703 8.38757 31.9307 10.5627C30.9148 8.38757 28.694 6.87441 26.1188 6.87441C25.2919 6.87441 24.4886 7.03991 23.7798 7.32362C25.8353 5.07752 28.7412 3.68258 31.9544 3.68258ZM26.166 8.24571C28.9539 8.24571 31.222 10.5155 31.222 13.3053C31.222 16.0952 28.9539 18.365 26.166 18.365C23.3782 18.365 21.1101 16.0952 21.1101 13.3053C21.1101 10.5155 23.3782 8.24571 26.166 8.24571Z"
                fill="#0B7077"
              />
            </svg>
            <h3 className="text-[#0B7077] text-[30px]">NurseQuizz Online</h3>
          </div>

          <div className="mt-7 space-y-3">
            <p className="text-[#0B7077] font-light w-2/3">
              এই ওয়েবসাইটে আপনার কোচিং প্রতিষ্টানকে অন্তর্ভূক্ত করতে যোগাযোগ
              করুন
            </p>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.75269 9.97239C13.7418 13.9604 14.6467 9.34672 17.1866 11.8848C19.6352 14.3328 21.0426 14.8232 17.9402 17.9247C17.5516 18.237 15.0826 21.9943 6.40555 13.3197C-2.27253 4.644 1.48253 2.17244 1.79492 1.78395C4.90481 -1.32615 5.38681 0.0893829 7.83544 2.53733C10.3753 5.0765 5.76361 5.98441 9.75269 9.97239Z"
                  fill="#0B7077"
                />
              </svg>
              <p className="text-[#0B7077] font-medium text-sm">
                Tel :+9229341037
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M20.7207 10C20.7207 15.524 16.2437 20 10.7207 20C5.1977 20 0.720703 15.524 0.720703 10C0.720703 4.478 5.1977 0 10.7207 0C16.2437 0 20.7207 4.478 20.7207 10Z"
                  fill="#0B7077"
                />
                <path
                  d="M14.2944 13.8143C14.1634 13.8143 14.0314 13.7803 13.9104 13.7093L9.98442 11.3673C9.75842 11.2313 9.61942 10.9863 9.61942 10.7223V5.67529C9.61942 5.26129 9.95542 4.92529 10.3694 4.92529C10.7834 4.92529 11.1194 5.26129 11.1194 5.67529V10.2963L14.6794 12.4193C15.0344 12.6323 15.1514 13.0923 14.9394 13.4483C14.7984 13.6833 14.5494 13.8143 14.2944 13.8143Z"
                  fill="#0B7077"
                />
              </svg>
              <p className="text-[#0B7077] font-medium text-sm">
                Response hours: 8 to 20
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M20.7209 12.94C20.7209 15.73 18.4809 17.99 15.6909 18H15.6809H5.77095C2.99095 18 0.720947 15.75 0.720947 12.96V12.95C0.720947 12.95 0.726947 8.524 0.734947 6.298C0.735947 5.88 1.21595 5.646 1.54295 5.906C3.91895 7.791 8.16795 11.228 8.22095 11.273C8.93095 11.842 9.83095 12.163 10.7509 12.163C11.6709 12.163 12.5709 11.842 13.2809 11.262C13.3339 11.227 17.4879 7.893 19.8999 5.977C20.2279 5.716 20.7099 5.95 20.7109 6.367C20.7209 8.576 20.7209 12.94 20.7209 12.94Z"
                  fill="#0B7077"
                />
                <path
                  d="M20.197 2.67351C19.331 1.04151 17.627 -0.000488281 15.751 -0.000488281H5.77104C3.89504 -0.000488281 2.19104 1.04151 1.32504 2.67351C1.13104 3.03851 1.22304 3.49351 1.54604 3.75151L8.97104 9.69051C9.49104 10.1105 10.121 10.3195 10.751 10.3195C10.755 10.3195 10.758 10.3195 10.761 10.3195C10.764 10.3195 10.768 10.3195 10.771 10.3195C11.401 10.3195 12.031 10.1105 12.551 9.69051L19.976 3.75151C20.299 3.49351 20.391 3.03851 20.197 2.67351Z"
                  fill="#0B7077"
                />
              </svg>
              <p className="text-[#0B7077] font-medium text-sm">
                Email: info@nursequizz.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between col-span-1">
          <div>
            <p className="text-[#0A033C] font-bold mb-5">Categories</p>
            <ul className="space-y-3 text-[#0B7077]">
              <li className="cursor-pointer">Admission</li>
              <li className="cursor-pointer">Licensing</li>
              <li className="cursor-pointer">Job Preparation</li>
              <li className="cursor-pointer">General Knowledge</li>
            </ul>
          </div>
          <div>
            <p className="text-[#0A033C] font-bold mb-5">Links</p>
            <ul className="space-y-3 text-[#0B7077]">
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Article</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <p className="font-snigdha text-[#0A033C] text-center">
            আমাদের অনলাইন নিউজলেটার পেতে সাবস্ক্রাইব করুন
          </p>
          <div className="mt-5">
            <form>
              <div className="relative">
                <input
                  type="email"
                  className="block px-4 py-5 pl-10 w-full font-medium text-[#0B7077] bg-white rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#0B7077]"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2 bg-[#0B7077] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl px-8 py-3 "
                >
                  Send
                </button>
              </div>
            </form>
            <p className="text-[#0B7077] font-semibold text-right text-sm mt-10">All Rights Reserved By NurseQuizz.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
