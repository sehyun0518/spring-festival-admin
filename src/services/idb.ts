import { waitingDB } from '@/services/waiting/waiting.db';

export const initDB = async () => {
  await Promise.all([waitingDB]);
};
