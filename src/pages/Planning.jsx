import React from 'react';

const Planning = () => {
  // // TODO: Add Trello screenshot gallery logic/component
  // // TODO: Fetch or define planned vs actual data
  const planningData = [
    {
      task: 'Setup Project Structure',
      planned: '1 day',
      actual: '1 day',
      status: '✅',
    },
    {
      task: 'Implement Layout & Sidebar',
      planned: '2 days',
      actual: '3 days',
      status: '⚠️',
    },
    {
      task: 'Create LO Pages',
      planned: '3 days',
      actual: 'In Progress',
      status: '⏳',
    },
    // ... more tasks
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-h2 font-bold font-sans text-textPrimary mb-6 leading-tight">
        Project Planning
      </h1>

      <section id="trello-gallery" className="mb-12">
        <h2 className="text-h3 font-semibold font-sans text-textPrimary mb-4">
          Trello Board Snapshots
        </h2>
        {/* // TODO: Implement image gallery */}
        <div className="p-8 border border-solid border-[#dee2e6] rounded-radius bg-light text-center text-textSecondary">
          *Trello Screenshot Gallery Placeholder*
        </div>
      </section>

      <section id="planned-vs-actual">
        <h2 className="text-h3 font-semibold font-sans text-textPrimary mb-4">
          Planned vs Actual
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-background border border-solid border-[#dee2e6] rounded-radius">
            <thead>
              <tr className="bg-light text-xs font-semibold uppercase tracking-wider text-textSecondary">
                <th className="p-4 text-left">Task</th>
                <th className="p-4 text-left">Planned</th>
                <th className="p-4 text-left">Actual</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-textPrimary">
              {planningData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-[#dee2e6] hover:bg-light"
                >
                  <td className="p-4 whitespace-nowrap">{item.task}</td>
                  <td className="p-4 whitespace-nowrap">{item.planned}</td>
                  <td className="p-4 whitespace-nowrap">{item.actual}</td>
                  <td className="p-4 text-center">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Planning;
