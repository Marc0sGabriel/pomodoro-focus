import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 1rem auto;
  padding: 2.5rem;
  border-radius: 8px;
  background-color: rgba(12, 12, 12, 0.4);
  backdrop-filter: blur(4px);

  display: flex;
  flex-direction: column;
`;
