import { useAuthStore } from '@/features/login/stores/useAuthStore';
import { clearWaiting } from '@/services/waiting/waiting.db-init';

export const logout = async () => {
  useAuthStore.getState().setIsLoggedIn(false); // 전역 상태 갱신
  localStorage.removeItem('access_token');
  localStorage.removeItem('admin-storage');
  await clearWaiting();
  window.location.href = '/';
};
