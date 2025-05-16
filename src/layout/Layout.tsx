import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './Layout.styles';
import Main from '@/layout/main/Main';
import { Modal as ModalProvider } from '@/components/modal';
import { ToastProvider } from '@/components/toast';

/**
 * Layout component
 * @returns {JSX.Element}
 */
export default function Layout() {
  return (
    <S.Container>
      <AnimatePresence mode="wait">
        <ToastProvider />
        <Main>
          <Outlet />
        </Main>
      </AnimatePresence>
      <ModalProvider />
    </S.Container>
  );
}
