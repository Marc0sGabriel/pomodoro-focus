import { Play } from '@phosphor-icons/react';
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountDownButton,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou focar em</label>
          <input id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24} weight="bold" />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
