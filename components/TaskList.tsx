import { FC } from 'react';
import { useQueryTasks } from '../hooks/useQueryTasks';
import { Spinner } from './Spinner';
import { TaskItem } from './TaskItem';

export const TaskList: FC = () => {
  const { data: tasks, status } = useQueryTasks();
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>{'Error'}</p>;
  console.log(tasks);

  return (
    <ul className="my-2">
      {tasks?.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} />
      ))}
    </ul>
  );
};
