import { TaskCardContainer, TaskInputChecked } from './styles';
import { CheckCircle, Trash } from '@phosphor-icons/react';
import { TasksProps } from '../..';

interface TaskProps {
  task: TasksProps;
  onComplete: (taskID: string) => void;
  onDelete: (taskID: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  return (
    <TaskCardContainer>
      <TaskInputChecked onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle size={20} weight="fill" /> : <div />}
      </TaskInputChecked>

      <div>
        <p className={`${task.isCompleted ? 'completedTask' : ''}`}>
          {task.title}
        </p>
        <button className="btn-delete-task" onClick={() => onDelete(task.id)}>
          <Trash size={25} weight="regular" />
        </button>
      </div>
    </TaskCardContainer>
  );
}
