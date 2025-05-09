import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/reading_interface/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/reading_interface/v2.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/reading_interface/v2-1.png';

const readingInterfaceFeatureData = {
  featureTitle: 'Reading Interface – Immersion & Custom Control',
  featureIntro:
    "This is the heart of the app: where users engage with stories. The reading interface needed to feel immersive but also responsive to each user's unique preferences and goals. I explored how to balance focused reading, progression indicators, and in-context feedback without overwhelming the screen. Visual hierarchy, font readability, and minimal distraction were top priorities. Later iterations emphasized gamified progression and contextual guidance.",
  designVersions: [
    {
      versionName: 'Version 1 – Minimalist Reader Layout',
      screenshotUrl: v1,
      caption: 'Clean reading view with limited distractions.',
      changesDescription:
        'This early layout introduced a traditional chapter-based reader with a clean serif font and basic navigation bar. It set the tone for quiet focus, minimizing clutter and reserving interactivity for page transitions and navigation.',
      researchInsight:
        'Reader engagement improves when interfaces minimize cognitive noise. Serif fonts and line spacing boost readability for longer sessions.',
      hmwQuestion:
        'How might we design a reading screen that invites deep focus without feeling sterile?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 2 – Interactive Progress & Motivation',
      screenshotUrl: v2,
      caption: 'Visual progress and CTA button added for motivational pacing.',
      changesDescription:
        'A visible progress bar was introduced alongside motivational icons (e.g., a lightning bolt) to indicate energy or streaks. A persistent “Continue” button guided progression. This design bridges reading with the app’s gamified feedback system.',
      researchInsight:
        'Subtle gamification through progress indicators (similar to language apps) increases completion and session duration.',
      hmwQuestion:
        'How might we keep users motivated mid-story without distracting them from the narrative?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Enhanced Clarity & Navigation Feedback',
      screenshotUrl: v2_1,
      caption: 'Added visual cue for chapter navigation and refined CTA visibility.',
      changesDescription:
        'Improved accessibility and visibility of UI elements like bookmarks, chapter counts, and CTA button size. Ensured consistent contrast and spacing across reading states. Light background themes were iterated for comfort and focus.',
      researchInsight:
        'Teens and young adults prefer interfaces with feedback and progression that feels lightweight and contextual rather than gamified-heavy.',
      hmwQuestion:
        'How might we balance immersion with UX clarity in a reading experience?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],
  reflectionText:
    "Designing this feature helped me understand that reading UI isn't just about typography and spacing — it's about rhythm. The user’s experience flows like a narrative, and any interface element should feel like a natural beat in that rhythm. Early versions were too static. By introducing progression visuals, motivational triggers, and responsive layout, I learned how small changes can significantly affect engagement without sacrificing immersion.",
  implementationPlanText:
    'The reader will be built in Flutter using PageView for horizontal or vertical scroll handling. Progress bars are linked to chapter index via a stateful widget. Theme toggles will control dynamic styles using provider. Font size and layout settings will be saved in local preferences. A11Y and contrast tests will be applied for WCAG compliance. Estimated time: 2–3 days.',
  nextStepsText:
    "Next, I’ll prototype a focus mode (hide all UI chrome after delay) and test reading comfort in short vs. long sessions. I also want to validate font options and theme toggles via peer feedback from test readers aged 12–25.",
};

const ReadingInterfaceFeaturePage = () => {
  return <FeatureComponent {...readingInterfaceFeatureData} />;
};

export default ReadingInterfaceFeaturePage;