import { create } from "zustand"

interface EditModalProp {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

export const useEditModal = create<EditModalProp>((set) => ({
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    }))

export default useEditModal