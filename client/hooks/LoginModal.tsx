import { create } from "zustand"

interface LoginModalProp {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useLoginModal = create<LoginModalProp>((set) => ({
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    }))

export default useLoginModal