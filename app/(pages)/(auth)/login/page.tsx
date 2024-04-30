"use client";

import Link from "next/link";
import Image from "next/image";

import { CiGlobe } from "react-icons/ci";

import loginImg from "@/public/images/banner-login.jpg";

import Logo from "@/components/global/logo";
import SocialButton from "@/components/auth/social-button";
import AuthLoginForm from "@/components/auth/auth-login-form";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 hidden md:block">
        <div className="h-screen relative">
          <Image
            width={1280}
            height={843}
            src={loginImg}
            alt="login image"
            className="object-cover object-center h-full w-full"
          />
          <div className="absolute top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.1)]"></div>
          <div className="absolute top-0 left-0 right-0 h-screen">
            <div className="flex flex-col justify-between h-full text-white p-5">
              <Logo />
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
            Acesse sua conta
          </h1>

          <AuthLoginForm />

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
            <span className="text-gray-500">Ainda não tem uma conta?</span>
            <Link
              href={"/register"}
              className="flex items-center underline text-blue-500"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
