import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Exemplo } from '../Pages';
import PrivateRoute from './private.routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/exemplo" element={<Exemplo />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
