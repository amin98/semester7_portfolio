// src/pages/reading-app/features/WelcomeFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

// Image imports
import v1 from '../../../assets/lo_images/readingapp/design/welcome/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/welcome/v2.png';
import v3 from '../../../assets/lo_images/readingapp/design/welcome/v3.png';
import v3_1 from '../../../assets/lo_images/readingapp/design/welcome/v3-1.png';

const welcomeFeatureDataWithProcess = {
  featureTitle: 'Welcome Screen',
  relevantLearningOutcomesOverall: [
    'Analysis',
    'Advice',
    'Design',
    'Professional Skills',
  ],
  featureIntro: // Main HMW question removed from here
    "The first screen a user encounters sets the crucial initial tone for their app experience. My goal for the Welcome Screen was to create an inviting 'hello'—moving beyond a plain, functional start to one that uses soft visuals, friendly language, and evocative imagery. The aim was to make users feel welcomed and curious, subtly introducing the app's personality before they begin the onboarding process. This involved iterative analysis of user expectations and design principles to transform a simple entry point into an engaging invitation.",
  mainHmwQuestion: "How can we make the first screen feel more welcoming and not like a machine?", // Moved here
  designVersions: [
    {
      versionName: 'Version 1: Basic Wireframe',
      screenshotUrl: v1,
      caption:
        'Gray mockup with title in the middle and a simple "Get Started" button.',
      changesDescription:
        `**Approach (Initial Analysis & Design):** This first version was a simple wireframe with just the main layout: a title and button in the center. There was no color or image. The goal was only to set up the structure and information flow.

**Shortcoming & Rationale (Analysis Output):** It worked in a basic way, but felt too empty and not very friendly. It didn’t give a warm welcome feeling.`,
      researchInsight:
        'Looking at popular apps, many even use light emotional cues in early versions. This design felt too dry.',
      // No specific hmwQuestion for V1, as it's covered by mainHmwQuestion
      theoreticalGrounding:
        'This version was a starting point, with focus on layout. No deeper UX ideas were applied yet.',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2: Words and Font Style',
      screenshotUrl: v2,
      caption:
        'Cream background with a more playful sentence: "Pick three that you know."',
      changesDescription:
        `**Approach (Iterative Design & Advice):** To give the screen more personality, I changed the text to a friendlier question: 'Pick three that you know.' I used a softer font and a cream-colored background. The button text became 'Begin'.

**Justification (Advice & Design Principle):** Based on what I read about UX, playful or challenge-like text can help users feel more involved. This fits the idea that tone of voice shapes the experience.`,
      researchInsight:
        'UX research says that casual or friendly language can help users stay engaged during onboarding.',
      hmwQuestion: // Kept: This HMW is specific and distinct for this iteration
        'How can we lead users into the personality quiz without making it feel heavy?',
      theoreticalGrounding:
        'Using a soft font and background helps create a positive feeling (**Affective Design - Norman**). The playful question uses **microcopy principles** to guide and motivate.',
      learningOutcomes: ['Design', 'Advice', 'Analysis'],
    },
    {
      versionName: 'Version 3: Picture Framing',
      screenshotUrl: v3,
      caption:
        'Image of a young explorer with a magical bookshelf for a playful scene.',
      changesDescription:
        `**Approach (Design Concept):** I added a drawing of a young explorer standing by a magical bookshelf. This added a strong visual story.

**Justification & Rationale (Design Theory):** The idea was to show that the app is about going on an adventure and discovering stories. Using visuals like a bookshelf as a **metaphor for discovery** helps users understand the meaning more quickly.`,
      researchInsight:
        'Visual symbols like doors or bookshelves help create a feeling of a journey, which makes the experience more exciting.',
      hmwQuestion: // Kept: This HMW is specific and distinct for this iteration
        'How can we show that this app is about exploring and finding stories?',
      theoreticalGrounding:
        'This version uses **narrative design** and **visual storytelling** to spark curiosity (**Octalysis - Exploration & Curiosity** core drive).',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 3.1: Text Changes and Small Fixes',
      screenshotUrl: v3_1,
      caption:
        'Changed the tagline to "Find your vibe" and added more space around the image.',
      changesDescription:
        `**Approach (Refinement & Feedback):** I changed the tagline to 'Find your vibe' based on comments from users. It felt more modern and natural to them. I also added more space around the image to make the layout feel lighter (**Gestalt - Proximity/Common Region**). The button text was changed to 'Continue' to match later screens (**Nielsen's Heuristic - Consistency**).

**Justification (Advice & Design):** The tagline change came directly from user feedback. Adding space follows design rules to improve visual balance.`,
      researchInsight:
        'User comments showed that shorter and more casual taglines work better with younger users.',
      // No specific hmwQuestion for V3.1, as its refinements tie back to previous HMWs or the main one
      theoreticalGrounding:
        "This change fits **UX Writing** practices. Extra spacing improves layout clarity based on **visual design principles**. Keeping button text the same follows **Nielsen's Heuristic of Consistency and Standards**.",
      learningOutcomes: ['Design', 'Advice', 'Professional Skills', 'Analysis'],
    },
  ],
  reflectionText: `My first version (V1) was very simple, but it felt too empty and not friendly enough. After testing different ideas, I saw that small changes like background color, font, images, and short texts can make a big difference in how the screen feels.

**Key Learning:** I learned that the first screen should already give a warm and positive feeling. In version 3, I used visual storytelling to make the welcome more engaging, even before the user does anything.

**Challenge Encountered:** It was difficult to keep the screen both clear and attractive. Finding the right image and short sentence that felt emotional but easy to understand took a few tries.

**Learning from Feedback:** In version 3.1, I changed the sentence based on casual feedback, which showed me how helpful even small comments from users can be.

**Personal Retrospective Goal:** Next time, I want to use small animations or effects earlier in the process, and if possible, do A/B testing to improve important texts like taglines.`,
  nextStepsText:
    'Next, I want to test two tagline options—"Find your vibe" and "Start your journey"—with a small group of teenagers to see which one they prefer. If I have time, I will also try adding a small animation, like a bookshelf opening or the character giving a wave, to make the screen more fun.',
};

const WelcomeFeaturePage = () => {
  return <FeatureComponent {...welcomeFeatureDataWithProcess} />;
};

export default WelcomeFeaturePage;