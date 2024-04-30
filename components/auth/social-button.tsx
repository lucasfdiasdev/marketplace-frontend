import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import Button from "../global/button";

const SocialButton = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <Button outline className="w-full">
          <FcGoogle size={20} />
        </Button>
        <Button outline className="w-full">
          <FaFacebookF className="text-blue-500" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default SocialButton;
