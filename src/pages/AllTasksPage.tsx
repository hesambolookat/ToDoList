import { useState } from 'react';
import Sidebar from '../components/SideBar';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const AllTasksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  return (
    <div className={`flex`}>
      <Sidebar onCategoryChange={setSelectedCategory} /> 
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
        <TaskForm onCategoryChange={setSelectedCategory} />  
        <TaskList category={selectedCategory} />  
      </main>
    </div>
  );
};

export default AllTasksPage;
