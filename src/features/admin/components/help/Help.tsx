import useModal from '@/hooks/useModal';
import * as S from './Help.styles';
import HelpIcon from '@/assets/icons/nrk_help.svg?react';
import Modal from '@/features/admin/components/help/HelpModal';
export default function Help() {
  const { open } = useModal(Modal);
  return (
    <S.Container>
      <S.Text>입장 번호 3번째 전이 되면 자동으로 ‘근처 대기’ 알림이 발송됩니다.</S.Text>
      <HelpIcon
        width={'1.125rem'}
        height={'1.125rem'}
        fill="#7A7D7F"
        onClick={() => open({ title: '알림 전송 안내' }, { isHelpIcon: true })}
      />
    </S.Container>
  );
}
