import clsx from "clsx";
import { IconType } from "react-icons";

interface IButton {
  icon?: IconType;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButton> = ({
  type,
  small,
  outline,
  onClick,
  children,
  disabled,
  className,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
        `,

        outline
          ? "bg-white border-gray-500 text-black"
          : "bg-rose-500 border-rose-500 text-white",
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2",
        className
      )}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {children}
    </button>
  );
};

export default Button;
