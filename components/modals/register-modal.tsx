"use client";

import axios from "axios";
import toast from "react-hot-toast";
import React, { useState } from "react";

import { endpoints } from "@/constants";
import { useLoginModal } from "@/hooks/use-login-modal";
import { useRegisterModal } from "@/hooks/use-register-modal";
import { useActivateModal } from "@/hooks/use-activate-modal";

import Modal from "@/components/modals/modal";
import Heading from "@/components/global/heading";
import InputForm from "@/components/global/input-form";
import SocialButton from "../global/social-button";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const activateModal = useActivateModal();
  const [isLoading, setIsloading] = useState(false);

  const onSubmit = () => {
    setIsloading(true);

    axios
      .post(endpoints.register)
      .then(() => {
        registerModal.onClose();
        activateModal.onOpen();
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const toggleModalLogin = () => {
    loginModal.onOpen();
    registerModal.onClose();
  };

  // body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Crie sua conta"
        subtitle="Complete os dados para criar sua conta"
      />
      <InputForm id="email" label="Email" disabled={isLoading} />
    </div>
  );

  // footer content
  const footerContent = (
    <div>
      <SocialButton />
      <p className="flex items-center justify-center mt-4 gap-1 text-neutral-500 text-sm">
        Já possui uma conta?
        <div
          onClick={toggleModalLogin}
          className="underline text-blue-500 cursor-pointer"
        >
          Clique aqui
        </div>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Criar conta"
      actionLabel="Continuar"
      onClose={registerModal.onClose}
      onSubmit={() => ""}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
