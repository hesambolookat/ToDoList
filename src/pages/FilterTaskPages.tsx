import TaskList  from '../components/TaskList';
import { useParams } from 'react-router-dom';

export const FilteredTasksPage = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{category} Tasks</h1>
      <TaskList category={category || 'All'} />
    </div>
  );
};
