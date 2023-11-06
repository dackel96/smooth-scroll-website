import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Home from './pages';

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Home />
        </>
      ),
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={path} />{' '}
      </div>
    </>
  );
}

export default App;
