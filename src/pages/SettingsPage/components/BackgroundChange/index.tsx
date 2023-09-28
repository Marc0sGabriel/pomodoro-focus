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
            <button onClick={() => handleWallpaper('busStation.jpg')}>
              <img
                loading="lazy"
                src="./assets/busStation.jpg"
                alt="bus station"
              />
            </button>

            <button onClick={() => handleWallpaper('anime01.jpg')}>
              <img loading="lazy" src="./assets/anime01.jpg" alt="anime" />
            </button>

            <button onClick={() => handleWallpaper('animeGirls.png')}>
              <img
                loading="lazy"
                src="./assets/animeGirls.png"
                alt="Anime girls"
              />
            </button>

            <button onClick={() => handleWallpaper('landscape02.jpg')}>
              <img
                loading="lazy"
                src="./assets/landscape02.jpg"
                alt="landscape 02"
              />
            </button>

            <button onClick={() => handleWallpaper('laundry.png')}>
              <img loading="lazy" src="./assets/laundry.png" alt="laundry" />
            </button>

            <button onClick={() => handleWallpaper('landscape03.jpg')}>
              <img
                loading="lazy"
                src="./assets/landscape03.jpg"
                alt="grass field"
              />
            </button>
          </WallpaperContainer>
        </DialogContentStyles>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
