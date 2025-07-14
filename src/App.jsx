import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserReposScreen from './views/UserReposScreen';
import RepoDetailsScreen from './views/RepoDetailsScreen';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserReposScreen />} />
        <Route path="/repo/:name" element={<RepoDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App
