// src/pages/reading-app/features/OnboardingFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/onboarding/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/onboarding/v2.png';
import v3 from '../../../assets/lo_images/readingapp/design/onboarding/v3.png';
import v4_1 from '../../../assets/lo_images/readingapp/design/onboarding/v4-1.png';
import v4_2 from '../../../assets/lo_images/readingapp/design/onboarding/v4-2.png';
import v4 from '../../../assets/lo_images/readingapp/design/onboarding/v4.png';

const onboardingFeatureData = {
  featureTitle: 'User Onboarding Flow – Finding What You Enjoy',
  featureIntro:
    'I did not want users to feel like they are filling a big form. So I make onboarding more like a small fun quiz. Not plain lists, I use mood carousels and playful icons. This makes onboarding feel like mini-game, and it helps app learn user taste for reading.',
  designVersions: [
    {
      versionName: 'Version 1 – Old Style Genre Form',
      screenshotUrl: v1,
      caption:
        'Simple list of genres with a radio button and "Continue" button.',
      changesDescription:
        'This first version is a very plain screen. It asks user to choose favorite genre, like an old web form. It works but is boring and too serious.',
      researchInsight:
        'I read that forms often make people tired quickly if too many options. They want easy steps.',
      hmwQuestion:
        'How can we ask user about their likes without it feeling like a form?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Mood Picture Carousel',
      screenshotUrl: v2,
      caption: 'Horizontal icons that show mood scenes for picking.',
      changesDescription:
        'I change to an icon carousel. User scrolls left or right to pick a scene that matches their mood. I add arrows and simple art to give a feeling of choice.',
      researchInsight:
        'Apps like Finch and Headspace let user pick mood images. This makes people feel connection more fast.',
      hmwQuestion:
        'How to let user show mood or what they like with small effort?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 3 – Symbols from Fandoms',
      screenshotUrl: v3,
      caption: 'Icons of pop culture things to let user feel their identity.',
      changesDescription:
        'I add drawings of known things like a Pokéball or ninja headband. This connects to pop culture and helps user feel "this is me." Color is sepia to look warm.',
      researchInsight:
        'People feel good when they see things from their own memories. Nostalgia helps user to stay longer.',
      hmwQuestion: 'How to use symbols so user feels the app understands them?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4 – Vibe Picker Like a Game',
      screenshotUrl: v4,
      caption:
        'User picks 3 "vibe" items, with a progress indicator down below.',
      changesDescription:
        'Now user sees round cards with small images. They pick three things that feel good. I show a progress circle so user knows how many are left.',
      researchInsight:
        'When user has a small goal like "pick three," it feels like a game and people are more active in it.',
      hmwQuestion: 'How to make onboarding feel like a fun small game?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4.1 – Popup for Confirmation',
      screenshotUrl: v4_1,
      caption: 'Popup asks "Are you sure?" before user sends their answers.',
      changesDescription:
        'I add a simple confirm box before they save. This gives user a moment to think and makes mistakes less.',
      researchInsight:
        'Popups help user feel they have control and make fewer errors by asking again.',
      hmwQuestion:
        'How to add a check step without making user annoyed too much?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 4.2 – Polish & Making it Easy to Use',
      screenshotUrl: v4_2,
      caption:
        'Better space between cards, clearer buttons, good contrast for easy reading.',
      changesDescription:
        'I improve spacing so icons do not feel too close. I fix button colors for better contrast. All final changes based on what peers said.',
      researchInsight:
        'Good spacing and clear buttons help user trust the app. Small mistakes in alignment make it feel less quality.',
      hmwQuestion: 'How to make onboarding look simple but also polished?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],
  reflectionText:
    'At the start, the simple form felt too cold. When I add icons, a progress bar, and steps like a game, people find it more fun. I learn that putting small playful details into clear steps makes onboarding more memorable and nice to do.',
};

const OnboardingFeaturePage = () => {
  return <FeatureComponent {...onboardingFeatureData} />;
};

export default OnboardingFeaturePage;
