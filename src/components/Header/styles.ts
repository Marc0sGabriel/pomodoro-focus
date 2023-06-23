import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    filter: hue-rotate(-50deg) saturate(45%) brightness(160%);

    max-width: 40px;
  }

  nav {
    display: flex;
    gap: 0.7rem;
    align-items: center;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-200']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: all 0.3s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['dracula-pink']};
      }

      &.active {
        color: ${(props) => props.theme['dracula-pink']};
        border-bottom: 3px solid ${(props) => props.theme['dracula-pink']};
      }
    }
  }
`;
