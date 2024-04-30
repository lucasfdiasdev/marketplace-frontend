"use client";

import clsx from "clsx";

interface IInput {
  type?: string;
  name?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  type,
  name,
  value,
  placeholder,
  className,
  onChange,
  onBlur,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          `
            flex
            h-9
            w-full
            rounded-md
            border
            bg-transparent
            px-3
            py-1
            text-sm
            shadow-sm
            transition-colors
            file:border-0
            file:bg-transparent 
            file:text-sm
            file:font-medium
            focus-visible:outline-none 
            focus-visible:ring-1
            disabled:cursor-not-allowed 
            disabled:opacity-50
        `,
          className
        )}
      />
    </div>
  );
};

export default Input;
