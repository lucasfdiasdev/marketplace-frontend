"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      width={30}
      height={30}
      src={"/images/placeholder.jpg"}
      className="rounded-full object-cover"
      alt="Avatar do Usuário"
    />
  );
};

export default Avatar;
