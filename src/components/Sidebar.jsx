import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import learningOutcomesData from '../data/learningOutcomes';

const Sidebar = () => {
  const [isLoMenuOpen, setIsLoMenuOpen] = useState(false);

  const toggleLoMenu = () => {
    setIsLoMenuOpen(!isLoMenuOpen);
  };

  const loNavItems = learningOutcomesData.map((lo) => ({
    path: `/lo/${lo.id}`,
    label: lo.title,
  }));

  const mainNavItems = [
    { path: '/', label: 'Start Here' },
    { path: '/individual', label: 'Individual Case' },
    { path: '/group', label: 'Group Project' },
  ];

  const utilityNavItems = [
    { path: '/feedback-progress', label: 'Improvements' },
    { path: '/version-history', label: 'Version History' },
    { path: '/planning', label: 'Planning' },
  ];

  const navLinkClasses = ({ isActive }) =>
    `flex items-center justify-between w-full px-3 py-2 rounded text-textPrimary ${
      isActive ? 'bg-primary text-white' : 'hover:bg-light hover:text-primary'
    }`;

  const loNavLinkClasses = ({ isActive }) =>
    `block w-full px-3 py-2 rounded text-sm text-textSecondary ${
      isActive
        ? 'bg-primary/70 text-white'
        : 'hover:bg-light hover:text-primary'
    }`;

  const loButtonClasses = `flex items-center justify-between w-full px-3 py-2 rounded focus:outline-none ${
    isLoMenuOpen
      ? 'bg-light text-primary'
      : 'text-textPrimary hover:bg-light hover:text-primary'
  }`;

  return (
    <aside className="w-64 bg-background p-4 overflow-y-auto flex-shrink-0 border-r border-gray-200">
      <nav>
        <ul>
          {mainNavItems.map((item) => (
            <li key={item.path} className="mb-1">
              <NavLink to={item.path} className={navLinkClasses}>
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="mb-1">
            <button
              onClick={toggleLoMenu}
              className={loButtonClasses}
              aria-expanded={isLoMenuOpen}
              aria-controls="lo-submenu"
            >
              <span>Learning Outcomes</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isLoMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isLoMenuOpen && (
              <ul
                id="lo-submenu"
                className="mt-1 pl-4 border-l border-gray-300"
              >
                {loNavItems.map((item) => (
                  <li key={item.path} className="mb-px">
                    <NavLink to={item.path} className={loNavLinkClasses}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {utilityNavItems.map((item) => (
            <li key={item.path} className="mb-1">
              <NavLink to={item.path} className={navLinkClasses}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
