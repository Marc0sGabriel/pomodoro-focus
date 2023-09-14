import { styled } from 'styled-components';

export const NotFoundPageContainer = styled.div`
  position: fixed;
  z-index: 20;
  color: white;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #181818;
  left: 0;

  padding: none;
  border: none;
  margin: none;

  color: #f5f5f5;

  h1 {
    font-size: 4rem;
  }

  span {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0.7rem 1.25rem;
  }

  body {
    background-image: none;
    background-color: black;
    color: white;
    border: none !important;
    padding: none !important;
    margin: none !important;
  }
`;
