import styled from 'styled-components';

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors.gray['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme.colors.gray['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.gray['gray-600']};
  }

  @media (max-width: 600px) {
    font-size: 5rem;
    gap: 0.4rem;
    line-height: 4rem;

    span {
      font-size: 7rem;
    }
  }

  @media (max-width: 500px) {
    font-size: 3rem;
    gap: 0.4rem;
    line-height: 1rem;

    span {
      font-size: 4rem;
    }
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.colors.primary};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    width: 2rem;
  }
`;
