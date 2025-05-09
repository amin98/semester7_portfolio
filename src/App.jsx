import React from 'react';
import { Outlet } from 'react-router-dom';

// App component is now a shell, Layout is handled by the router config
function App() {
  return (
    <>
      {/* The Layout component is now part of the router configuration in main.jsx */}
      {/* Child routes will be rendered here if App were used as a layout route */}
      <Outlet />
    </>
  );
}

export default App;
