import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

export interface Task {
  id: number;
  title: string;
  category: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  filterTasks: (category: string) => Task[];
  removeTask: (id: number) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleTaskCompletion: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'; 
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    toast.success('Task added successfully');
  };

  const filterTasks = (category: string) => {
    if (category === 'All') {
      return tasks;
    }
    return tasks.filter(task => task.category === category);
  };
  
  

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.error('Task deleted');
  };

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, filterTasks, removeTask, darkMode, toggleDarkMode, toggleTaskCompletion }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
