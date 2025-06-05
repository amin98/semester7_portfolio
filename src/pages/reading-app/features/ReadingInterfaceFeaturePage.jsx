// src/pages/reading-app/features/ReadingInterfaceFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/reading_interface/v1.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/reading_interface/v2-1.png';
import v2 from '../../../assets/lo_images/readingapp/design/reading_interface/v2.png';

const readingInterfaceFeatureData = {
  featureTitle: 'Reading Screen – Focus & Gentle Nudges',
  featureIntro:
    'This screen is where users get into stories. I made it simple so users can read with no distractions, then added small hints to invite them to go on. My goal was a clean layout for deep focus, with just enough push to keep them reading without taking them out of the story.',

  designVersions: [
    {
      versionName: 'Version 1 – Basic Simple Reader',
      screenshotUrl: v1,
      caption: 'Simple view that shows only text and basic page buttons.',
      changesDescription:
        'First, I set up a normal chapter reader with a serif font and good line space. Only needed navigation buttons show. The goal was to take out everything extra so readers can focus on text.',
      researchInsight:
        'I learned that less things on screen and a clear serif font help readers stay in for longer times.',
      hmwQuestion:
        'How can we make readers feel welcome in a calm reading space that still looks nice?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 2 – Light Progress & Motivation',
      screenshotUrl: v2,
      caption: 'Added a thin progress bar and a small "Continue" button.',
      changesDescription:
        'Next, I put in a thin progress bar at the top and a tiny lightning icon to show energy or streaks. The "Continue" button stays there so going between chapters feels easy, giving a light game touch without distraction.',
      researchInsight:
        'I read that small progress bars can help more people finish, while keeping readers in flow, like in learning apps.',
      hmwQuestion:
        'How can we gently ask readers to finish a chapter without breaking their focus?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Clearer Navigation Signs',
      screenshotUrl: v2_1,
      caption: 'Chapter marks, bigger "Continue" button, and more spacing.',
      changesDescription:
        'I made the "Continue" button easier to see, added small marks for chapters, and put more space around things. I tested light backgrounds to find a good mix of comfort and easy reading.',
      researchInsight:
        'Early testers liked to know exactly where they are in a story. Clear chapter numbers and a clear CTA button kept them from feeling lost.',
      hmwQuestion:
        'How do we make a look that is free of distractions but gives enough signs so readers always know their progress?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],

  reflectionText:
    'Working on this reader, I learned that small layout choices—like padding or button size—can really affect focus. My first version felt still. By adding light progress signs and clearer navigation hints, it became more alive without breaking the story feel.',

  implementationPlanText:
    'I will build this screen in Flutter using PageView for easy horizontal swipes. A stateful widget will keep track of the current chapter number and update the progress bar. Theme and font settings will be saved in user preferences. I plan to run tests for easy reading (contrast, font size) on many devices. I think it will take 2–3 days for final polish and testing.',

  nextStepsText:
    'Next, I want to try a "focus mode" that hides UI things after a few seconds of reading, then shows them again on tap. I also plan to get peer feedback on font choices and theme options (light vs. dark) to make sure it is comfortable for long reading times.',
};

const ReadingInterfaceFeaturePage = () => {
  return <FeatureComponent {...readingInterfaceFeatureData} />;
};

export default ReadingInterfaceFeaturePage;
