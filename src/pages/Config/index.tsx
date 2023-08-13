import * as Popover from '@radix-ui/react-popover';
import { ButtonSetBackground } from './components/BackgroundChange';
import {
  CaretDown,
  ListBullets,
  MusicNote,
  Palette,
} from '@phosphor-icons/react';

import {
  ButtonCard,
  ButtonCardWithMenu,
  ConfigPageContainer,
  PopoverContentStyles,
} from './styles';
import { useContext } from 'react';
import { CyclesContext } from '../../context/CyclesContext';
import onedark from '../../styles/themes/onedark';
import { draculaTheme } from '../../styles/themes/default';
import palenight from '../../styles/themes/palenight';
import synthwave from '../../styles/themes/synthwave';

export function SettingsPage() {
  const { handleThemeChange } = useContext(CyclesContext);

  return (
    <ConfigPageContainer>
      <h1>Configurações</h1>

      <nav>
        <ButtonSetBackground />

        <ButtonCard>
          <MusicNote size={25} />
          <span>Músicas</span>
        </ButtonCard>

        <ButtonCard>
          <ListBullets size={25} />
          <span>Todo List</span>
        </ButtonCard>

        <Popover.Root>
          <Popover.Trigger asChild>
            <ButtonCardWithMenu>
              <div>
                <Palette size={25} />
                <span>Temas</span>
              </div>
              <CaretDown size={25} />
              <Popover.Anchor />
            </ButtonCardWithMenu>
          </Popover.Trigger>

          <Popover.Portal>
            <PopoverContentStyles>
              <Popover.Arrow />

              <label htmlFor="Dark Themes">
                <button
                  onClick={() => {
                    handleThemeChange(draculaTheme);
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dracula_Color_Scheme_Logo.svg/120px-Dracula_Color_Scheme_Logo.svg.png"
                    alt="Dracula Theme logo"
                  />
                  <span>Dracula</span>
                </button>

                <button
                  onClick={() => {
                    handleThemeChange(onedark);
                  }}
                >
                  <img
                    src="https://zhuangtongfa.gallerycdn.vsassets.io/extensions/zhuangtongfa/material-theme/3.16.0/1689910517425/Microsoft.VisualStudio.Services.Icons.Default"
                    alt="Logomarca do tema one dark pro"
                  />
                  <span>One Dark Pro</span>
                </button>

                <button
                  onClick={() => {
                    handleThemeChange(palenight);
                  }}
                >
                  <img
                    src="https://whizkydee.gallerycdn.vsassets.io/extensions/whizkydee/material-palenight-theme/2.0.3/1678664086408/Microsoft.VisualStudio.Services.Icons.Default"
                    alt="Logomarca Palenight Tema"
                  />
                  <span>Palenight</span>
                </button>

                <button
                  onClick={() => {
                    handleThemeChange(synthwave);
                  }}
                >
                  <img
                    src="https://robbowen.gallerycdn.vsassets.io/extensions/robbowen/synthwave-vscode/0.1.15/1670610064896/Microsoft.VisualStudio.Services.Icons.Default"
                    alt="Logomarca Palenight Tema"
                  />
                  <span>SynthWave'84</span>
                </button>
              </label>
            </PopoverContentStyles>
          </Popover.Portal>
        </Popover.Root>
      </nav>
    </ConfigPageContainer>
  );
}
