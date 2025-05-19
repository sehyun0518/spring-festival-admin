// src/stores/waiting.store.ts
import { create } from 'zustand';
import { deleteWaiting, getWaitingList, putGuestWaiting } from '@/services/waiting/waiting.db-init';
import { WaitingType } from '@/types/waiting.type';

interface WaitingStore {
  waitings: WaitingType[];
  fetchWaitings: () => Promise<void>;
  addWaiting: (waiting: WaitingType) => Promise<void>;
  deleteWaiting: (id: number) => Promise<void>;
}

export const useWaitingStore = create<WaitingStore>((set) => ({
  waitings: [],

  fetchWaitings: async () => {
    const data = await getWaitingList();
    set({ waitings: data });
  },

  addWaiting: async (waiting) => {
    await putGuestWaiting(waiting);
    const updated = await getWaitingList(); // 새로 불러오기
    set({ waitings: updated });
  },
  deleteWaiting: async (id) => {
    await deleteWaiting(id);
    const updated = await getWaitingList(); // 새로 불러오기
    set({ waitings: updated });
  },
}));
