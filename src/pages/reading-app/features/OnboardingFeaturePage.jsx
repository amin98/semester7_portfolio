import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';
import v1 from '../../../assets/lo_images/readingapp/design/onboarding/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/onboarding/v2.png';
import v3 from '../../../assets/lo_images/readingapp/design/onboarding/v3.png';
import v4 from '../../../assets/lo_images/readingapp/design/onboarding/v4.png';
import v4_1 from '../../../assets/lo_images/readingapp/design/onboarding/v4-1.png';
import v4_2 from '../../../assets/lo_images/readingapp/design/onboarding/v4-2.png';

const onboardingFeatureData = {
  featureTitle: 'User Onboarding Flow – Preference Discovery',
  featureIntro:
    'This onboarding sequence was designed to collect meaningful user data (e.g., genres, moods, personality indicators) in a way that feels intuitive and engaging. Instead of a static form, I aimed to make the process exploratory, personal, and visually driven. This evolution focused on reducing drop-off while increasing emotional investment in the app from the start.',
  designVersions: [
    {
      versionName: 'Version 1 – Traditional Genre Form',
      screenshotUrl: v1,
      caption: 'List of genres with radio buttons and a “Continue” CTA.',
      changesDescription:
        'A basic form-like screen asking the user to choose their favorite genre. Clear, but uninspiring. The visual style was minimal and utilitarian.',
      researchInsight:
        'Traditional forms are easy to implement but often lead to user fatigue or drop-off unless extremely concise.',
      hmwQuestion:
        'How might we gather preferences without making it feel like a form?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Mood Carousel',
      screenshotUrl: v2,
      caption: 'Horizontal icon selector using illustrated mood scenes.',
      changesDescription:
        'Moved to an icon-based carousel asking users to select the “scene” that matches their mood. Added navigational arrows and visual anchors.',
      researchInsight:
        'Mood-based onboarding (used by apps like Finch and Headspace) builds faster emotional connections by allowing symbolic self-expression.',
      hmwQuestion:
        'How might we let users express mood or preference with minimal cognitive load?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 3 – Illustrated Fandom Cues',
      screenshotUrl: v3,
      caption: 'Stylized icons representing pop culture to imply identity.',
      changesDescription:
        'Introduced etched illustrations of iconic items (Pokeball, Naruto band, etc.) to help users associate the app with personal identity and fandom. The sepia tone grounded the aesthetic.',
      researchInsight:
        'Nostalgia and familiarity can enhance relatability. This approach increases emotional stickiness for Gen Z users.',
      hmwQuestion:
        'How might we use symbolic language to help users feel seen?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4 – Gamified Vibe Picker (1/3)',
      screenshotUrl: v4,
      caption: 'Selectable objects with visual progress tracking.',
      changesDescription:
        'Users are now asked to pick 3 “vibe” objects that resonate. The design introduced circular cards, object illustrations, and a clean progress indicator.',
      researchInsight:
        'Gamified micro-goals (e.g., pick 3) improve engagement by tapping into collection mechanics and completion psychology.',
      hmwQuestion:
        'How might we turn onboarding into a mini personality game?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4.1 – Confirmation Modal',
      screenshotUrl: v4_1,
      caption: 'Final selection confirmation before submission.',
      changesDescription:
        'Introduced a “Are you sure?” dialog before committing answers. Created space for reflection, and added polish to the interaction flow.',
      researchInsight:
        'Modal confirmations improve perceived control and reduce accidental commitment errors.',
      hmwQuestion:
        'How might we add intentionality without annoying the user?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 4.2 – UI Polish & Accessibility',
      screenshotUrl: v4_2,
      caption: 'Refined spacing, better touch targets, consistent CTA color.',
      changesDescription:
        'Improved button contrast, spacing between selections, and visual alignment. Final UI ready for implementation with feedback from peers.',
      researchInsight:
        'Consistency and spacing are major UX trust factors. Small misalignments reduce perceived quality.',
      hmwQuestion:
        'How might we ship an onboarding that feels simple but polished?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],
  reflectionText:
    'The onboarding feature went from a form-based data capture to a playful experience rooted in self-expression. By layering in familiar icons, simple gamification, and clearer visual metaphors, the process became something users actively enjoy rather than tolerate. I learned that emotional design and narrative framing have just as much UX value as clear information hierarchy.',
};

const OnboardingFeaturePage = () => {
  return <FeatureComponent {...onboardingFeatureData} />;
};

export default OnboardingFeaturePage;