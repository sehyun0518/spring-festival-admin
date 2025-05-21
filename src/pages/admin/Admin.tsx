import { NavBar } from '@/components/nav-bar';
import * as S from './Admin.styles';
import { Button, Help, Info, WaitingList } from '@/features/admin';
import { useWaitingStore } from '@/stores/useWaitingStore';
import { useEffect } from 'react';
import { useAuthStore } from '@/features/login/stores/useAuthStore';
import { getWaitings } from '@/features/admin/services/waiting';

export default function Admin() {
  const fetchWaitings = useWaitingStore((state) => state.fetchWaitings);
  const isLoggingIn = useAuthStore((state) => state.isLoggedIn);
  useEffect(() => {
    fetchWaitings();
    getWaitings();
  }, [fetchWaitings]);

  if (!isLoggingIn) {
    window.location.href = '/';
  }

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
