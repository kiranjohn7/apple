import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Button({
  children,
  variant = "primary", 
  iconRight = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center rounded-full font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition";
  const sizeClasses =
    "text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2.5 md:py-3";
  const variants = {
    primary:
      "bg-[#0071e3] hover:bg-[#005fcc] text-white shadow-md",
    outline:
      "border border-[#0071e3] text-[#0071e3] hover:bg-[#f0f8ff] bg-transparent",
    link: "text-[#0071e3] hover:underline bg-transparent px-0 py-2",
  };

  const classes = [base, sizeClasses, variants[variant] || variants.primary, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      {iconRight && (
        <FiArrowRight
          className="ml-2"
          aria-hidden="true"
          size={16}
          strokeWidth={2}
        />
      )}
    </button>
  );
}