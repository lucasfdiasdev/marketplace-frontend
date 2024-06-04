import Image from "next/image";

import loginImg from "@/public/images/banner-login.jpg";

const LoginContent = () => {
  return (
    <div className="flex p-4">
      <div className="flex-1">ola</div>
      <div className="flex-1 w-full">
        <Image
          width={600}
          height={600}
          src={loginImg}
          alt="Login Image"
          className="absolute -top-12 right-32 h-[450px] w-[400px] object-cover object-center rounded-md"
        />
      </div>
    </div>
  );
};

export default LoginContent;
