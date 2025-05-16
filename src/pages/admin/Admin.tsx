import { NavBar } from '@/components/nav-bar';
import * as S from './Admin.styles';
import { Button, Help, Info, WaitingList } from '@/features/admin';

export default function Admin() {
  return (
    <S.Container>
      <NavBar isBack title="웨이팅 관리" backPath={'/'} />
      <S.Wrapper>
        <Info />
        <Button />
      </S.Wrapper>
      <Help />
      <WaitingList />
    </S.Container>
  );
}
