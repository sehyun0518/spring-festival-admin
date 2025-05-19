import { Logo, Password, UserSelect } from '@/features/login';
import * as S from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '@/features/login/services/login';
import { useAuthStore } from '@/features/login/stores/useAuthStore';
import { BOOTH_ID_NAME_LIST } from '@/constants/booth';

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await login(userName, password);
    if (response.status !== 200) {
      return;
    }
    const accessToken = response.headers['authorization']?.replace('Bearer ', '');
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      useAuthStore.getState().setIsLoggedIn(true); // 전역 상태 갱신
    } else {
      console.error('access token 없음');
    }
    useAuthStore
      .getState()
      .setUserId(BOOTH_ID_NAME_LIST.find((booth) => booth.name === userName)?.id || 0);
    navigate('/admin');
  };

  return (
    <S.Container>
      <Logo />
      <S.LabelSection>
        <S.Label>
          <S.Text>주점 선택</S.Text>
          <UserSelect user={userName} setUser={setUserName} />
        </S.Label>
        <S.Label>
          <S.Text>관리자 코드</S.Text>
          <Password password={password} setPassword={setPassword} />
        </S.Label>
      </S.LabelSection>
      <S.ButtonSection>
        <S.Button
          whileTap={{ scale: 0.99 }}
          onClick={handleLogin}
          disabled={userName === '' || password === ''}
        >
          관리자 로그인
        </S.Button>
      </S.ButtonSection>
    </S.Container>
  );
}
