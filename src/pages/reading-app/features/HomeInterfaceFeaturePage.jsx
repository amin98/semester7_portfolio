import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

// Image imports
import v1 from '../../../assets/lo_images/readingapp/design/home/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/home/v2.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/home/v2-1.png';
import v2_2 from '../../../assets/lo_images/readingapp/design/home/v2-2.png';

const homeInterfaceFeatureData = {
  featureTitle: 'Home Interface – User Dashboard & Daily Re-engagement',
  featureIntro:
    "The home screen acts as the user's control center. After onboarding, it's the most visited screen — responsible for motivation, progress visibility, and discovery. This feature focused on evolving from a simple list to a dynamic dashboard that combines streaks, daily goals, XP, and story suggestions. I aimed to create something functional, gamified, and emotionally engaging, especially for returning users.",

  designVersions: [
    {
      versionName: 'Version 1 – Simple Book List',
      screenshotUrl: v1,
      caption: 'Initial wireframe showing reading progress and daily goal.',
      changesDescription:
        'A straightforward interface listing current read, reading streak, and a daily challenge prompt. Functional, but visually flat and lacking motivational feedback.',
      researchInsight:
        'Users appreciate fast access to current tasks, but reward systems and energy indicators are often missing in minimal designs.',
      hmwQuestion:
        "How might we create a homepage that feels rewarding and progress-oriented without overwhelming the user?",
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Gamified Dashboard',
      screenshotUrl: v2,
      caption: 'Gamified home with XP, streaks, and daily challenges.',
      changesDescription:
        'Integrated a leveled XP system, energy bar, and coin mechanic. The “Story of the Day” creates a starting point for reading. Visuals became more playful, aligned with a mobile RPG aesthetic. Added story suggestions, badges, and challenge callouts.',
      researchInsight:
        'Gamification tactics like leveling, streaks, and coin-based decisions increase retention — especially with younger readers.',
      hmwQuestion:
        "How might we motivate users to return daily and explore new reading content in a way that feels like a game loop?",
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Streak/XP Integration Polishing',
      screenshotUrl: v2_1,
      caption: 'Repositioned coin and XP elements for hierarchy and clarity.',
      changesDescription:
        'Improved UI clarity by reordering coin/XP indicators, resizing badges, and emphasizing progress bars. Used color-coded visual metaphors (lightning, gold) to clarify energy vs. reward.',
      researchInsight:
        'Clarity in feedback systems (XP, streaks) is key. Confusing visual hierarchy weakens the motivational effect.',
      hmwQuestion:
        "How might we show progress and streaks in a way that feels intuitive and gamified?",
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 2.2 – UI Polish & Contrast Pass',
      screenshotUrl: v2_2,
      caption: 'Added stronger outlines, better padding, and icon sizing tweaks.',
      changesDescription:
        'Refined icon alignment, padding, and visual weight. Increased button affordance, reduced visual noise, and added drop shadow to content cards for clearer modular separation.',
      researchInsight:
        'Small contrast and padding adjustments improve legibility and UX on varied screen sizes.',
      hmwQuestion:
        "How might we improve the visual rhythm of the homepage to support readability and frequent reuse?",
      learningOutcomes: ['Design'],
    },
  ],

  reflectionText:
    "The Home interface was an opportunity to shape user habits. I started with a clean layout but realized it lacked excitement. Through testing and feedback, I saw how much gamified elements (XP bars, coins, streaks) increase motivation and reward users passively. I iterated based on visual clarity, emotional tone, and layout efficiency. While early versions felt 'safe,' the latest designs feel like an actual part of a game world — which fits the app's mission to make reading fun and goal-driven.",

  implementationPlanText:
    "The Home screen will be implemented using Flutter’s `ListView` with dynamic sections for current read, challenge, and recommended stories. XP and coins will be tied to the user profile object in Firebase. Daily story logic will run server-side and be cached locally. Progress will update via real-time listeners on Firebase. Modular widgets will be used to allow reuse of 'book cards' across the app.",

  nextStepsText:
    "• A/B test the visibility of 'Story of the Day' vs. a horizontal carousel of daily suggestions.\n" +
    "• Add animation to the XP bar (level-up effect).\n" +
    "• Add badge collection on the home screen to reward returning users visually.\n" +
    "• Review accessibility contrast ratios for key icons and progress bars.",

};

const HomeInterfaceFeaturePage = () => {
  return <FeatureComponent {...homeInterfaceFeatureData} />;
};

export default HomeInterfaceFeaturePage;