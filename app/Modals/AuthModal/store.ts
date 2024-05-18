import {create} from 'zustand';

interface ModalState {
    currentTab: number;
    setCurrentTab: (tab: number) => void;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
    setCurrentTab: (tab) => set({ currentTab: tab }),
    modalVisible: false,
    currentTab: 1,
    setModalVisible: (visible) => set({ modalVisible: visible }),
}));