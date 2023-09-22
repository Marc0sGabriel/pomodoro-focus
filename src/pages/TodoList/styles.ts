import styled from 'styled-components';

export const ContainerTodoListPage = styled.section`
  padding: 3.5rem;

  h1 {
    font-size: 1.75rem;
    color: ${(props) => props.theme['gray-100']};
    margin-bottom: 1rem;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    input[type='text'] {
      flex: 1;
      background: ${(props) => props.theme.colors.foreground};
      border: none;
      outline: none;
      border-radius: 4px;
      padding: 0 1rem;
      color: ${(props) => props.theme['gray-100']};

      &::placeholder {
        color: ${(props) => props.theme['gray-300']};
      }
    }
  }

  @media (max-width: 600px) {
    padding: 3.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3.5rem 0;
  }
`;

export const ButtonCreateNewTask = styled.button`
  padding: 0.875rem 1.25rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  font-weight: bold;
  color: ${(props) => props.theme['gray-800']};
  border: none;
  outline: none;

  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.85);
    transition: all 0.3s ease;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    span {
      display: none;
      visibility: hidden;
    }
  }

  @media (max-width: 6000px) {
    svg {
      display: none;
      visibility: hidden;
    }
  }

  @media (max-width: 600px) {
    svg {
      display: block !important;
      visibility: visible !important;
    }

    border-radius: 9999px;
    padding: 0.8rem;
  }
`;
