import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from './components/Task';
import { ButtonCreateNewTask, ContainerTodoListPage } from './styles';
import { Plus } from '@phosphor-icons/react';

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function TodoListPage() {
  const [addTasks, setAddTasks] = useState<TasksProps[]>([]);
  const [getTaskName, setGetTaskname] = useState('');

  function addTask(taskName: string) {
    setAddTasks([
      ...addTasks,
      {
        id: crypto.randomUUID(),
        title: taskName,
        isCompleted: false,
      },
    ]);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addTask(getTaskName);

    setGetTaskname('');
  }

  function onChangeTaskName(event: ChangeEvent<HTMLInputElement>) {
    setGetTaskname(event.target.value);
  }

  return (
    <ContainerTodoListPage>
      <header>
        <h1>Suas Tarefas</h1>

        <form onSubmit={handleSubmit} className="btn-container">
          <input
            type="text"
            placeholder="Digite aqui as suas tarefas..."
            value={getTaskName}
            onChange={onChangeTaskName}
          />
          <ButtonCreateNewTask type="submit">
            <span>Nova tarefa</span>
            <Plus size={24} weight="bold" />
          </ButtonCreateNewTask>
        </form>
      </header>

      <section>
        <Task task={addTasks} />
      </section>
    </ContainerTodoListPage>
  );
}
