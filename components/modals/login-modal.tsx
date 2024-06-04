"use client";

import * as y from "yup";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import React, { useState } from "react";

import { endpoints } from "@/constants";
import { useLoginModal } from "@/hooks/use-login-modal";
import { useActivateModal } from "@/hooks/use-activate-modal";
import { useRegisterModal } from "@/hooks/use-register-modal";

import Modal from "@/components/modals/modal";
import Heading from "@/components/global/heading";
import InputForm from "@/components/global/input-form";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const activateModal = useActivateModal();
  const [isLoading, setIsloading] = useState(false);

  const loginSchema = y.object().shape({
    email: y
      .string()
      .email("Por favor, insira um email valido.")
      .required("Email e obrigatorio."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email }) => {
      console.log(email);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleSubmitLogin = () => {
    setIsloading(true);

    axios
      .post(endpoints.login)
      .then(() => {
        loginModal.onClose();
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

  const toggleModalRegister = () => {
    loginModal.onClose();
    registerModal.onOpen();
  };

  // body content
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Acessa sua conta"
        subtitle="Bem vindo(a) ao Marketplace!"
      />
      <InputForm id="email" label="Email" disabled={isLoading} />
    </div>
  );

  // footer content
  const footerContent = (
    <p className="flex items-center justify-center mt-4 gap-1 text-neutral-500 text-sm">
      Ainda não possui uma conta?
      <div
        onClick={toggleModalRegister}
        className="underline text-blue-500 cursor-pointer"
      >
        Clique aqui
      </div>
    </p>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Acessar conta"
      actionLabel="Continuar"
      onClose={loginModal.onClose}
      onSubmit={() => ""}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
