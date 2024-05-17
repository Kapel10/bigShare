import {create} from 'zustand';

interface ModalState {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    modalVisible: false,
    setModalVisible: (visible) => set({ modalVisible: visible }),
}));