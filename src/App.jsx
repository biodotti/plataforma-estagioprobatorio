import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseList from './pages/courses/CourseList';
import CourseView from './pages/courses/CourseView';
import TutorChat from './components/tutor/TutorChat';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }>
                        <Route index element={<Dashboard />} />
                        <Route path="courses" element={<CourseList />} />
                        <Route path="courses/:courseId" element={<CourseView />} />
                    </Route>
                </Routes>
                <TutorChat />
            </Router>
        </AuthProvider>
    );
}

export default App;
