import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  QueryClient,
  QueryClientProvider,}from '@tanstack/react-query'

import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  
      <React.StrictMode>
        
     <QueryClientProvider client={queryClient}>
     <HouseContextProvider>
        <App />
        </HouseContextProvider>
    </QueryClientProvider>
      </React.StrictMode>
  
  </Router>
);