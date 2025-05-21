import * as S from './Password.styles';

export default function Password({
  password,
  setPassword,
  isError,
  setIsError,
}: {
  password: string;
  setPassword: (password: string) => void;
  isError: boolean;
  setIsError: (isError: boolean) => void;
}) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length === 0) setIsError(false);
    setPassword(value);
  };
  return (
    <S.Input
      type="password"
      placeholder="관리자 코드를 입력해주세요"
      value={password}
      onChange={(e) => handleOnChange(e)}
      $isError={isError}
    />
  );
}
