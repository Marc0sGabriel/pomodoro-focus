import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  line-height: 2rem;

  @media (max-width: 500px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    label:first-of-type {
      font-size: 1.25rem;
    }

    span {
      font-size: 1.25rem;
    }
  }
`;

const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  height: 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['pink-700']};
    transition: all 0.3s;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};

    @media (max-width: 500px) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }

  @media (max-width: 500px) {
    border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 500px) {
    width: 100%;
    line-height: 2rem;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4em;
  text-align: center;

  @media (max-width: 600px) {
    flex: 1;
  }
`;
