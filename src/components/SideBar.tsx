import { FaSun, FaMoon } from 'react-icons/fa';
import { useTaskContext } from '../context/TaskContext';


const Sidebar = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const { tasks, darkMode, toggleDarkMode } = useTaskContext();
  const categories = Array.from(new Set(tasks.map(task => task.category).concat('All')));

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className={`w-64 h-[650px] p-4 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Side Bar</h2>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-md bg-[#EA5959]  ${darkMode ? 'bg-blue-200 text-blue-800  hover:bg-blue-100' : 'bg-[#EA5959] text-white hover:bg-red-300'}`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Categories</label>
        <select
          onChange={handleCategoryChange}
          className={`border rounded-md p-2 w-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
