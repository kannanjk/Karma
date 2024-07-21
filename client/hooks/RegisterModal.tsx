import { create } from "zustand"

interface RegisterModalProp {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useRegisterModal = create<RegisterModalProp>((set) => ({
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    }))

