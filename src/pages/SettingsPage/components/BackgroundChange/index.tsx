import { ImageSquare, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonCard } from '../../styles';
import { DialogContentStyles, Overlay, WallpaperContainer } from './styles';
import { useContext } from 'react';
import { CyclesContext } from '../../../../context/CyclesContext';

export function ButtonSetBackground() {
  const { handleWallpaper } = useContext(CyclesContext);



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
            <button onClick={() => handleWallpaper('cozy.jpg')}>
              <img loading='lazy' src="./assets/cozy.jpg" alt="cozy" />
            </button>

            <button onClick={() => handleWallpaper('anime01.jpg')}>
              <img loading='lazy' src="./assets/anime01.jpg" alt="anime" />
            </button>

            <button onClick={() => handleWallpaper('animeGirls.png')}>
              <img loading='lazy' src="./assets/animeGirls.png" alt="sakura wallpaper" />
            </button>

            <button onClick={() => handleWallpaper('landscape02.jpg')}>
              <img loading='lazy' src="./assets/landscape02.jpg" alt="landscape 02" />
            </button>

            <button onClick={() => handleWallpaper('landscape03.jpg')}>
              <img loading='lazy' src="./assets/landscape03.jpg" alt="landscape 01" />
            </button>

            <button onClick={() => handleWallpaper('landscape.jpg')}>
              <img loading='lazy' src="./assets/landscape.jpg" alt="landscape" />
            </button>
          </WallpaperContainer>
        </DialogContentStyles>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
