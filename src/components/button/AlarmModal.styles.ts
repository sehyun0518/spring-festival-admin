import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.25rem 0rem;
  padding-bottom: 1.25rem;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.medium500}
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Button = styled(motion.button)`
  display: flex;
  width: 15rem;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: none;
  background: ${(props) => props.theme.colors.primary.bl400};
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
