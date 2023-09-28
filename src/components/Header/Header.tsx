import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';
import {
  Calendar,
  Gear,
  ListBullets,
  MusicNotes,
  Timer,
} from '@phosphor-icons/react';

export function Header() {
  return (
    <HeaderContainer>
      <img src="./logo.png" alt="logo pomodoro" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Calendar size={32} />
        </NavLink>

        <NavLink to={'/music'} title="Music">
          <MusicNotes size={32} />
        </NavLink>

        <NavLink to={'/todo-list'} title="Lista de tarefas">
          <ListBullets size={32} />
        </NavLink>

        <NavLink to="/settings" title="Configurações">
          <Gear size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
