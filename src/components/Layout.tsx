import React from 'react';
import { useTaskContext } from '../context/TaskContext';  

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useTaskContext();  

  return (
    <div className={`min-h-screen flex justify-center items-center ${darkMode ? ' text-white bg-slate-500' : 'bg-[#EA5959]'}`}>
      <div className={`shadow-lg rounded-lg p-6 w-[983px] h-[702px] ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
