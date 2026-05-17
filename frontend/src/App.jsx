import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import HomePage from './pages/public/HomePage';
import EventsPage from './pages/public/EventsPage';
import EventDetailPage from './pages/public/EventDetailPage';
import RegistrationSuccessPage from './pages/public/RegistrationSuccessPage';
import RegistrationHistoryPage from './pages/public/RegistrationHistoryPage';
import AboutPage from './pages/public/AboutPage';

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ManageEventsPage from './pages/admin/ManageEventsPage';
import CreateEventPage from './pages/admin/CreateEventPage';
import EditEventPage from './pages/admin/EditEventPage';
import ParticipantsPage from './pages/admin/ParticipantsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/register/success" element={<RegistrationSuccessPage />} />
          <Route path="/registrations" element={<RegistrationHistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/events" element={<ManageEventsPage />} />
            <Route path="/admin/events/create" element={<CreateEventPage />} />
            <Route path="/admin/events/:id/edit" element={<EditEventPage />} />
            <Route path="/admin/participants" element={<ParticipantsPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
