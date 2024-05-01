"use client";

import { useCallback, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";

import { useLoginModal } from "@/hooks/use-login-modal";
import { useRegisterModal } from "@/hooks/use-register-modal";

import Avatar from "@/components/global/avatar";
import MenuItem from "@/components/includes/header/menu-item";

const UserMenu = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm py-3 px-4 rounded-full hover:bg-neutral-100  font-semibold transition cursor-pointer"
        >
          Vender
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
        <div>
          <IoBagOutline size={24} className="text-rose-500" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-sm w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={loginModal.onOpen} label="Entrar" />
              <MenuItem onClick={registerModal.onOpen} label="Criar conta" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
