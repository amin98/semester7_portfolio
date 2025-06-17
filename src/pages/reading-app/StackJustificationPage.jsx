import { Link } from 'react-router-dom';

const StackJustificationPage = () => {
  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Technology Stack & Justification
        </h1>
        <p className="text-xl text-textSecondary">
          Making and justifying the foundational technical choices for the app
          based on project requirements and analysis.
        </p>
        <div className="mt-4">{/* ... LO tag rendering ... */}</div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="challenge-title">
          <h2
            id="challenge-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            The Challenge: Choosing the Right Tools
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            The choice of a technology stack is a critical architectural
            decision that impacts development speed, performance, scalability,
            and future maintainability. The goal was to select a stack that
            would not only allow for rapid development of a Minimum Viable
            Product (MVP) but also scale effectively as the app grows. The
            decision needed to be directly informed by the project's specific
            requirements identified during the analysis phase.
          </p>
        </section>

        <section aria-labelledby="requirements-title">
          <h2
            id="requirements-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Key Requirements from Analysis (The "Golden Thread")
          </h2>
          <p className="text-lg text-textSecondary mb-4">
            My analysis phase produced several key requirements that directly
            influenced my technical advice and decisions:
          </p>
          <ul className="list-disc list-inside text-lg text-textSecondary space-y-3">
            <li>
              <span className="font-semibold text-textPrimary">
                Cross-Platform Native Experience:
              </span>{' '}
              The initial platform rationale identified the need for a native
              app on both iOS and Android to reach the entire target audience.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Engaging, Custom UI:
              </span>{' '}
              The design process for features like the{' '}
              <Link
                to="/reading-app/features/onboarding"
                className="text-primary hover:underline"
              >
                Onboarding Flow
              </Link>{' '}
              relies heavily on custom animations and a unique, non-standard UI
              to feel "fun." The chosen framework must allow for high creative
              freedom.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Real-time Features & Scalable Backend:
              </span>{' '}
              The need for social features (like leaderboards or shared
              progress) and AI-powered recommendations requires a robust,
              scalable backend that can handle real-time data and complex
              queries.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Rapid Development for MVP:
              </span>{' '}
              As a solo developer, speed of development is crucial to validate
              the concept quickly.
            </li>
          </ul>
        </section>

        <section aria-labelledby="chosen-stack-title">
          <h2
            id="chosen-stack-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Advised & Chosen Technology Stack
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Frontend: Flutter
              </h3>
              <p className="text-textSecondary">
                **Justification:** I advised and chose Flutter for its ability
                to build high-performance, natively compiled applications for
                mobile, web, and desktop from a single codebase. This directly
                addresses the **cross-platform requirement**. Its widget-based
                architecture provides complete control over the UI, which is
                essential for implementing the custom, **engaging designs**
                required to appeal to our persona, "Chloe."
                <br />
                <br />
                **Alternatives Considered:** React Native was considered, but
                Flutter's superior performance and more consistent UI rendering
                across platforms made it the better choice for a design-heavy
                application. Swift (iOS-only) was rejected as it would double
                development time for an Android version.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Backend & Database: Google Firebase
              </h3>
              <p className="text-textSecondary">
                **Justification:** I advised and chose the Firebase suite
                (Firestore, Authentication, Cloud Functions) as the
                Backend-as-a-Service (BaaS). This decision directly supports the
                **rapid development requirement** by eliminating the need to
                manage server infrastructure. Firestore's real-time capabilities
                are perfect for the planned **social and gamification
                features**. Firebase's scalability ensures the app can grow
                without major re-architecture.
                <br />
                <br />
                **Alternatives Considered:** A custom backend (e.g., Node.js +
                PostgreSQL) would offer more flexibility but at a significantly
                higher cost in terms of development time and server management,
                making it unsuitable for the MVP phase. AWS Amplify was also a
                strong contender, but my prior experience with Firebase allowed
                for faster execution.
              </p>
            </div>
            {/* You could add more for AI, etc. */}
          </div>
        </section>

        <section aria-labelledby="reflection-title">
          <h2
            id="reflection-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Reflection on Technical Advice
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            This process of providing technical advice was a critical learning
            experience. It taught me that technology choices are not made based
            on what's "cool" or "new," but are direct answers to the problems
            and needs uncovered in the analysis phase. By creating a list of
            requirements *before* evaluating technologies, I was able to make a
            well-substantiated, defensible decision. This "requirements-first"
            approach is a professional skill I will carry forward to all future
            projects.
          </p>
        </section>
      </div>
    </article>
  );
};

export default StackJustificationPage;
