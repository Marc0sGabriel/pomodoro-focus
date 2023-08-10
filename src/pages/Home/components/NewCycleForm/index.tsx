import { FormContainer, MinutesAmountInput, TaskInput } from './styles';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../context/CyclesContext';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou focar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Digite aqui sua tarefa"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Estudar para o Enem" />
        <option value="Meditar" />
        <option value="Organizar agenda da semana" />
      </datalist>

      <div>
        <label htmlFor="minutes">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          maxLength={2}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />

        <span>minutos.</span>
      </div>
    </FormContainer>
  );
}
