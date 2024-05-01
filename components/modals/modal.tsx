"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { MdOutlineChevronLeft } from "react-icons/md";

import { useRegisterModal } from "@/hooks/use-register-modal";
import { useActivateModal } from "@/hooks/use-activate-modal";

import Button from "@/components/global/button";

interface IModal {
  title?: string;
  isOpen?: boolean;
  disabled?: boolean;
  goToBack?: boolean;
  onClose: () => void;
  actionLabel?: string;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<IModal> = ({
  body,
  title,
  footer,
  isOpen,
  onClose,
  goToBack,
  onSubmit,
  disabled,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const router = useRouter();
  const activateModel = useActivateModal();
  const registerModel = useRegisterModal();
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  const handleGoToBack = () => {
    activateModel.onClose();
    registerModel.onOpen();
    router.refresh();
  };

  return (
    <>
      <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none z-50 focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-5 mx-auto h-full lg:h-auto md:h-auto">
          {/* main */}
          <div
            className={clsx(
              "translate duration-300 h-full",
              showModal
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* header */}
              <div className="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute right-9"
                >
                  <IoMdClose />
                </button>

                {goToBack && (
                  <button
                    onClick={handleGoToBack}
                    className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                  >
                    <MdOutlineChevronLeft />
                  </button>
                )}
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/* footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      type="submit"
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button
                    type="submit"
                    disabled={disabled}
                    onClick={handleSubmit}
                  >
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
