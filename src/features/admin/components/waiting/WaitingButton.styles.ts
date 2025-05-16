import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
  width: 100%;
  padding: 0.8125rem 1.25rem;
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.87rem;
`;

export const InnerButton = styled.div`
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.primary.bl400};
  border-radius: 50%;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.header.h4};
`;
