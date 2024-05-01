"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { useActivateModal } from "@/hooks/use-activate-modal";

import Modal from "@/components/modals/modal";

type VerifyNumber = {
  [key: string]: string;
};

const ActivateUserModal = () => {
  const activateUser = useActivateModal();
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const handleInputChange = (index: number, value: string) => {
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const bodyActivateContent = (
    <div className="flex items-center justify-center gap-8">
      {Object.keys(verifyNumber).map((key, index) => (
        <input
          key={key}
          id={`activation_code_${key}`}
          type="number"
          ref={inputRefs[index]}
          placeholder="0"
          className="h-[50px] w-[45px] flex items-center justify-center text-center text-3xl"
          value={verifyNumber[key]}
          maxLength={1}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
    </div>
  );

  const footerActivateContent = (
    <p className="text-sm text-center mt-4 text-neutral-500">
      Ao clicar em continuar, você concorda com o nosso{" "}
      <Link href={"/terms"} target="_blank" className="underline text-blue-500">
        Termos de Serviço
      </Link>{" "}
      e{" "}
      <Link
        href={"/policy"}
        target="_blank"
        className="underline text-blue-500"
      >
        Política de Privacidade
      </Link>
      .
    </p>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={activateUser.isOpen}
      title="Verificação do Usuário"
      actionLabel="Continuar"
      goToBack
      onClose={activateUser.onClose}
      onSubmit={() => ""}
      body={bodyActivateContent}
      footer={footerActivateContent}
    />
  );
};

export default ActivateUserModal;
