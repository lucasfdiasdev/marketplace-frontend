"use client";

import clsx from "clsx";

interface IInputForm {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const InputForm: React.FC<IInputForm> = ({
  id,
  label,
  type,
  disabled,
  placeholder,
  className,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(
          `
           peer
           w-full
           p-4
           pt-6
           font-light
           bg-white
           border-2
           rounded-md
           outline-none
           transition
           disabled:opacity-70
           disabled:cursor-not-allowed
           pl-4 
           border-neutral-300 
           focus:border-black`,
          className
        )}
      />
      <label
        className={clsx(
          `
            absolute
            duration-150 
            transform 
            -translate-y-3
            top-5 
            origin-[0]
            z-10 
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:!translate-y-0
            peer-placeholder-shown:
            peer-focus:scale-75 
            peer-focus:-translate-y-4
            left-4
            text-zinc-400
          `
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default InputForm;
