import { styled } from 'styled-components';

export const ContainerMusicPage = styled.div`
  padding: 3.5rem;
  h1 {
    font-size: 1.75rem;
    color: ${(props) => props.theme['gray-100']};
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 10rem 0;
  }
`;
