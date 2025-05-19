import * as S from './Password.styles';

export default function Password({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (password: string) => void;
}) {
  return (
    <S.Input
      type="password"
      placeholder="관리자 코드를 입력해주세요"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}
