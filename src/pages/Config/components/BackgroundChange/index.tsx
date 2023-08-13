import { ImageSquare, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonCard } from '../../styles';
import { DialogContentStyles, Overlay, WallpaperContainer } from './styles';

export function ButtonSetBackground() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonCard>
          <ImageSquare size={25} />
          <span>Background</span>
        </ButtonCard>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <DialogContentStyles>
          <header>
            <Dialog.Title>Wallpapers</Dialog.Title>

            <Dialog.Close asChild>
              <X size={20} />
            </Dialog.Close>
          </header>

          <WallpaperContainer>
            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />

            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />

            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />

            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />

            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />

            <img
              src="https://w.wallhaven.cc/full/43/wallhaven-43x5o6.jpg"
              alt="wallpaper 01"
            />
          </WallpaperContainer>
        </DialogContentStyles>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
