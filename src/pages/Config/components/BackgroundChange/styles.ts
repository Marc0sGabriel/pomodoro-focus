import { DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import { styled } from 'styled-components';

export const WallpaperContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;

  img {
    max-height: 15rem;
    max-width: 15rem;
    object-fit: cover;

    border-radius: 8px;
  }
`;

export const DialogContentStyles = styled(DialogContent)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 790px;
  max-height: 85vh;
  padding: 25px;

  overflow: auto;

  background-color: ${(props) => props.theme.colors.foreground};
  outline: none;
  border: none;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-100']};

    svg {
      cursor: pointer;

      &:hover {
        filter: opacity(0.6);
      }
    }
  }
`;

export const Overlay = styled(DialogOverlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;

  transition: all 0.2s;
  animation: 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;
