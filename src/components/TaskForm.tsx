import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { showErrorToast } from './Toastify';  

const TaskForm = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const { addTask, darkMode } = useTaskContext(); 

  const handleSubmit = () => {
    if (title.trim() === '') {
      showErrorToast('Ops! You must add a Task');  
      return;
    }

    addTask({ id: 0, title, category, completed: false });
    setTitle('');
    onCategoryChange(category); 
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task inside ‘All’ category"
        className={`border rounded-lg p-2 w-full bg-[#F3F3F3] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`ml-2 border rounded-lg p-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
      >
        <option value="Uncategorized">Uncategorized</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>
      <button
        onClick={handleSubmit}
        className={`ml-2 w-20 text-white rounded-lg p-2 ${darkMode ? 'bg-blue-200 text-blue-800 hover:bg-blue-100' : 'bg-[#EA5959] hover:bg-red-300'}`}
      >
        +
      </button>
    </div>
  );
};

export default TaskForm;
