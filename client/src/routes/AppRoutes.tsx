import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import { Meetings } from '../pages/meetings/Meetings';
import { CreateMeeting } from '../pages/meetings/CreateMeeting';
import { MeetingDetails } from '../pages/meetings/MeetingDetails';
import { EditMeeting } from '../pages/meetings/EditMeeting';
import { Summaries } from '../pages/summaries/Summaries';
import { SummaryDetails } from '../pages/summaries/SummaryDetails';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="meetings/new" element={<CreateMeeting />} />
        <Route path="meetings/:id" element={<MeetingDetails />} />
        <Route path="meetings/:id/edit" element={<EditMeeting />} />
        <Route path="summaries" element={<Summaries />} />
        <Route path="summaries/:id" element={<SummaryDetails />} />
        <Route path="action-items" element={<div>Action Items Page</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>
    </Routes>
  );
};
