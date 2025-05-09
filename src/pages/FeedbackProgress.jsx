import React from 'react';
// // TODO: Import TimelineItem component when created
// import TimelineItem from '../components/TimelineItem';
// // TODO: Import feedbackMap data when populated
// import feedbackMap from '../data/feedbackMap';

const FeedbackProgress = () => {
  // // TODO: Fetch feedback data (e.g., from a JSON file or Assessment 1 MD file)
  const feedbackItems = [
    {
      id: 'portfolio_visibility',
      text: 'Portfolio does not show what you know...',
      status: 'pending',
    },
    {
      id: 'individual_contribution',
      text: 'Individual contribution invisible...',
      status: 'in_progress',
    },
    {
      id: 'design_versions',
      text: 'Lack of design versions...',
      status: 'done',
    },
    // ... other items
  ];

  // Map status to color
  const statusColor = (status) => {
    if (status === 'done') return 'text-success';
    if (status === 'in_progress') return 'text-info';
    return 'text-warning';
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-h1 font-bold font-sans text-textPrimary mb-8 leading-tight">
        Feedback Progress (Assessment 1 → Now)
      </h1>
      <div className="space-y-8">
        {/* // TODO: Replace with actual TimelineItem components when ready */}
        {feedbackItems.map((item) => (
          <div
            key={item.id}
            className="p-6 border border-solid border-[#dee2e6] rounded-radius bg-background shadow-small"
          >
            <p className="font-semibold font-sans text-textPrimary mb-2">
              Feedback: "{item.text}"
            </p>
            <p className="text-base font-normal font-sans text-textSecondary mb-2">
              Status:{' '}
              <span className={`font-semibold ${statusColor(item.status)}`}>
                {item.status.replace('_', ' ')}
              </span>
            </p>
            {/* <p className="text-sm">Related Section: <a href={feedbackMap[item.id] || '#'} className="text-primary hover:underline">Link</a></p> */}
            <p className="text-sm font-sans text-textSecondary">
              *Placeholder for TimelineItem content showing 'before' and
              'after'*
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackProgress;
