import { Calendar, Gear, Timer } from '@phosphor-icons/react';
import { HeaderContainer } from './styles';
import { NavLink } from 'react-router-dom';

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

        <NavLink to="/settings" title="Configurações">
          <Gear size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
