import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

const readingInterfaceFeatureData = {
  featureTitle: 'Reading Interface & Controls',
  featureIntro:
    'The core experience: how users interact with content, customize their reading view, and access tools like notes or dictionary.',
  designVersions: [
    {
      versionName: 'V1 - Standard Reader',
      screenshotUrl: '/placeholder-feature-reader-v1.jpg',
      changesDescription:
        'Basic reader with font size adjustment and page turning. Minimal UI chrome.',
      researchInsight:
        'A clean, distraction-free reading environment is paramount for focus.',
      hmwQuestion:
        'How might we provide essential reading controls without cluttering the interface?',
      learningOutcomes: ['Design', 'Realisation'],
    },
    {
      versionName: 'V2 - Customizable View & Toolbar',
      screenshotUrl: '/placeholder-feature-reader-v2.jpg',
      changesDescription:
        'Added options for themes (sepia, dark), margins, line spacing. Introduced a contextual toolbar for notes, highlights, dictionary lookup.',
      researchInsight:
        'Readers have diverse preferences for text presentation and appreciate in-context tools.',
      hmwQuestion:
        'How might we empower users to tailor the reading experience to their exact needs and provide tools without disrupting flow?',
      learningOutcomes: ['Design', 'Advice', 'Realisation'],
    },
  ],
  reflectionText:
    'Balancing a clean interface with powerful customization was key. Iterations added features progressively based on common reader needs.',
};

const ReadingInterfaceFeaturePage = () => {
  return <FeatureComponent {...readingInterfaceFeatureData} />;
};

export default ReadingInterfaceFeaturePage;
