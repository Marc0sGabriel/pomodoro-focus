import { Play } from '@phosphor-icons/react';
import { CountDownContainer, FormContainer, HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="">Vou focar em</label>
          <input id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </div>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  );
}
