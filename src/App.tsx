import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Workouts } from './pages/Workouts';
import { ActiveWorkout } from './pages/ActiveWorkout';
import { Programs } from './pages/Programs';
import { Stats } from './pages/Stats';
import { Profile } from './pages/Profile';
import { ProgramDetail } from './pages/ProgramDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:id" element={<ProgramDetail />} />
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/workout/:id" element={<ActiveWorkout />} />
    </Routes>
  );
}

export default App;
