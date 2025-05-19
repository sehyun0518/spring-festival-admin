export interface WaitingType {
  id: number;
  createdAt: string;
  waitingNum: number;
  visitorCount: number;
  phoneNumber: string;
  type: WaitingStatusType;
}

export type WaitingStatusType = 'WalkIn' | 'Online';
