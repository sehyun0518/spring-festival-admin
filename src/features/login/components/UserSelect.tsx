import { useState } from 'react';
import * as S from './UserSelect.styles';
import ArrowIcon from '@/assets/icons/down-arrow.svg?react';
import { AnimatePresence } from 'framer-motion';
import { BOOTH_ID_NAME_LIST } from '@/constants/booth';

export default function UserSelect({
  user,
  setUser,
}: {
  user: string;
  setUser: (name: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
    e.stopPropagation();
    setUser(name);
    setIsOpen(false);
  };

  return (
    <S.Container onClick={() => setIsOpen((prev) => !prev)}>
      <S.SelectedText>{user}</S.SelectedText>
      <ArrowIcon width={'1.5rem'} height={'1.5rem'} style={{ rotate: !isOpen ? '' : '180deg' }} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <S.Select
            layout
            key="select"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            {BOOTH_ID_NAME_LIST.map((option) => {
              return (
                <S.SelectItem
                  key={option.id}
                  onClick={(e) => handleSelect(e, option.name)}
                  whileTap={{ scale: 0.99, backgroundColor: '#212526' }}
                >
                  {option.name}
                </S.SelectItem>
              );
            })}
          </S.Select>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
