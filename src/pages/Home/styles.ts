import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (max-width: 700px) {
    html {
      font-size: 70%;
    }
  }

  @media (max-width: 500px) {
    height: 100%;

    form {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
  }
`;

const BaseButton = styled.button`
  width: 60%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.3s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StartCountDownButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme['gray-100']};
`;

export const StopCountDownButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.gray['gray-100']};
`;
