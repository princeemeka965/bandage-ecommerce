import { ReactNode } from "react";

export const PhoneIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.66 1.17-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.602.211 1.287.033 1.77-.45l1.034-1.034a.679.679 0 0 0-.063-1.015l-2.306-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.744 1.744 0 0 1-1.658-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328ZM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.33.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.19-.547a1.745 1.745 0 0 1 1.494.315l2.305 1.794c.83.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.845 1.065-2.877.702a18.635 18.635 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const MailIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M-.5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1h-12Zm13 2.383L9.742 8.238l4.758 2.876V5.383Zm-.034 6.878L8.773 8.82 7.5 9.583 6.23 8.82.535 12.26A1 1 0 0 0 1.5 13h12a1 1 0 0 0 .966-.739ZM.502 11.114l4.757-2.876L.502 5.383V11.114Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterIcon = (props: any): ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} {...props}>
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#fff"}
        d="M5.026 14c6.038 0 9.341-5.002 9.341-9.333 0-.14 0-.282-.006-.422A6.684 6.684 0 0 0 16 2.543c-.6.265-1.237.44-1.889.518a3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 5.03 9.325 9.325 0 0 1 1.108 1.6a3.289 3.289 0 0 0 1.018 4.383A3.323 3.323 0 0 1 .64 5.576v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 12.58a6.315 6.315 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 14Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.fill ? props.fill : "#fff"} d="M.5 0h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterIconFooter = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M8.91 19c8.303 0 12.845-6.927 12.845-12.923 0-.194 0-.39-.009-.585A9.228 9.228 0 0 0 24 3.136a9.105 9.105 0 0 1-2.597.717 4.565 4.565 0 0 0 1.99-2.516c-.888.53-1.858.9-2.87 1.098a4.491 4.491 0 0 0-5.425-.897 4.537 4.537 0 0 0-1.985 2.134 4.579 4.579 0 0 0-.285 2.909c-1.795-.091-3.55-.56-5.153-1.378a12.839 12.839 0 0 1-4.151-3.37 4.581 4.581 0 0 0-.492 3.312A4.554 4.554 0 0 0 4.923 7.9a4.545 4.545 0 0 1-2.043-.565v.063a4.572 4.572 0 0 0 1.021 2.876A4.516 4.516 0 0 0 6.5 11.853a4.374 4.374 0 0 1-1.19.16c-.283 0-.565-.026-.844-.08.289.903.85 1.692 1.607 2.258.756.565 1.669.878 2.61.895a9.019 9.019 0 0 1-5.61 1.948A8.62 8.62 0 0 1 2 16.972 12.783 12.783 0 0 0 8.91 19Z"
    />
  </svg>
);

export const FacebookIcon = (props: any): ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} {...props}>
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#fff"}
        d="M16.002 8.05c0-4.446-3.582-8.05-8-8.05C3.582.001 0 3.604 0 8.051c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.72V8.051h2.032V6.276c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.252v5.625c3.824-.604 6.75-3.934 6.75-7.951Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.fill ? props.fill : "#fff"} d="M.5 0h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const FacebookIconFooter = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      fillRule="evenodd"
      d="M24 11.57C24 5.18 18.852 0 12.501 0 6.148.001 1 5.18 1 11.572 1 17.346 5.206 22.132 10.702 23v-8.085H7.784v-3.343h2.92V9.02c0-2.9 1.718-4.5 4.344-4.5 1.26 0 2.575.225 2.575.225v2.846h-1.45c-1.428 0-1.873.893-1.873 1.808v2.17h3.188l-.51 3.344h-2.68v8.085C19.794 22.13 24 17.344 24 11.57Z"
      clipRule="evenodd"
    />
  </svg>
);

export const YouTubeIcon = (props: any): ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} {...props}>
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#fff"}
        d="M9.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L1.09 9.82l-.008-.104A31.402 31.402 0 0 1 1 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007c.952-.03 1.904-.048 2.856-.051h.193v-.001ZM7.4 5.209v4.818l4.157-2.408L7.4 5.209Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.fill ? props.fill : "#fff"} d="M.5 0h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const InstagramIcon = (props: any): ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill={props.fill ? props.fill : "#fff"}
      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42c-.534.2-1.018.516-1.417.923-.407.4-.722.883-.923 1.417C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.915 3.915 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.927 3.927 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003H8Zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002Zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92Zm-4.27 1.122a4.11 4.11 0 1 0-.128 8.217A4.11 4.11 0 0 0 8 3.892Zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334Z"
    />
  </svg>
);

export const InstagramIconFooter = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M13 1c-2.985 0-3.36.014-4.533.066-1.173.055-1.972.24-2.672.511-.734.277-1.4.71-1.948 1.27a5.4 5.4 0 0 0-1.27 1.948c-.272.699-.457 1.499-.511 2.668C2.014 8.638 2 9.013 2 12c0 2.987.014 3.36.066 4.534.055 1.171.24 1.97.512 2.67a5.403 5.403 0 0 0 1.269 1.948c.61.612 1.223.989 1.947 1.27.7.272 1.498.457 2.67.511C9.638 22.986 10.012 23 13 23c2.988 0 3.36-.014 4.535-.066 1.17-.055 1.971-.24 2.671-.512a5.386 5.386 0 0 0 1.947-1.269 5.404 5.404 0 0 0 1.27-1.948c.27-.7.456-1.499.511-2.67.052-1.173.066-1.547.066-4.535 0-2.988-.014-3.362-.066-4.536-.055-1.17-.24-1.97-.512-2.669a5.4 5.4 0 0 0-1.269-1.948 5.379 5.379 0 0 0-1.948-1.27c-.701-.272-1.502-.457-2.672-.511C16.36 1.014 15.986 1 12.997 1h.004H13Zm-.986 1.983h.987c2.937 0 3.285.01 4.444.063 1.073.048 1.656.228 2.044.378.512.2.88.439 1.265.824a3.4 3.4 0 0 1 .822 1.265c.151.386.33.97.378 2.042.054 1.159.065 1.507.065 4.442 0 2.936-.011 3.285-.065 4.444-.048 1.073-.228 1.654-.378 2.042-.177.478-.458.91-.824 1.264-.385.385-.75.623-1.265.822-.385.151-.968.33-2.042.38-1.159.052-1.507.064-4.444.064-2.937 0-3.286-.012-4.445-.065-1.072-.049-1.654-.228-2.042-.379a3.407 3.407 0 0 1-1.265-.822 3.41 3.41 0 0 1-.825-1.265c-.15-.387-.33-.97-.378-2.042-.052-1.16-.063-1.507-.063-4.446 0-2.937.01-3.283.063-4.442.05-1.073.228-1.656.38-2.043.199-.513.438-.88.823-1.265.385-.385.75-.623 1.265-.823.388-.15.97-.33 2.042-.38 1.015-.046 1.408-.06 3.458-.061v.003Zm6.859 1.826a1.32 1.32 0 1 0 0 2.64 1.32 1.32 0 0 0 0-2.64ZM13 6.35a5.65 5.65 0 1 0-.176 11.3 5.65 5.65 0 0 0 .176-11.3Zm0 1.982a3.667 3.667 0 1 1 0 7.334 3.667 3.667 0 0 1 0-7.334Z"
    />
  </svg>
);

export const SearchIconLg = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#23A6F0"
        d="M11.743 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.012 1.012 0 0 0-.115-.1v.001ZM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CartIconLg = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#23A6F0"}
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8a.5.5 0 0 1-.49.408H4a.5.5 0 0 1-.492-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5ZM3.102 4l1.313 7h8.17l1.313-7H3.102ZM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const SearchIconXs = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={`${props.fill ? props.fill : "#252B42"}`}
        fillRule="evenodd"
        d="m17.19 15.478 6.456 6.456a1.21 1.21 0 1 1-1.713 1.711l-6.455-6.456a9.6 9.6 0 1 1 1.71-1.71h.002ZM9.6 16.8A7.2 7.2 0 1 0 9.6 2.4a7.2 7.2 0 0 0 0 14.4Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CartIconXs = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <g fill={`${props.fill ? props.fill : "#252B42"}`} clipPath="url(#a)">
      <path d="M8 22.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM19.2 22.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM22.4 4H4.656L4 .64A.8.8 0 0 0 3.2 0H0v1.6h2.544L5.6 16.96a.8.8 0 0 0 .8.64h14.4V16H7.056L6.4 12.8h14.4a.8.8 0 0 0 .8-.624l1.6-7.2A.8.8 0 0 0 22.4 4Zm-2.24 7.2H6.096l-1.12-5.6H21.4l-1.24 5.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v22.4H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CartIconMd = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="37"
    viewBox="0 0 38 37"
    fill="none"
  >
    <g clipPath="url(#clip0_541_199)">
      <path
        d="M0.5 3.46875C0.5 3.16209 0.621819 2.868 0.838658 2.65116C1.0555 2.43432 1.34959 2.3125 1.65625 2.3125H5.125C5.38292 2.31257 5.6334 2.39887 5.83663 2.55768C6.03985 2.71649 6.18415 2.93869 6.24656 3.18894L7.18313 6.9375H34.0312C34.201 6.93766 34.3687 6.9752 34.5223 7.04746C34.6759 7.11972 34.8118 7.22493 34.9202 7.35561C35.0285 7.48629 35.1068 7.63923 35.1494 7.80357C35.192 7.96791 35.1979 8.13962 35.1667 8.3065L31.6979 26.8065C31.6483 27.0715 31.5077 27.3108 31.3004 27.483C31.0931 27.6553 30.8321 27.7498 30.5625 27.75H9.75C9.48044 27.7498 9.21943 27.6553 9.01211 27.483C8.80478 27.3108 8.66416 27.0715 8.61456 26.8065L5.14813 8.34119L4.22312 4.625H1.65625C1.34959 4.625 1.0555 4.50318 0.838658 4.28634C0.621819 4.0695 0.5 3.77541 0.5 3.46875ZM7.67338 9.25L10.7097 25.4375H29.6028L32.6391 9.25H7.67338ZM12.0625 27.75C10.8359 27.75 9.65949 28.2373 8.79213 29.1046C7.92478 29.972 7.4375 31.1484 7.4375 32.375C7.4375 33.6016 7.92478 34.778 8.79213 35.6454C9.65949 36.5127 10.8359 37 12.0625 37C13.2891 37 14.4655 36.5127 15.3329 35.6454C16.2002 34.778 16.6875 33.6016 16.6875 32.375C16.6875 31.1484 16.2002 29.972 15.3329 29.1046C14.4655 28.2373 13.2891 27.75 12.0625 27.75ZM28.25 27.75C27.0234 27.75 25.847 28.2373 24.9796 29.1046C24.1123 29.972 23.625 31.1484 23.625 32.375C23.625 33.6016 24.1123 34.778 24.9796 35.6454C25.847 36.5127 27.0234 37 28.25 37C29.4766 37 30.653 36.5127 31.5204 35.6454C32.3877 34.778 32.875 33.6016 32.875 32.375C32.875 31.1484 32.3877 29.972 31.5204 29.1046C30.653 28.2373 29.4766 27.75 28.25 27.75ZM12.0625 30.0625C12.6758 30.0625 13.264 30.3061 13.6977 30.7398C14.1314 31.1735 14.375 31.7617 14.375 32.375C14.375 32.9883 14.1314 33.5765 13.6977 34.0102C13.264 34.4439 12.6758 34.6875 12.0625 34.6875C11.4492 34.6875 10.861 34.4439 10.4273 34.0102C9.99364 33.5765 9.75 32.9883 9.75 32.375C9.75 31.7617 9.99364 31.1735 10.4273 30.7398C10.861 30.3061 11.4492 30.0625 12.0625 30.0625ZM28.25 30.0625C28.8633 30.0625 29.4515 30.3061 29.8852 30.7398C30.3189 31.1735 30.5625 31.7617 30.5625 32.375C30.5625 32.9883 30.3189 33.5765 29.8852 34.0102C29.4515 34.4439 28.8633 34.6875 28.25 34.6875C27.6367 34.6875 27.0485 34.4439 26.6148 34.0102C26.1811 33.5765 25.9375 32.9883 25.9375 32.375C25.9375 31.7617 26.1811 31.1735 26.6148 30.7398C27.0485 30.3061 27.6367 30.0625 28.25 30.0625Z"
        fill="#23A6F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_541_199">
        <rect width="37" height="37" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export const CollapseIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#252B42"
      d="M.571 0H23.43v2.286H.57V0Zm5.715 5.714h17.143V8H6.286V5.714Zm7.143 5.715h10v2.285h-10V11.43Z"
    />
  </svg>
);

export const WishIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#23A6F0"}
        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.64 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748ZM8 15C-7.333 4.868 3.28-3.04 7.824 1.143c.06.055.12.112.176.171.057-.059.115-.116.176-.17C12.72-3.042 23.333 4.867 8 15Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const WishIconXs = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={29}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#23A6F0"
        d="m15 4.98-1.3-1.335C10.65.509 5.056 1.591 3.037 5.534c-.948 1.854-1.161 4.53.57 7.948 1.667 3.29 5.136 7.23 11.393 11.521 6.257-4.291 9.724-8.232 11.393-11.521 1.731-3.419 1.52-6.094.57-7.948-2.02-3.943-7.613-5.026-10.664-1.89L15 4.98Zm0 22.208C-12.791 8.823 6.443-5.51 14.68 2.072c.11.1.216.203.32.31.102-.107.209-.21.319-.308 8.236-7.588 27.472 6.748-.32 25.114Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h29v29H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const Avatar = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#23A6F0"
        d="M6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 8.68 8.288 8 6 8c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const AvatarXs = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={29}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#23A6F0"
        d="M13.5 14.5a6.63 6.63 0 0 0 4.773-2.05A7.134 7.134 0 0 0 20.25 7.5a7.134 7.134 0 0 0-1.977-4.95A6.63 6.63 0 0 0 13.5.5a6.63 6.63 0 0 0-4.773 2.05A7.134 7.134 0 0 0 6.75 7.5c0 1.857.711 3.637 1.977 4.95A6.63 6.63 0 0 0 13.5 14.5Zm4.5-7a4.756 4.756 0 0 1-1.318 3.3 4.42 4.42 0 0 1-3.182 1.367 4.42 4.42 0 0 1-3.182-1.367A4.756 4.756 0 0 1 9 7.5c0-1.238.474-2.425 1.318-3.3A4.42 4.42 0 0 1 13.5 2.833 4.42 4.42 0 0 1 16.682 4.2 4.756 4.756 0 0 1 18 7.5Zm9 18.667c0 2.333-2.25 2.333-2.25 2.333H2.25S0 28.5 0 26.167c0-2.334 2.25-9.334 13.5-9.334s13.5 7 13.5 9.334Zm-2.25-.01c-.002-.574-.346-2.3-1.872-3.882-1.467-1.522-4.228-3.108-9.378-3.108-5.152 0-7.911 1.586-9.378 3.108-1.526 1.582-1.867 3.308-1.872 3.882h22.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h27v28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CaretBlack = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={7}
    fill="none"
    {...props}
  >
    <path
      fill="#252B42"
      d="M1.429.5 5 4.071 8.571.5 10 1.214l-5 5-5-5L1.429.5Z"
    />
  </svg>
);

export const BookMarkIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M6 24v34.587S19.863 58.071 36 66c16.137-7.929 30-7.413 30-7.413V24s-16.362 0-30 7.413C22.362 24 6 24 6 24ZM36 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
);

export const Book = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M42.75 22.5H58.5V27H42.75v-4.5ZM42.75 33.75H58.5v4.5H42.75v-4.5ZM42.75 45H58.5v4.5H42.75V45ZM13.5 22.5h15.75V27H13.5v-4.5ZM13.5 33.75h15.75v4.5H13.5v-4.5ZM13.5 45h15.75v4.5H13.5V45Z"
    />
    <path
      fill="#23A6F0"
      d="M63 11.25H9a4.505 4.505 0 0 0-4.5 4.5v40.5a4.505 4.505 0 0 0 4.5 4.5h54a4.505 4.505 0 0 0 4.5-4.5v-40.5a4.505 4.505 0 0 0-4.5-4.5Zm-54 4.5h24.75v40.5H9v-40.5Zm29.25 40.5v-40.5H63v40.5H38.25Z"
    />
  </svg>
);

export const SignalGrowth = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M65.76 19.86a3 3 0 0 0-1.62-1.62A3 3 0 0 0 63 18H48a3 3 0 0 0 0 6h7.77L39 40.77l-9.87-9.9a3 3 0 0 0-4.26 0l-18 18a3 3 0 0 0 0 4.26 3 3 0 0 0 4.26 0L27 37.23l9.87 9.9a3 3 0 0 0 4.26 0L60 28.23V36a3 3 0 1 0 6 0V21a3.002 3.002 0 0 0-.24-1.14Z"
    />
  </svg>
);

export const ClockIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#23A6F0"
      d="M8.5 14.667a6.08 6.08 0 0 1-6-6 6.08 6.08 0 0 1 6-6 6.08 6.08 0 0 1 6 6 6.08 6.08 0 0 1-6 6ZM8.5 4a4.73 4.73 0 0 0-4.667 4.667 4.73 4.73 0 0 0 4.666 4.666 4.73 4.73 0 0 0 4.667-4.666A4.73 4.73 0 0 0 8.499 4Zm3.333 5.333h-4v-4h1.333V8h2.667v1.333Zm2.194-4.861-2.006-2 .94-.945 2.006 2-.94.944v.001Zm-11.056 0-.944-.945 1.994-2 .944.945-1.993 2h-.001Z"
    />
  </svg>
);

export const BarChart = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#23856D"
        d="M16.333 13.833H2v-13a.167.167 0 0 0-.167-.166H.667A.167.167 0 0 0 .5.833v14.334c0 .091.075.166.167.166h15.666a.167.167 0 0 0 .167-.166V14a.167.167 0 0 0-.167-.167ZM3.5 12.5h11.167a.167.167 0 0 0 .166-.167V3.25a.167.167 0 0 0-.285-.119l-4.381 4.382-2.613-2.584a.167.167 0 0 0-.235 0L3.38 8.88a.164.164 0 0 0-.048.117v3.337c0 .092.075.167.167.167Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.667h16v14.667H.5z" />
      </clipPath>
    </defs>
  </svg>
);

export const ChevronRight = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill ? props.fill : "#23A6F0"}
        fillRule="evenodd"
        d="M.68.18a.615.615 0 0 1 .872 0l7.384 7.385a.615.615 0 0 1 0 .87L1.552 15.82a.616.616 0 0 1-.871-.872L7.63 8 .68 1.052a.615.615 0 0 1 0-.871Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h9v16h-9z" />
      </clipPath>
    </defs>
  </svg>
);

export const EyeIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    <path
      fill="#000"
      d="M2 10s3-5.5 8-5.5 8 5.5 8 5.5-3 5.5-8 5.5S2 10 2 10Zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </svg>
);

export const CloseIcon = (props: any): ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
