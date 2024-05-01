"use client";

import clsx from "clsx";
import { LegacyRef } from "react";

interface IInput {
  id: string;
  type?: string;
  name?: string;
  value?: string;
  maxLength?: number;
  ref?: LegacyRef<HTMLInputElement>;
  className?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  id,
  ref,
  type,
  name,
  value,
  onBlur,
  onChange,
  className,
  maxLength,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        ref={ref}
        name={name}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          `
            flex
            w-full
            rounded-md
            border
            bg-transparent
            p-4
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
