import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/courses/CourseList';
import CourseView from './pages/courses/CourseView';
import TutorChat from './components/tutor/TutorChat';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="courses" element={<CourseList />} />
                    <Route path="courses/:courseId" element={<CourseView />} />
                </Route>
            </Routes>
            <TutorChat />
        </Router>
    );
}

export default App;
