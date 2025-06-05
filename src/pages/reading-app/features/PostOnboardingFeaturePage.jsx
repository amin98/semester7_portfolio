// src/pages/reading-app/features/PostOnboardingFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1_2 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-2.png';
import v1_3 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-3.png';
import v1_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-4.png';
import v1_5 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-5.png';
import v1 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-1.png';
import v2_3 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-3.png';
import v2_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-4.png';
import v2_5 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-5.png';
import v2 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2.png';

const postOnboardingFeatureData = {
  featureTitle: 'After Onboarding – Your First Action',
  featureIntro:
    'After finishing onboarding, user should know what is next. This screen gives a clear idea—a story or quest prompt—so user goes from setup to a good activity. I focus on making it clear and motivating, so the change feels like part of a small adventure.',

  designVersions: [
    {
      versionName: 'Version 1.0 – Basic Dashboard Start Point',
      screenshotUrl: v1,
      caption:
        'Wireframe shows a simple dashboard with Library, Quests, and Explore tabs.',
      changesDescription:
        'First, I use a basic hub design: Library, Quests, Explore. It looks organized but does not show user a clear next action. Many choices but no main focus.',
      researchInsight:
        'I saw that users often feel lost after onboarding if they do not see a clear next thing to do.',
      hmwQuestion:
        'How can we lead user from setup to a specific, good activity?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 1.1 – Adding More Structure',
      screenshotUrl: v1_2,
      caption: 'Dashboard with more space and clearer visual parts.',
      changesDescription:
        'Next, I add stronger separation between parts: Library at top, Quests in middle, Explore at bottom. It looks cleaner, but still does not give a strong call to action.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 1.2 – Clear Action Button',
      screenshotUrl: v1_3,
      caption:
        'Put in bold buttons like "Start Reading" and "Continue Journey."',
      changesDescription:
        'Then, I make main buttons stand out: "Start Reading" and "Continue Journey." This gives user a direct action, but it still feels like a menu, not an invitation.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 1.3 – Story-Like Prompt',
      screenshotUrl: v1_4,
      caption:
        'One single prompt: "Do you want a guide for your first story?" to show user the way.',
      changesDescription:
        'I change from many menu choices to one story-like prompt: "Do you want a guide for your first story?" This makes the experience feel like taking a quest.',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 1.4 – Confirmation Like a Game',
      screenshotUrl: v1_5,
      caption:
        'Show genre suggestion based on personality and quiz prompt for first action.',
      changesDescription:
        'I add a bit of game feel: suggest genres based on personality and prompt a quick quiz. This connects user to something they care about right after onboarding.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 2.0 – Themed Story Introduction',
      screenshotUrl: v2,
      caption: "Full-screen themed picture that matches user's quiz answers.",
      changesDescription:
        "Now, I show a full-screen theme picture that matches user's chosen genre. It feels like going into their own story world right away.",
      researchInsight:
        'Personal pictures build emotional connection. When users see their choice shown, they feel more part of it.',
      hmwQuestion:
        'How can we give user a feeling of "this is for me" right after onboarding?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Suggestions Based on Mood',
      screenshotUrl: v2_1,
      caption: "Show story suggestions based on user's chosen mood or vibe.",
      changesDescription:
        'Next, I add a "Based on your mood" part with a few recommended stories. This makes the experience feel made for their taste.',
      learningOutcomes: ['Design', 'Realisation'],
    },
    {
      versionName: 'Version 2.2 – Making the World',
      screenshotUrl: v2_3,
      caption: '“Making your world…" loading screen to build up excitement.',
      changesDescription:
        'I include a playful "Making your world…" loading screen, like in apps such as Forest, to create excitement and fun.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 2.3 – Story Choice Grid',
      screenshotUrl: v2_4,
      caption: 'Grid layout where user picks one story from a themed group.',
      changesDescription:
        'In this version, users see a neat grid of story covers. They just tap the one they want. I polish icons and add touch feedback for better experience.',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.4 – Final Confirmation Box',
      screenshotUrl: v2_5,
      caption: 'Box asking "Do you like this vibe?" before going into story.',
      changesDescription:
        'Finally, I add a confirmation box: "Do you like this vibe?" This gives user a moment to confirm their choice and feel sure.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],

  reflectionText:
    'At first, putting users on a general dashboard felt confusing. By adding story prompts and themed pictures, I made that moment a guided adventure. I learned that small story touches can make engagement much better and help user feel connected.',

  implementationPlanText:
    'I will build this flow in Flutter using animated changes and Riverpod to pass user choices from onboarding. The "Making your world…" screen is a simple animation that shows progress. I think it will take about 1.5 days to make and polish.',

  nextStepsText:
    'Next, I want to do an A/B test: direct story start versus a choice grid, to see which feels more natural. I will also add analytics to see which prompt makes users more engaged.',
};

const PostOnboardingFeaturePage = () => {
  return <FeatureComponent {...postOnboardingFeatureData} />;
};

export default PostOnboardingFeaturePage;
