import React from 'react';

const CustomButton = ({ label, onClick, className }) => {
  return (
    <div
      className="relative rounded-full p-[2px] bg-[linear-gradient(90deg,rgba(1,132,58,0.73)_0%,rgba(0,255,132,0.6)_100%)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,132,0.5)]"
    >
      <div className="bg-black rounded-full w-full h-full">
        <button
          onClick={onClick}
          className={`rounded-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold w-full text-white backdrop-blur-md bg-white/5 hover:bg-white/10 ${className || ''}`}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

// Example usage component with the same layout from the original code


// Default export of the container component
export default CustomButton;

// Also export the individual button for more flexible usage
export { CustomButton };



















// import React from "react";

// /**
//  * A responsive custom button with gradient border effect
//  * @param {Object} props - Component props
//  * @param {string} props.title - Button text content
//  * @param {string} [props.className] - Additional classes to apply
//  * @param {string} [props.size] - Button size: "sm", "md", "lg" (default: "md")
//  * @param {React.ReactNode} [props.icon] - Optional icon to display before text
//  * @param {Function} [props.onClick] - Click handler function
//  * @param {string} [props.type] - Button type attribute (default: "button")
//  */
// const CustomButton = ({
//   title,
//   className = "",
//   size = "md",
//   icon,
//   onClick,
//   type = "button",
//   ...restProps
// }) => {
//   // Dynamic sizing classes based on the size prop
//   const sizeClasses = {
//     sm: "px-3 py-1.5 text-xs",
//     md: "px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base",
//     lg: "px-5 py-2.5 text-base md:px-8 md:py-3 md:text-lg"
//   };

//   // Get the appropriate size classes
//   const buttonSizeClasses = sizeClasses[size] || sizeClasses.md;

//   return (
//     <div 
//       className={`relative rounded-full p-[2px] bg-[linear-gradient(90deg,rgba(1,132,58,0.73)_0%,rgba(0,255,132,0.6)_100%)] 
//       transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,132,0.5)]
//       w-full max-w-xs md:max-w-sm ${className}`}
//     >
//       <div className="bg-black rounded-full w-full h-full">
//         <button
//           type={type}
//           onClick={onClick}
//           className={`rounded-full ${buttonSizeClasses} font-semibold w-full text-white 
//           backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors
//           flex items-center justify-center gap-2`}
//           {...restProps}
//         >
//           {icon && <span className="inline-flex items-center">{icon}</span>}
//           {title}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomButton;



// EXAMPLE USAGE: -->
//  <div className="relative rounded-full p-[2px]">
//    <div className=" rounded-full w-full h-full">
//      <CustomButton
//        title="Explore Platform"

//        // <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//        //   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//        // </svg>
//      />
//    </div>
//  </div>;