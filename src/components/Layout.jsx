import React from 'react';
import { Outlet, useMatches } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';

const Layout = () => {
  const matches = useMatches();

  let breadcrumbItems = matches
    .filter((match) => Boolean(match.handle?.breadcrumb))
    .map((match) => {
      const breadcrumbData = match.handle.breadcrumb(match.params);
      return breadcrumbData;
    });

  if (breadcrumbItems.length === 0 && matches.length > 0) {
    breadcrumbItems = [{ label: 'Home', path: '/' }];
  } else if (
    breadcrumbItems.length > 0 &&
    breadcrumbItems[0].label !== 'Home'
  ) {
    breadcrumbItems.unshift({ label: 'Home', path: '/' });
  }

  return (
    <div className="flex h-screen bg-background">
      <ScrollToTop scrollableContainerId="main-content-area" />
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b border-[#dee2e6]">
          <div className="flex-1">
            {breadcrumbItems.length > 0 && (
              <Breadcrumbs items={breadcrumbItems} />
            )}
          </div>
        </header>
        <main
          id="main-content-area"
          className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
