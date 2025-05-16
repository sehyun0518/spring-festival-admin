import { RefAttributes } from 'react';
import * as S from './CallButton.styles';
import PhoneIcon from '@/assets/icons/nrk_hardware-mobile.svg?react';
import useModal from '@/hooks/useModal';
import CallModal from '@/components/button/CallModal';

interface CallButtonProps extends RefAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: 'small' | 'large';
  tel?: string;
  num?: string;
  children?: React.ReactNode;
  isStopPropagation?: boolean;
}

export default function CallButton({
  size = 'large',
  disabled = false,
  tel,
  num,
  children = '전화걸기',
  isStopPropagation = false,
  ...props
}: CallButtonProps) {
  const CallContent = CallModal as React.ComponentType<{
    tel: string;
    title: string;
    num: string;
  }>;
  const { open } = useModal(CallContent);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isStopPropagation) {
      e.stopPropagation();
    }
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (tel) {
      open({ tel, title: '전화걸기', num: num || '' });
    }
  };
  return (
    <S.Container
      $size={size}
      disabled={disabled}
      whileTap={{ scale: 0.97, background: '#373D3F' }}
      onClick={handleClick}
      {...props}
    >
      <PhoneIcon
        width={size === 'large' ? '1.25rem' : '1.125rem'}
        height={size === 'large' ? '1.25rem' : '1.125rem'}
      />
      {children}
    </S.Container>
  );
}
