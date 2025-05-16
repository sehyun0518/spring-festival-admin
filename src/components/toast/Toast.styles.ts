import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 10;
  left: 0;
  z-index: 9999;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Toast = styled(motion.div)`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const NotificationImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Text = styled.span`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
