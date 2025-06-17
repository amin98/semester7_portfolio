import { Link } from 'react-router-dom';
import fableLogo from '../../../assets/fable_logo.jpg';
import goodreadsLogo from '../../../assets/goodreads_logo.jpg';
import hookedLogo from '../../../assets/hooked_logo.jpg';
import wattpaddLogo from '../../../assets/wattpadd_logo.jpg';

const CompetitiveAnalysisPage = () => {
  const learningOutcomes = ['Analysis'];

  // Data transcribed directly from your provided document
  const competitors = [
    {
      app: 'Fable',
      logo: fableLogo,
      keyFeatures: 'Book club, reading tracker,',
      engagementTools: 'Social goals, streaks, reminders, badges',
      strengths: 'Integrated reading, wellness focused reading',
      weaknesses: 'Minimal gamification. Not geared towards young people',
      takeaways: 'Combine social reading with minimal gamification',
    },
    {
      app: 'Hooked',
      logo: hookedLogo,
      keyFeatures: 'Chat based, storytelling, short stories',
      engagementTools: 'Time limited reading',
      strengths: 'Very engaging for short attention spans',
      weaknesses: 'Shallow content and limited reading value',
      takeaways: 'Chat style + cliffhangers = high engagement',
    },
    {
      app: 'WattPadd',
      logo: wattpaddLogo,
      keyFeatures: 'Short stories from independent writers',
      engagementTools: 'Likes/comments, Follower system, Story rankings,',
      strengths: 'Strong community, Low entry barrier,',
      weaknesses:
        'Open platform means lack of quality. Not designed for beginning readers',
      takeaways:
        'Community makes users come back. Serial storytelling can make for a reading habit.',
    },
    {
      app: 'GoodReads',
      logo: goodreadsLogo,
      keyFeatures: 'Book Tracking',
      engagementTools: 'Reading Challenges',
      strengths: 'Database of books',
      weaknesses: 'Account necessary',
      takeaways:
        'Setting goals and social communication can push for consistent reading.',
    },
  ];

  return (
    <article className="max-w-5xl mx-auto py-8">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl mb-4">
          Competitive Analysis
        </h1>
        <p className="text-xl text-textSecondary">
          An analysis of best practices and takeaways from well-established apps
          to identify market opportunities.
        </p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-textPrimary mb-1">
            Relevant Learning Outcome:
          </h4>
          <div className="flex flex-wrap gap-2">
            {learningOutcomes.map((lo, idx) => (
              <Link
                key={idx}
                to={`/lo/${lo.toLowerCase().replace(/ & | /g, '-')}`}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full hover:bg-indigo-200 transition-colors"
              >
                {lo}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-16">
        <section aria-labelledby="competitor-analysis-table-title">
          <h2
            id="competitor-analysis-table-title"
            className="text-3xl font-semibold text-textPrimary mb-6"
          >
            Competitor Breakdown
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full bg-white text-left">
              <thead className="bg-gray-50">
                <tr className="text-center">
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    App
                  </th>
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    Key Features
                  </th>
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    Engagement Tools
                  </th>
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    Strengths
                  </th>
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    Weaknesses
                  </th>
                  <th className="p-4 font-semibold text-sm text-textPrimary uppercase tracking-wider">
                    Takeaways
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitors.map((competitor) => (
                  <tr key={competitor.app}>
                    <td className="p-4 font-semibold text-primary">
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={competitor.logo}
                          alt={`${competitor.app} logo`}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <span>{competitor.app}</span>
                      </div>
                    </td>
                    <td className=" p-2 text-textSecondary">
                      {competitor.keyFeatures}
                    </td>
                    <td className=" p-2 text-textSecondary">
                      {competitor.engagementTools}
                    </td>
                    <td className=" p-2 text-textSecondary">
                      {competitor.strengths}
                    </td>
                    <td className=" p-2 text-textSecondary">
                      {competitor.weaknesses}
                    </td>
                    <td className=" p-2 text-textSecondary">
                      {competitor.takeaways}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="conclusion-title">
          <h2
            id="conclusion-title"
            className="text-3xl font-semibold text-textPrimary mb-4"
          >
            Takeaways and Considerations for My Reading App
          </h2>
          <div className="space-y-4 text-lg text-textSecondary leading-relaxed">
            <p>
              Successful reading apps rely on habit-building systems and social
              engagement. They also utilize tailored content formats to maintain
              user interest. However, most apps lack effective{' '}
              <span className="font-semibold text-textPrimary">
                gamification
              </span>{' '}
              and engagement for{' '}
              <span className="font-semibold text-textPrimary">
                young readers
              </span>
              . By making reading more motivating, I can add gamified systems
              like XP, streaks, and daily quests, for example.
            </p>
            <p>
              Apps like Wattpad and Fable are already geared towards those
              already interested in reading. To make reading more "inviting" for
              non-readers, I can incorporate features like short,
              cliffhanger-styled content with gamified pacing.
            </p>
            <p>
              Fable's mindfulness and curated themes are unique features that
              can resonate with users on a deeper, emotional level. For my
              reading app, I can ensure users can choose reading paths based on
              mood, personal goals, or curated themes.
            </p>
            <p>
              There is also an obvious age gap in the market. A lot of apps fail
              to bridge the gap between young adults and adolescents. An
              accountability system between peers could be an effective tool for
              habit building in this demographic.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};

export default CompetitiveAnalysisPage;
