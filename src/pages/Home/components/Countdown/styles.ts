import styled from 'styled-components';

export const CountDownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Oswald';
  font-size: 15rem;
  line-height: 8rem;
  color: ${(props) => props.theme.colors.gray['gray-100']};

  div {
    background-color: ${(props) => props.theme.colors.background};
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 300px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.foreground};

    span {
      color: ${(props) => props.theme.colors.gray['gray-100']};

      &::before {
        content: '';
        height: 2px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.background};
        position: absolute;
        z-index: 100;
        left: 0;
        bottom: 46%;
      }
    }
  }

  @media (max-width: 1200px) {
    font-size: 10rem;

    div {
      width: 8.125rem;
      height: 12.5rem;
    }
  }

  @media (max-width: 770px) {
    font-size: 10rem;
    gap: 0.4rem;

    div {
      width: 7.125rem;
      height: 11.5rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 6rem;
    gap: 0.4rem;
    line-height: 4rem;

    div {
      width: 5.125rem;
      height: 9.5rem;
    }
  }

  @media (max-width: 500px) {
    font-size: 6rem;
    gap: 0.4rem;
    line-height: 1rem;

    div {
      width: 4.125rem;
      height: 8.5rem;
    }
  }
`;

export const Separator = styled.div`
  padding: 4rem;
  text-decoration: none !important;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary} !important;
  font-family: 'Roboto Mono' !important;

  @media (max-width: 1200px) {
    font-size: 9rem !important;
  }

  @media (max-width: 800px) {
    font-size: 6rem !important;
    width: 2rem !important;
    background: transparent !important;
    border: none !important;
    padding: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 5rem !important;
    width: 1rem !important;
  }
`;
