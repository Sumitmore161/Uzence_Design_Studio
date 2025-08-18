import React from "react";
import clsx from "clsx";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-transparent focus:ring-2 focus:ring-blue-500",
  outlined: "border border-gray-300 focus:ring-2 focus:ring-blue-500",
  ghost: "border border-transparent focus:ring-2 focus:ring-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const inputId = React.useId();
  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && (
        <label htmlFor ={inputId} className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        id={inputId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        className={clsx(
          "rounded-lg outline-none transition w-full",
          sizeClasses[size],
          variantClasses[variant],
          disabled && "bg-gray-200 cursor-not-allowed",
          invalid && "border-red-500 focus:ring-red-500"
        )}
      />

      {helperText && !invalid && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}

      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
