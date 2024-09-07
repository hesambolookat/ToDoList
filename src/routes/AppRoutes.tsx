import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTasksPage from '../pages/AllTasksPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTasksPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
