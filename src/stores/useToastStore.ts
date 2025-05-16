import { create } from 'zustand';
import { ToastType } from '@/types/toast.type';

interface ToastStore {
  toasts: ToastType[];
  openToast: (message: string, key: string, duration?: number) => void;
  removeToast: (key: string) => void;
}

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],
  openToast: (message, key, duration = 3000) => {
    const existing = get().toasts.find((t) => t.key === key);
    if (existing) return;

    set((state) => ({
      toasts: [...state.toasts, { key, message }],
    }));

    setTimeout(() => {
      get().removeToast(key);
    }, duration);
  },
  removeToast: (key) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.key !== key),
    }));
  },
}));
