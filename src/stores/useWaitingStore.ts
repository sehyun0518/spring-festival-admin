// src/stores/waiting.store.ts
import { create } from 'zustand';
import { deleteWaiting, getWaitingList, putGuestWaiting } from '@/services/waiting/waiting.db-init';
import { WaitingType } from '@/types/waiting.type';
import { getWaitings } from '@/features/admin/services/waiting';

interface WaitingStore {
  waitings: WaitingType[];
  fetchWaitings: () => Promise<void>;
  addWaiting: (waiting: WaitingType) => Promise<void>;
  deleteWaiting: (waitingNum: number) => Promise<void>;
}

export const useWaitingStore = create<WaitingStore>((set) => ({
  waitings: [],

  fetchWaitings: async () => {
    const response = await getWaitings();
    if (response.status === 200) {
      const waitings = response.data;
      console.log(waitings);
      response.data.forEach((waiting: WaitingType) => {
        putGuestWaiting(waiting);
      });
      set({ waitings });
    }
  },

  addWaiting: async (waiting) => {
    await putGuestWaiting(waiting);
    const updated = await getWaitingList(); // 새로 불러오기
    set({ waitings: updated });
  },

  deleteWaiting: async (waitingNum) => {
    await deleteWaiting(waitingNum);
    const updated = await getWaitingList(); // 새로 불러오기
    set({ waitings: updated });
  },
}));
