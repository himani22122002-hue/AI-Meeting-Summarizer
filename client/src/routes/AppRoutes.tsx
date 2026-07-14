import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { ForgotPassword } from '../pages/auth/ForgotPassword';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="meetings" element={<div>Meetings Page</div>} />
        <Route path="summaries" element={<div>Summaries Page</div>} />
        <Route path="action-items" element={<div>Action Items Page</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>
    </Routes>
  );
};
