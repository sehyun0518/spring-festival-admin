import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.button)<{ $size: 'small' | 'large'; disabled?: boolean }>`
  display: flex;
  width: ${(props) => (props.$size === 'large' ? '4.5rem' : '3.75rem')};
  padding: ${(props) => (props.$size === 'large' ? '0.5rem 0rem' : '0.5625rem 0rem')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.$size === 'large' ? '0.5rem' : '0.28rem')};
  flex-shrink: 0;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.grayScale.black : props.theme.colors.grayScale.gy900};
  border-radius: 0.375rem;
  border: none;
  ${(props) =>
    props.$size === 'large' ? props.theme.fonts.body.xsmall500 : props.theme.fonts.body.xsmall400};
  color: ${(props) =>
    props.disabled ? props.theme.colors.grayScale.gy800 : props.theme.colors.grayScale.white};

  :disabled {
    background-color: ${(props) => props.theme.colors.grayScale.black};
    color: ${(props) => props.theme.colors.grayScale.gy800};
    cursor: not-allowed;
  }
`;
