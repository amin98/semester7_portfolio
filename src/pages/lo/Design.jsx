import React from 'react';
import DocLinkCard from '../../components/DocLinkCard';
import evidence from '../../data/evidence';

const Design = () => {
  const loId = 'design';
  const loEvidence = evidence[loId] || [];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-h2 font-bold font-sans text-textPrimary mb-6 leading-tight">
        Learning Outcome: Design
      </h1>
      <p className="mb-8 text-base font-normal font-sans text-textSecondary leading-base">
        *Official description of Design LO here...*
      </p>

      <section id="evidence" className="mb-12">
        <h2 className="text-h4 font-semibold font-sans text-textPrimary mb-4">
          Evidence
        </h2>
        {loEvidence.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {loEvidence.map((item, index) => (
              <DocLinkCard
                key={index}
                title={item.title}
                href={item.href}
                icon={item.icon || '🎨'}
              />
            ))}
          </div>
        ) : (
          <p className="text-base font-normal font-sans text-textSecondary leading-base">
            No evidence linked for this learning outcome yet.
          </p>
        )}
      </section>

      <section id="rationale">
        <h2 className="text-h4 font-semibold font-sans text-textPrimary mb-4">
          Rationale
        </h2>
        <p className="text-base font-normal font-sans text-textSecondary leading-base">
          *Explain how the linked evidence demonstrates proficiency in
          Design...*
        </p>
      </section>
    </div>
  );
};

export default Design;
