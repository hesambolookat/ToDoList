import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ category }: { category: string }) => {
  const { filterTasks } = useTaskContext();
  const tasks = filterTasks(category);

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
