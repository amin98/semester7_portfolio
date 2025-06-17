import React from 'react';

// Main Card component - a flexible container
const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-xl border border-gray-200 group hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${className}`}
    >
      <div className="p-6 flex-grow flex flex-col">{children}</div>
    </div>
  );
};

// Sub-component for the Card Title
const Title = ({ children, className = '' }) => {
  return (
    <h3
      className={`text-xl font-semibold text-primary mb-2 group-hover:text-primary-dark transition-colors ${className}`}
    >
      {children}
    </h3>
  );
};

// Sub-component for the Card Description
const Description = ({ children, className = '' }) => {
  return (
    <p
      className={`text-base text-textSecondary group-hover:text-textPrimary transition-colors flex-grow mb-4 ${className}`}
    >
      {children}
    </p>
  );
};

// Sub-component for a link, can be a standard <a> or a React Router <Link>
const Link = ({ children, as = 'a', className = '', ...rest }) => {
  const Component = as;
  return (
    <Component
      className={`inline-flex items-center text-primary font-semibold hover:underline mt-auto ${className}`}
      {...rest}
    >
      {children} →
    </Component>
  );
};

// Attaching sub-components to the main Card component
Card.Title = Title;
Card.Description = Description;
Card.Link = Link;

export default Card;
