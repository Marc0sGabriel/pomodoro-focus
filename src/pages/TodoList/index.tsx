import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Task } from './components/Task';
import { ButtonCreateNewTask, ContainerTodoListPage } from './styles';
import { Plus } from '@phosphor-icons/react';
import { usePersistedState } from '../../utils/usePersistedState';

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_TASKS_KEY = '@pomodoro-todolist:savedTasks';

export default function TodoListPage() {
  const [addTasks, setAddTasks] = usePersistedState<TasksProps[]>(
    LOCAL_STORAGE_TASKS_KEY,
    []
  );
  const [getTaskName, setGetTaskname] = useState('');

  useEffect(() => {
    function loadStoredTasks() {
      const stored = localStorage.getItem(LOCAL_STORAGE_TASKS_KEY);
      if (stored) {
        setAddTasks(JSON.parse(stored));
      }
    }
    loadStoredTasks();
  }, [setAddTasks]);

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

  function toogleCompletedTaskByID(taskID: string) {
    const newTasks = addTasks.map((task: TasksProps) => {
      if (task.id === taskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setAddTasks(newTasks);
  }

  function deleteTaskByID(taskID: string) {
    const removeNewTasks = addTasks.filter(
      (task: TasksProps) => task.id !== taskID
    );

    setAddTasks(removeNewTasks);
  }

  const isEmptyInput = getTaskName.length === 0;
  const disabledSubmitButton = isEmptyInput;

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
          <ButtonCreateNewTask type="submit" disabled={disabledSubmitButton}>
            <span>Nova tarefa</span>
            <Plus size={24} weight="bold" />
          </ButtonCreateNewTask>
        </form>
      </header>

      <section>
        {addTasks.map((tasks: TasksProps) => (
          <Task
            key={tasks.id}
            task={tasks}
            onComplete={toogleCompletedTaskByID}
            onDelete={deleteTaskByID}
          />
        ))}
      </section>
    </ContainerTodoListPage>
  );
}
