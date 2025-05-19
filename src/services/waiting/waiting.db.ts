import { WaitingType } from '@/types/waiting.type';
import { DBSchema, openDB } from 'idb';

interface WaitingDB extends DBSchema {
  waiting: {
    key: number;
    value: WaitingType;
    indexes: { 'by-waitingNum': number };
  };
}

export const waitingDB = openDB<WaitingDB>('admin-db', 2, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('waiting', { keyPath: 'waitingNum' });
    waitingStore.createIndex('by-waitingNum', 'waitingNum');
  },
});
