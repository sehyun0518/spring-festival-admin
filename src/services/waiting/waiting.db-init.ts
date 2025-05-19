import { waitingDB } from '@/services/waiting/waiting.db';
import { WaitingType } from '@/types/waiting.type';

const init = async () => {
  const db = await waitingDB;
  return db.transaction('waiting', 'readwrite').store;
};

export const getWaitingList = async () => {
  const store = await init();
  return store.getAll();
};

export const putGuestWaiting = async (value: WaitingType) => {
  const store = await init();
  return store.put(value);
};

export const deleteWaiting = async (id: number) => {
  const store = await init();
  return store.delete(id);
};
