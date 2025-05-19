import { WaitingType } from '@/types/waiting.type';
import { DBSchema, openDB } from 'idb';

interface WaitingDB extends DBSchema {
  waiting: {
    key: number;
    value: WaitingType;
    indexes: { 'by-waitingNum': number };
  };
}

export const waitingDB = openDB<WaitingDB>('admin-waiting-db', 1, {
  upgrade(db) {
    const waitingStore = db.createObjectStore('waiting', { keyPath: 'id' });
    waitingStore.createIndex('by-waitingNum', 'waitingNum');
  },
});
