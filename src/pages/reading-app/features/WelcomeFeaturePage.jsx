import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';
// At the top of WelcomeFeaturePage.jsx
import v1 from '../../../assets/lo_images/readingapp/design/welcome/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/welcome/v2.png';
import v3_1 from '../../../assets/lo_images/readingapp/design/welcome/v3-1.png';
import v3 from '../../../assets/lo_images/readingapp/design/welcome/v3.png';

const welcomeFeatureData = {
  featureTitle: 'Welcome Interface – First Impression & Engagement',
  featureIntro:
    'The welcome screen is the first moment of contact. Its job is not just functional but emotional: to signal clarity, safety, and personality. My goal was to transform a generic start screen into something that sparks curiosity, hints at personalization, and feels thematically warm. This evolution reflects a balance between industry convention and creative differentiation.',
  designVersions: [
    {
      versionName: 'Version 1 – Wireframe Baseline',
      screenshotUrl: v1,
      caption: 'Initial grayscale layout with centered copy and basic CTA.',
      changesDescription:
        'This early version focused on structural hierarchy. The layout was vertically centered with standard system font, and a “Get Started” button. The goal here was to define a neutral baseline before applying branding or tone.',
      researchInsight:
        'Many successful apps (e.g., Notion, Headspace) start with minimalist screens, but these still include at least one emotional cue — this version lacked that.',
      hmwQuestion:
        'How might we make the first screen feel more than just functional?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Tone and Typography',
      screenshotUrl: v2,
      caption: 'Shifted to a friendlier tone and cream background palette.',
      changesDescription:
        'This version introduced playful copy ("Pick three that feel familiar") and a subtle tone shift using a warm background. Typography was more humanist, and the CTA was simplified to “Begin”.',
      researchInsight:
        'Mobile UX studies show that casual, challenge-based copy increases onboarding follow-through. Removing friction and increasing curiosity were the priorities.',
      hmwQuestion:
        'How might we guide users into personality selection without overwhelming them?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 3 – Illustrated Framing',
      screenshotUrl: v3,
      caption: 'Visual storytelling added with a young explorer and bookshelf.',
      changesDescription:
        'This version introduced a central narrative metaphor: a child standing before a magical shelf. The goal was to visually suggest that the user is about to enter an imaginative journey.',
      researchInsight:
        'Visual metaphors like doors, bookshelves, or character avatars help users orient themselves and feel emotionally grounded before they begin.',
      hmwQuestion:
        'How might we make the app’s value instantly recognizable as an “exploration” experience?',
      learningOutcomes: ['Design', 'Realisation'],
    },
    {
      versionName: 'Version 3.1 – Microcopy Refinement',
      screenshotUrl: v3_1,
      caption: 'Rewriting the tagline to emphasize personalization.',
      changesDescription:
        'Shortened the tagline to “Find your vibe.” — more casual, rhythmic, and relevant to Gen Z phrasing. Layout spacing was adjusted to let the visuals breathe more. CTA changed to "Continue" for consistency.',
      researchInsight:
        'User testing on tone of voice showed stronger emotional recall for short, expressive taglines that feel personal and confident.',
      hmwQuestion:
        'How might we speak to the user in a way that feels familiar and modern?',
      learningOutcomes: ['Design', 'Advice', 'Professional Skills'],
    },
  ],
  reflectionText:
    'Throughout these iterations, I shifted from a functional mindset to an emotional one. Initially I thought clarity meant minimalism — but clarity is also about emotional orientation. Through visual cues, warm colors, and copy iteration, the screen now feels like a moment of invitation, not just initiation. Feedback and visual benchmarking helped me internalize how small design shifts affect user emotion and narrative cohesion.',
  implementationPlanText:
    'The screen will be implemented using Flutter’s Column widget with responsive layout for small devices. The illustration will be an SVG/PNG asset layered using Stack, and the CTA button will animate into the onboarding flow using Navigator.pushNamed. Development is estimated at 1 day, including touch target QA.',
  nextStepsText:
    'Test emotional recall of tagline with users 13–18 using two variants (“Find your vibe” vs “Start your journey”). Consider animating the bookshelf or character glance to add subtle feedback and delight.',
};

const WelcomeFeaturePage = () => {
  return <FeatureComponent {...welcomeFeatureData} />;
};

export default WelcomeFeaturePage;
