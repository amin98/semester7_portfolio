import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b border-[#dee2e6]">
          <h1 className="text-xl font-semibold text-textPrimary font-sans">
            My Portfolio
          </h1>
          {/* Removed dark mode toggle */}
        </header>
        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
