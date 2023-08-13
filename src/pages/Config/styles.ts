import { styled } from 'styled-components';
import { PopoverContent } from '@radix-ui/react-popover';

export const ConfigPageContainer = styled.div`
  padding: 3.5rem;
  h1 {
    font-size: 1.75rem;
    color: ${(props) => props.theme['gray-100']};
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const BaseButtonCard = styled.button`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding-left: 1rem;
  width: 12rem;
  height: 4rem;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonCard = styled(BaseButtonCard)``;

export const ButtonCardWithMenu = styled(BaseButtonCard)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }
`;

export const PopoverContentStyles = styled(PopoverContent)`
  position: relative;
  top: 3rem;
  right: 5rem;
  width: 15rem;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.foreground};
  padding: 0.8rem;

  svg {
    margin-bottom: 1rem;
    align-self: self-end;
  }

  label {
    button {
      width: 100%;
      border: none;
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: 4px;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem;
      cursor: pointer;

      img {
        inset: 50px;
        max-width: 50px;
        max-height: 50px;
        border-radius: 9999px;
      }

      span {
        font-size: 1.25rem;
      }

      &:hover {
        filter: brightness(0.9);
      }

      &:last-of-type {
        margin-bottom: 0 !important;
      }
    }
  }
`;
