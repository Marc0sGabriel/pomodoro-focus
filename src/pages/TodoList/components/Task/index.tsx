import { TaskCardContainer, TaskInputChecked } from './styles';
import { Trash } from '@phosphor-icons/react';
import { TasksProps } from '../..';

interface TaskProps {
  task: TasksProps[];
}

export function Task({ task }: TaskProps) {
  return (
    <>
      {task
        .map((taskData) => (
          <TaskCardContainer key={taskData.id}>
            <TaskInputChecked key={taskData.id} />
            <div>
              <p className="completedTask">{taskData.title}</p>
              <button className="btn-delete-task">
                <Trash size={25} weight="regular" />
              </button>
            </div>
          </TaskCardContainer>
        ))
        .reverse()}
    </>
  );
}
