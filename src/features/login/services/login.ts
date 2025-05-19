import axiosInstance from '@/services/axios';

export const login = async (username: string, password: string) => {
  const response = await axiosInstance.post('/auth/admin-login', {
    username,
    password,
  });
  return response;
};
