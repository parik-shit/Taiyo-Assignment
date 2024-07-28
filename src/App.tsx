import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar2 from './components/Sidebar2';
import HomePage from './pages/home/homePage';
import ContactPage from './pages/contact/ContactPage';
import MapPage from './pages/maps/mapsPage';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client = {queryClient}>
      
      <Router>
        <div>
	  <Sidebar2/>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
	  <ReactQueryDevtools initialIsOpen={false}/>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

