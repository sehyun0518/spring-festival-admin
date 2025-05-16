import { useToastStore } from '@/stores/useToastStore';
import { nanoid } from '@/utils/nanoid';
import { useCallback, useMemo } from 'react';

export default function useToast() {
  const openToast = useToastStore((state) => state.openToast);
  const removeToast = useToastStore((state) => state.removeToast);
  const defaultKey = useMemo(() => nanoid(), []);
  const open = useCallback(
    (message: string, duration?: number, key?: string) => {
      openToast(message, key ? key : defaultKey, duration ? duration : 3000);
    },
    [openToast, defaultKey],
  );
  const clearAll = useCallback(() => {
    const toasts = useToastStore.getState().toasts;
    toasts.forEach((toast) => {
      removeToast(toast.key);
    });
  }, [removeToast]);
  return { key: defaultKey, open, clearAll };
}
