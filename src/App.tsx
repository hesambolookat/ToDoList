import { TaskProvider } from './context/TaskContext';
import AppRoutes from './routes/AppRoutes';
import Toastify from './components/Toastify';
import Layout from './components/Layout';

const App = () => {
  return (
    <TaskProvider>
      <Layout>
        <AppRoutes />
        <Toastify />
      </Layout>
    </TaskProvider>
  );
};

export default App;
