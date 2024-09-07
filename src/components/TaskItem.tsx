import { FaTrash } from 'react-icons/fa';
import { Task } from '../context/TaskContext';
import { useTaskContext } from '../context/TaskContext';

const TaskItem = ({ task }: { task: Task }) => {
  const { removeTask, toggleTaskCompletion, darkMode } = useTaskContext();

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center">
        <span
          className={`px-3 py-2 text-xs text-white font-semibold rounded-lg ml-4 ${darkMode ? 'bg-blue-200 text-blue-800 hover:bg-blue-100' : 'bg-[#EA5959] hover:bg-red-300'}`}
        >
          {task.category || 'Uncategorized'}
        </span>

        <button
          onClick={() => removeTask(task.id)}
          className={`text-white px-3 py-2 rounded-full text-sm ml-2 ${darkMode ? 'bg-blue-200 text-blue-800 hover:bg-blue-100' : 'bg-[#EA5959] hover:bg-red-300'}`}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
