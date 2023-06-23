import { Play } from '@phosphor-icons/react';
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou focar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Digite aqui sua tarefa"
          />

          <datalist id="task-suggestions">
            <option value="Estudar para o Enem" />
            <option value="Meditar" />
            <option value="Organizar agenda da semana" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            maxLength={2}
          />

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
