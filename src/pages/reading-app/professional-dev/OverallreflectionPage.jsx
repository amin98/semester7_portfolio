// src/pages/reading-app/professional-dev/OverallReflectionPage.jsx

const OverallReflectionPage = () => {
//   const learningOutcomes = ['Professional Skills'];

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Overall Project Reflection
        </h1>
        <p className="text-xl text-textSecondary">
          A high-level reflection on the entire project journey, key personal learnings, and future considerations.
        </p>
        <div className="mt-4">
          {/* ... LO tag rendering ... */}
        </div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="project-summary-title">
          <h2 id="project-summary-title" className="text-3xl font-semibold text-textPrimary mb-4">
            Project Summary & Personal Growth
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            This individual project was a comprehensive exercise in moving from a high-level problem to a designed and (partially) realized product. It challenged me to wear multiple hats: researcher, UX/UI designer, architect, and project manager. The journey from initial analysis to tangible design artifacts taught me the importance of a structured, iterative process.
          </p>
        </section>

        <section aria-labelledby="key-learnings-title">
          <h2 id="key-learnings-title" className="text-3xl font-semibold text-textPrimary mb-6">
            Key Personal & Technical Learnings
          </h2>
          <div className="space-y-4 text-lg">
            <p className="text-textSecondary">
              {/* You will fill this with your specific learnings */}
              Placeholder: "One of the biggest technical skills I developed was..."
              <br/><br/>
              Placeholder: "From a process perspective, I learned the immense value of the 'Golden Thread'—explicitly linking my analysis to my design choices. This was a direct response to early feedback and has fundamentally changed how I will approach projects."
            </p>
          </div>
        </section>
        
        <section aria-labelledby="what-if-title">
          <h2 id="what-if-title" className="text-3xl font-semibold text-textPrimary mb-4">
            What I Would Do Differently Next Time
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            {/* You will fill this with your specific reflections */}
            Placeholder: "If I were to start this project over, I would integrate user testing much earlier. While I planned for it, creating interactive prototypes and getting feedback before writing any code would have saved time and validated design assumptions more quickly. I would also establish a more rigid time-boxing schedule for documentation to ensure it happens concurrently with development, rather than after the fact."
          </p>
        </section>
      </div>
    </article>
  );
};

export default OverallReflectionPage;