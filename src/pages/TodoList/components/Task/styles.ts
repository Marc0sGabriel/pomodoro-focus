import styled from 'styled-components';

export const TaskCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;
  margin-top: 0.875rem;
  padding: 1rem;

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
  width: 1.25rem;
  height: 1.25rem;
  outline: none;
  border-radius: 9999px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: transparent;

  & + .completedTask {
    text-decoration: line-through;
    font-weight: normal;
    color: hsl(0, 0%, 70%);
  }
`;
