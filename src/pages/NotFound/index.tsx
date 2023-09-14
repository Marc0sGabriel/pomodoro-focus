import { NavLink } from 'react-router-dom';
import { NotFoundPageContainer } from './styles';

export function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <h1>404</h1>
      <span>Página não encontrada</span>
      <NavLink to={'/'}>Voltar página inicial</NavLink>
    </NotFoundPageContainer>
  );
}
