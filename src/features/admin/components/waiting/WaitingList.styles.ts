import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

export const ListItemContainer = styled.div`
  padding: 0rem 1.25rem;
`;

export const ListItem = styled(motion.li)<{ $isSelect?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 0.0625rem ${(props) => (props.$isSelect ? props.theme.colors.primary.bl400 : 'none')}
    solid;
  background: none;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TextFrame = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: flex-end;
  gap: ${(props) => props.$gap || '0.5rem'};
`;

export const BorderLine = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  margin: 0.31rem 0rem;
`;

export const HeaderText = styled.span<{ $isBold?: boolean; $isBlue?: boolean; $isGray?: boolean }>`
  color: ${(props) =>
    props.$isBlue ? props.theme.colors.primary.bl400 : props.theme.colors.grayScale.white};
  color: ${(props) => props.$isGray && props.theme.colors.grayScale.gy200};
  ${(props) => (props.$isBold ? props.theme.fonts.header.h4 : props.theme.fonts.body.small500)};
`;

export const Text = styled.span<{ $isBold?: boolean }>`
  color: ${(props) =>
    props.$isBold ? props.theme.colors.grayScale.gy300 : props.theme.colors.grayScale.gy500};
  ${(props) => (props.$isBold ? props.theme.fonts.body.small500 : props.theme.fonts.body.small400)};
`;

export const HorizontalLine = styled.div`
  width: calc(100% - 2.5rem);
  height: 0.0625rem;
  margin: 0rem 1.25rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const BottomPadding = styled.div`
  height: 12.17rem;
`;
