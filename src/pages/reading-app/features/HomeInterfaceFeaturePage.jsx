// src/pages/reading-app/features/HomeInterfaceFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/home/v1.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/home/v2-1.png';
import v2_2 from '../../../assets/lo_images/readingapp/design/home/v2-2.png';
import v2 from '../../../assets/lo_images/readingapp/design/home/v2.png';

const homeInterfaceFeatureData = {
  featureTitle: 'Home Interface – Dashboard & Coming Back Daily',
  featureIntro:
    "After starting, home screen is like user's main place. Not just plain list, I design dashboard with streaks, daily goals, XP, and story ideas. I want it to feel helpful and also fun—like small game each time user open app.",

  designVersions: [
    {
      versionName: 'Version 1 – Simple Book List',
      screenshotUrl: v1,
      caption:
        'Wireframe with easy list of current book, streak, and daily challenge.',
      changesDescription:
        'This first version has only text: current reading, how many streaks, and daily prompt. It is clear but looks a bit boring, no fun feeling.',
      researchInsight:
        'I see that users like to get to tasks fast, but if no reward or energy meter, they may not return.',
      hmwQuestion: 'How can we make home feel good but not too full?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Dashboard Like a Game',
      screenshotUrl: v2,
      caption: 'Dashboard with XP bar, streak badge, and daily story idea.',
      changesDescription:
        'I add a level XP bar, an energy coin, and a "Story of the Day" part. All pictures become more playful like small RPG. Also add badges and challenge reminders.',
      researchInsight:
        'Game features like XP and streaks help users to come back more, especially younger readers.',
      hmwQuestion:
        'How can we make user want to return daily and see more stories?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Better XP & Streak Look',
      screenshotUrl: v2_1,
      caption: 'Moved XP and coin icons for better looking order.',
      changesDescription:
        'I move coin and XP bar to top, make badges different size, and make progress bars more clear. Use color hints (lightning for energy, gold for coins) to show difference.',
      researchInsight:
        'Users need clear visual order for how feedback systems work. If it is confusing, motivation is less strong.',
      hmwQuestion:
        'How can we show progress and streak so users understand fast?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 2.2 – Fix Contrast & Spacing',
      screenshotUrl: v2_2,
      caption: 'Make outlines, padding, and icon sizes better for clarity.',
      changesDescription:
        'I change padding around cards, add shadows, and fix how icons line up. Buttons get stronger outlines and are less messy. Now each part is more clear.',
      researchInsight:
        'Small changes in contrast and space make reading easier on different phones.',
      hmwQuestion:
        'How can we make visuals better so home is easy and nice to look at?',
      learningOutcomes: ['Design'],
    },
  ],

  reflectionText:
    'Making this screen, I learned that feeling of reward is very important. First layout was too simple—user did not feel excited. When I add XP bars, coins, and streaks, every visit feels like small win. Making visuals and flow better, dashboard become something user likes.',

  implementationPlanText:
    "I will use Flutter's ListView to put sections on top of each other: current book, daily challenge, and story recommendations. XP and coins will come from Firebase in real time. Each book card is own widget so code is more clean and can be used again.",

  nextStepsText:
    '• I will test "Story of the Day" against a carousel to see what users like more.\n' +
    '• Add a small animation when XP level goes up for more fun.\n' +
    '• Show a small badge area on home to give user reward.\n' +
    '• Check accessibility: contrast on icons and progress bars.',
};

const HomeInterfaceFeaturePage = () => {
  return <FeatureComponent {...homeInterfaceFeatureData} />;
};

export default HomeInterfaceFeaturePage;
