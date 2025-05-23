import { BOOTH_ID_NAME_LIST } from '@/constants/booth';
import axiosInstance from '@/services/axios';

export const getWaitings = async () => {
  const response = await axiosInstance.get('/admin/waiting');
  return response;
};

export const postWaiting = async ({
  visitorCount,
  phoneNumber,
}: {
  visitorCount: number;
  phoneNumber: string;
}) => {
  const response = await axiosInstance.post('/admin/waiting', { visitorCount, phoneNumber });
  return response;
};

export const noShowWaiting = async (id: number, type: string) => {
  const response = await axiosInstance.delete(`/admin/waiting/no-show`, {
    data: {
      id,
      type,
    },
  });
  return response;
};

export const completeWaiting = async (id: number, type: string) => {
  const response = await axiosInstance.delete(`/admin/waiting/complete`, {
    data: {
      id,
      type,
    },
  });
  return response;
};

export const postAlarm = async (id: number, boothId: number) => {
  const booth = BOOTH_ID_NAME_LIST.find((booth) => booth.id === boothId);
  const response = await axiosInstance.post('/waiting/alarm', {
    waitingId: id,
    type: 'Online',
    pubName: booth?.name,
  });
  return response;
};
