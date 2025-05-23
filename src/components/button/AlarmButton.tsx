import { RefAttributes } from 'react';
import * as S from './AlarmButton.styles';
import AlarmIcon from '@/assets/icons/alert.svg?react';
import useModal from '@/hooks/useModal';
import AlarmModal from '@/components/button/AlarmModal';

interface AlarmButtonProps extends RefAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: 'small' | 'large';
  id?: number;
  children?: React.ReactNode;
  isStopPropagation?: boolean;
}

export default function AlarmButton({
  disabled = false,
  size = 'large',
  id,
  children = '입장 알림',
  isStopPropagation = false,
  ...props
}: AlarmButtonProps) {
  const AlarmContent = AlarmModal as React.ComponentType<{
    title: string;
    id: number;
    closeModal: () => void;
  }>;
  const { open, close } = useModal(AlarmContent);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isStopPropagation) {
      e.stopPropagation();
    }
    if (disabled || id === undefined) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    open({ title: '입장 알림 보내기', closeModal: close, id });
  };
  return (
    <S.Container
      disabled={disabled}
      whileTap={{ scale: 0.97, background: '#4D5255' }}
      $size={size}
      onClick={handleClick}
      {...props}
    >
      <AlarmIcon
        width={size === 'large' ? '1.25rem' : '1.125rem'}
        height={size === 'large' ? '1.25rem' : '1.125rem'}
        fill={disabled ? '#4D5255' : '#FAFAFA'}
      />
      {children}
    </S.Container>
  );
}
