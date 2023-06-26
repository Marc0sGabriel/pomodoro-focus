import { Play } from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou focar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Digite aqui sua tarefa"
            {...register('task')}
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
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} weight="bold" />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
