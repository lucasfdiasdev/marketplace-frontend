import Link from "next/link";
import { CiBoxes } from "react-icons/ci";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <CiBoxes size={32} className="text-rose-500" />
      <span className="text-xl font-semibold hidden md:block text-rose-500">
        Desapega
      </span>
    </Link>
  );
};

export default Logo;
