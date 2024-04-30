"use client";

import Link from "next/link";
import Image from "next/image";

import { CiGlobe } from "react-icons/ci";

import registerImg from "@/public/images/banner-register.jpg";

import Logo from "@/components/global/logo";
import SocialButton from "@/components/auth/social-button";
import AuthRegisterForm from "@/components/auth/auth-register-form";

const RegisterPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 hidden md:block">
        <div className="h-screen relative">
          <Image
            width={1280}
            height={843}
            src={registerImg}
            alt="register image"
            className="object-cover object-center h-full w-full"
          />
          <div className="absolute top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.1)]"></div>
          <div className="absolute top-0 left-0 right-0 h-screen">
            <div className="flex flex-col justify-between h-full text-white p-5">
              <Logo />

              <p className="text-sm">
                Ao clicar em continuar, você concorda com nossos{" "}
                <Link href={"/"} target="_blank" className="underline">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link href={"/"} target="_blank" className="underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] flex flex-col justify-center items-center min-h-screen p-8 md:p-4 relative">
        <div className="absolute top-0 right-0 flex items-center gap-2 p-5">
          <span className="text-sm text-gray-500">Português</span>
          <CiGlobe className="text-gray-500" size={18} />
        </div>
        <div className="w-full sm:w-[400px]">
          <h1 className="mb-12 font-semibold text-2xl md:text-4xl">
            Crie sua conta
          </h1>

          <AuthRegisterForm />

          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Ou continue com
                </span>
              </div>
            </div>
          </div>

          <SocialButton />

          <div className="flex items-center gap-1 mt-12 text-sm">
            <span className="text-gray-500">Já possui uma conta?</span>
            <Link
              href={"/login"}
              className="flex items-center underline text-blue-500"
            >
              Acessar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
