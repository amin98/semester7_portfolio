import React from 'react';
// import Breadcrumbs from '../../components/Breadcrumbs';
import DocLinkCard from '../../components/DocLinkCard';
import evidence from '../../data/evidence';

const Professional = () => {
  const loId = 'professional';
  const loEvidence = evidence[loId] || [];
  // const breadcrumbItems = [
  //   { label: 'Home', path: '/' },
  //   { label: 'Learning Outcomes', path: '/learning-outcomes' },
  //   { label: 'Professional Skills', path: '/lo/professional' },
  // ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* <Breadcrumbs items={breadcrumbItems} /> */}
      <h1 className="text-h2 font-bold font-sans text-textPrimary mb-6 leading-tight">
        Learning Goal: Professional Skills
      </h1>
      <p className="mb-8 text-base font-normal font-sans text-textSecondary leading-base">
        *Here, official description of Professional Skills Learning Goal...*
      </p>

      <section id="evidence" className="mb-12">
        <h2 className="text-h4 font-semibold font-sans text-textPrimary mb-4">
          Proof
        </h2>
        {loEvidence.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loEvidence.map((item, index) => (
              <DocLinkCard
                key={index}
                title={item.title}
                href={item.href}
                icon={item.icon || '🤝'}
              />
            ))}
          </div>
        ) : (
          <p className="text-base font-normal font-sans text-textSecondary leading-base">
            No proof linked for this learning goal yet.
          </p>
        )}
      </section>

      <section id="rationale">
        <h2 className="text-h4 font-semibold font-sans text-textPrimary mb-4">
          Reasoning
        </h2>
        <p className="text-base font-normal font-sans text-textSecondary leading-base">
          *Explain how the linked proof shows you are good at Professional
          Skills...*
        </p>
      </section>
    </div>
  );
};

export default Professional;
