export type WaitingType = {
  id: number;
  name: string;
  phone: string;
  status: WaitingStatusType;
  isAlert: boolean;
};

export type WaitingStatusType = {
  people: number;
  time: string;
};
