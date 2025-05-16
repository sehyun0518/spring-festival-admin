import { useToastStore } from '@/stores/useToastStore';
import ReactDOM from 'react-dom';
import * as S from './Toast.styles';
import NotificationIcon from '@/assets/images/notification.webp';
export default function Toast() {
  const toasts = useToastStore((s) => s.toasts);

  return ReactDOM.createPortal(
    <S.Container>
      {toasts.map((toast) => (
        <S.Toast
          key={toast.key}
          layout
          initial={{ opacity: 0, y: -50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.5 }}
        >
          <S.NotificationImage src={NotificationIcon} />
          <S.Text>{toast.message}</S.Text>
        </S.Toast>
      ))}
    </S.Container>,
    document.body,
  );
}
