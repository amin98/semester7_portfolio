import React from 'react';
// // TODO: Import TimelineItem component when created
// import TimelineItem from '../components/TimelineItem';
// // TODO: Import feedbackMap data when populated
// import feedbackMap from '../data/feedbackMap';

const FeedbackProgress = () => {
  // Removed breadcrumbItems definition

  // // TODO: Fetch feedback data (e.g., from a JSON file or Assessment 1 MD file)
  const feedbackItems = [
    {
      id: 'portfolio_visibility',
      text: 'Portfolio does not show what you know well...',
      status: 'pending',
    },
    {
      id: 'individual_contribution',
      text: 'What you did alone is not clear...',
      status: 'in_progress',
    },
    {
      id: 'design_versions',
      text: 'Not enough design versions shown...',
      status: 'done',
    },
  ];

  // Map status to color
  const statusColor = (status) => {
    if (status === 'done') return 'text-success';
    if (status === 'in_progress') return 'text-info';
    return 'text-warning';
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-h2 font-bold font-sans text-textPrimary mb-6 leading-tight">
        Improvements & How We Use Feedback
      </h1>
      <div className="space-y-8">
        {/* // TODO: Replace with actual TimelineItem components when ready */}
        {feedbackItems.map((item) => (
          <div
            key={item.id}
            className="p-6 border border-solid border-[#dee2e6] rounded-radius bg-background"
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
              *Placeholder for TimelineItem content showing 'before' and 'after'
              views*
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackProgress;
