import { create } from "zustand";

interface IActivateModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useActivateModal = create<IActivateModal>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
