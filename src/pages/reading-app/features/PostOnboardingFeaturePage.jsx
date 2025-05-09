import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

// Image imports
import v1 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1.png';
import v1_2 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-2.png';
import v1_3 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-3.png';
import v1_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-4.png';
import v1_5 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-5.png';
import v2 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-1.png';
import v2_3 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-3.png';
import v2_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-4.png';
import v2_5 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-5.png';

const postOnboardingFeatureData = {
  featureTitle: 'Post-Onboarding Experience – First Meaningful Interaction',
  featureIntro:
    "This screen marks the user's first exposure to real content after completing onboarding. It’s a pivotal moment to reinforce the app's value, help the user feel oriented, and spark initial engagement. I explored different strategies to guide users toward their first meaningful interaction — whether that’s browsing recommended stories or starting a personal quest. The design emphasizes clarity, motivation, and a sense of narrative progression.",
  designVersions: [
    {
      versionName: 'Version 1.0 – Initial Dashboard Overview',
      screenshotUrl: v1,
      caption: 'Wireframe of a dashboard concept with access to core app sections.',
      changesDescription:
        'Proposed a hub-like layout showing Library, Quests, and Explore tabs. However, it lacked focus and didn’t offer narrative continuity.',
      researchInsight:
        'Users often feel disoriented post-onboarding if not directed toward a specific action.',
      hmwQuestion:
        'How might we transition users from setup into a rewarding, focused activity?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 1.1 – Functional Expansion',
      screenshotUrl: v1_2,
      caption: 'Expanded UI structure for dashboard with visual spacing and stronger sectioning.',
      changesDescription:
        'Tested the usability of multiple access points, but clarity was still lacking.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 1.2 – Call-to-Action Enhancement',
      screenshotUrl: v1_3,
      caption: 'Introduced clearer CTAs like “Start Reading” and “Continue Journey”.',
      changesDescription:
        'Experimented with stronger visual affordance on action buttons to direct user flow.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 1.3 – Reduced Friction via Prompt',
      screenshotUrl: v1_4,
      caption:
        'Prompted users with a single story and clear directional flow, e.g., “Would you like a guide?”',
      changesDescription:
        'Moved from menu-based logic to narrative prompt. Framed interaction like a quest.',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 1.4 – Gamified Confirmation Layer',
      screenshotUrl: v1_5,
      caption: 'Included personality-based genres and quiz prompt for first interaction.',
      changesDescription:
        'Started layering gamification elements directly after onboarding.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 2.0 – Themed First Story Intro',
      screenshotUrl: v2,
      caption: 'Full-screen visual showing the user’s chosen theme as a book entry point.',
      changesDescription:
        'Personalized theme imagery helps users build a visual identity tied to their onboarding answers.',
      researchInsight:
        'Themes and narrative tropes improve emotional ownership of onboarding outcome.',
      hmwQuestion:
        'How might we reward user completion with an emotionally meaningful moment?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Mood Calibration State',
      screenshotUrl: v2_1,
      caption: 'Shows recommended stories based on mood and vibe chosen.',
      changesDescription:
        'Built a stronger connection between onboarding answers and first set of content.',
      learningOutcomes: ['Design', 'Realisation'],
    },
    {
      versionName: 'Version 2.2 – World Generation Transition',
      screenshotUrl: v2_3,
      caption: 'Loading screen metaphor: “Building your world...”',
      changesDescription:
        'Borrowed emotional strategy from apps like Notion and Forest to build anticipation.',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 2.3 – Story Selector with Art',
      screenshotUrl: v2_4,
      caption: 'Users choose one story from a themed selection grid.',
      changesDescription:
        'Clarified hierarchy of story choices. Polished icons and hover effects for mobile.',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.4 – Final Confirmation Modal',
      screenshotUrl: v2_5,
      caption: 'Confirmation before entering the story: “Do these fit your vibe?”',
      changesDescription:
        'Created an opt-in moment to strengthen decision-making clarity and commitment.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],
  reflectionText:
    "This feature pushed me to consider the onboarding aftermath as more than just a ‘dashboard drop-off.’ I began with a default hub layout but quickly realized that engagement was more likely if the user received a narrative continuation or reward. Introducing character, theme, and CTA direction after onboarding proved effective. Through these iterations, I also learned the balance between functional freedom and structured progression.",
  implementationPlanText:
    'This flow will be implemented in Flutter using animated transitions and conditional routing from onboarding. Story and theme data will be passed as route parameters. I plan to use state management (Riverpod) to carry user preference across routes. The transition to the story page will include a small delay for the loading screen effect. Estimated time: 1.5 days with polish.',
  nextStepsText:
    'User testing with A/B versions of the final step (direct start vs. story selection) will help optimize emotional clarity. I’ll also consider an analytics hook to measure which CTA converts best (guide, home, or start reading).',
};

const PostOnboardingFeaturePage = () => {
  return <FeatureComponent {...postOnboardingFeatureData} />;
};

export default PostOnboardingFeaturePage;