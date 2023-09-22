import styled from 'styled-components';

export const TaskCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;
  margin-top: 0.875rem;
  padding: 1rem;

  .completedTask {
    text-decoration: line-through;
    font-weight: normal;
    color: hsl(0, 0%, 70%);
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    .btn-delete-task {
      background: transparent;
      width: fit-content;
      height: fit-content;
      border: none;

      svg {
        fill: ${(props) => props.theme['gray-200']};
        transition: all 0.3s ease;
      }

      cursor: pointer;
    }

    .btn-delete-task:hover {
      svg {
        fill: ${(props) => props.theme.colors.red};
        transition: all 0.3s ease;
      }
    }
  }
`;

export const TaskInputChecked = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  outline: none;
  border-radius: 9999px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: transparent;

  &:focus {
    outline: 0;
    box-shadow: none;
    border-radius: 9999px;
  }

  svg {
    width: 100%;
    height: 100%;

    fill: ${(props) => props.theme.colors.primary};
  }
`;
