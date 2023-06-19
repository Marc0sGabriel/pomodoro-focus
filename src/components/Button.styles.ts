import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success';
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin: 1rem;
  font-weight: bold;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`;
