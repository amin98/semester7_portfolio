// import personaImage from 'https://placehold.co/600x400/EEE/31343C';

const TargetAudiencePage = () => {
  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Target Audience & Personas
        </h1>
        <p className="text-xl text-textSecondary">
          Synthesizing research to define who the app is for, their needs,
          goals, and frustrations.
        </p>
        <div className="mt-4">{/* ... LO tag rendering ... */}</div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="target-audience-title">
          <h2
            id="target-audience-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Detailed Target Audience
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            Based on initial research, the target audience is **young people
            aged 12-25 in the Netherlands**. However, this broad demographic can
            be further refined into two primary segments:
          </p>
          <ul className="list-disc list-inside text-lg text-textSecondary space-y-2 mt-4">
            <li>
              <span className="font-semibold text-textPrimary">
                Adolescents (12-17):
              </span>{' '}
              Highly influenced by social trends (like BookTok), motivated by
              gamification and peer interaction, but have shorter attention
              spans due to competition from video content and social media.
            </li>
            <li>
              <span className="font-semibold text-textPrimary">
                Young Adults (18-25):
              </span>{' '}
              Many are "lapsed readers" who enjoyed reading previously but lost
              the habit due to academic or work pressures. They seek efficient
              ways to discover new books that match their niche interests and
              value personal growth and mindfulness.
            </li>
          </ul>
        </section>

        <section aria-labelledby="personas-title">
          <h2
            id="personas-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            User Personas
          </h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="md:flex md:gap-8">
              <div className="md:w-1/3 text-center mb-6 md:mb-0">
                <img
                  src='https://placehold.co/600x400/EEE/31343C' // Your persona image here
                  alt="Chloe, the Curious Skimmer"
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary"
                />
                <h3 className="text-2xl font-bold text-textPrimary mt-4">
                  Chloe
                </h3>
                <p className="text-textSecondary">The Curious Skimmer, 15</p>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic text-textSecondary border-l-4 border-gray-200 pl-4 mb-6">
                  "I want to read more like my friends on TikTok, but I get
                  bored easily and don't know where to start."
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-2">
                      Goals
                    </h4>
                    <ul className="list-disc list-inside text-textSecondary space-y-1">
                      <li>Fit in with social reading trends.</li>
                      <li>Find books that are exciting from the first page.</li>
                      <li>Feel a sense of accomplishment.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-textPrimary mb-2">
                      Pain Points
                    </h4>
                    <ul className="list-disc list-inside text-textSecondary space-y-1">
                      <li>
                        Gets easily distracted by social media notifications.
                      </li>
                      <li>Finds traditional book descriptions boring.</li>
                      <li>Fears wasting time on a "bad" book.</li>
                      <li>Reading feels like a lonely activity.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* You could add a second persona card here */}
        </section>

        <section aria-labelledby="implications-title">
          <h2
            id="implications-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Implications for the Project
          </h2>
          <p className="text-lg text-textSecondary leading-relaxed">
            These personas provide a clear mandate for the app's design. To
            serve **Chloe**, the app must prioritize **high-engagement
            features** like short, serialized content and strong, visible
            gamification (streaks, badges). To address her pain points, social
            features and a very effective, "vibe-based" onboarding are not
            optional, but essential. All future design decisions will be weighed
            against the question: "Would this help Chloe stay engaged?"
          </p>
        </section>
      </div>
    </article>
  );
};

export default TargetAudiencePage;
