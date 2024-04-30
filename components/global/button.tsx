import clsx from "clsx";

interface IButton {
  primary?: boolean;
  destructive?: boolean;
  outline?: boolean;
  secondary?: boolean;
  ghost?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({
  type,
  primary,
  destructive,
  outline,
  secondary,
  ghost,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `
          inline-flex
          items-center
          justify-center
          whitespace-nowrap
          rounded-md
          text-sm
          font-medium
          transition-colors
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-ring
          disabled:pointer-events-none
          disabled:opacity-50
          px-4 
          py-2
        `,
        primary
          ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
          : "",
        destructive
          ? "bg-red-500 text-white shadow-sm hover:bg-red-500/90"
          : "",
        outline
          ? "border bg-transparent shadow-sm hover:bg-gray-50 hover:text-gray-200"
          : "",
        secondary
          ? "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
          : "",
        ghost ? "hover:bg-accent hover:text-accent-foreground" : "",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
