import FestivalLogo from '@/assets/images/logo.svg';
import LikeLionLogo from '@/assets/images/logo_like-lion.svg';
import CrossIcon from '@/assets/icons/cross.svg?react';
import * as S from './Logo.styles';

export default function Logo() {
  return (
    <S.Container>
      <S.FestivalLogo src={FestivalLogo} alt="Festival Logo" />
      <CrossIcon width={'1rem'} height={'1rem'} />
      <S.LikeLionLogo src={LikeLionLogo} alt="Like Lion Logo" />
    </S.Container>
  );
}
