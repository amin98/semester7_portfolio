import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/welcome/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/welcome/v2.png';
import v3_1 from '../../../assets/lo_images/readingapp/design/welcome/v3-1.png';
import v3 from '../../../assets/lo_images/readingapp/design/welcome/v3.png';

export const welcomeFeatureDataWithProcess = {
  // 1. Standard Card Properties
  path: 'features/welcome',
  label: 'Welcome Screen',
  description: 'First look and how to enter app.',
  relevantLearningOutcomesOverall: [
    'Analysis',
    'Advice',
    'Design',
    'Professional Skills',
  ],

  // 2.-3. Content Enhancements
  featureTitle: 'Welcome Screen: Setting an Inviting Tone',
  mainHmwQuestion:
    'How might we make the first screen of the app feel like a warm, personal invitation rather than a cold, functional machine?',
  featureIntro: `The first screen a user sees is a critical first impression that sets the tone for their entire experience. My objective was to create a "nice hello"—an inviting, intriguing welcome that subtly introduces the app's personality. This involved an iterative process of moving beyond a purely functional start screen to one that uses soft colors, friendly language, and eventually, evocative imagery to make users feel welcomed and curious.

**The Challenge & Goal (Analysis):** The challenge was to design a welcome screen that immediately conveys a warm, intriguing atmosphere, encouraging users to proceed without friction. The goal was to create an emotional connection from the very first touchpoint, transforming a simple entry point into an engaging invitation.

**Key User Stories Addressed:**
* "As a user opening the app for the first time, I want to see something inviting so that I feel good about starting."
* "As a user, I want the first screen to be clear and simple so that I know what to do next without confusion."
* "As a user, I want the app to hint at its personality so I can decide if it's for me."

**Stakeholder Considerations (Analysis):**
*   **End-Users:** Need a welcoming and low-friction entry point into the app.
*   **Developer (Me):** The design must be technically simple for a first screen (fast loading) while still being engaging. It's the first POC of the app's brand identity.
*   **Teachers/Mentors:** Expect a thoughtful design process that considers the importance of a first impression in user retention.

**Initial Thoughts & Research (Analysis):** Initial analysis of competing apps showed two paths: purely functional (a logo and a login button) or highly emotive (full-screen video/imagery). My research suggested that for a new app, a middle path—simple, but with personality—was best. This informed my iterative approach, starting with the most basic functional version to have a solid baseline to build upon.
`,
  designVersions: [
    {
      versionName: 'Version 1: Basic Wireframe',
      screenshotUrl: v1,
      caption:
        'Gray mockup with title in the middle and a simple "Get Started" button.',
      changesDescription: `**Approach (Design, Analysis):** This first version was a minimal wireframe showing only the essential components: a title and a button. The purpose was to establish the fundamental layout as a Proof of Concept (POC).
**Shortcoming (Analysis Output):** The analysis of this version was that while functional, it completely failed to meet the 'welcoming' goal. It felt cold, impersonal, and lacked any brand personality.`,
      rationaleAndTheory: `This version served as a baseline, representing a purely functional approach to establish the fundamental layout. Its identified shortcoming—a lack of emotional engagement—substantiates the choice to iterate towards a more visually rich design, highlighting the need for **Affective Design (Norman)**.`,
      researchInsight:
        'Analysis of successful apps showed that even early wireframes often incorporate subtle "feeling cues." This version was too stark.',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2: Words and Font Style',
      screenshotUrl: v2,
      caption:
        'Cream background with a more playful sentence: "Pick three that you know."',
      changesDescription: `**Approach (Design, Advice):** To inject personality, I changed the placeholder text to a more playful, onboarding-related question, used a friendlier font, and changed the background to a soft cream color.
**Justification (Advice):** This was a research-based decision. UX studies suggest that casual, challenge-like text can improve user involvement. This substantiates the choice to use tone of voice to shape the user experience.`,
      rationaleAndTheory: `This iteration uses **Microcopy** to create a more engaging textual prompt. The choice of a friendlier font and softer colors is a direct application of **Affective Design (Norman)**, aiming for a positive emotional response and a more meaningful experience than the sterile V1.`,
      researchInsight:
        'UX studies (an advice source) suggest that casual, invitational text can increase user engagement and progression through onboarding funnels.',
      hmwQuestion:
        'How can we lead users into the personality quiz without it being too much?',
      learningOutcomes: ['Design', 'Advice', 'Analysis'],
    },
    {
      versionName: 'Version 3: Picture Framing',
      screenshotUrl: v3,
      caption:
        'Image of a young explorer with a magical bookshelf for a playful scene.',
      changesDescription: `**Approach (Design):** This iteration introduced significant visual storytelling by adding an illustration of a young explorer by a 'magic' bookshelf.
**Justification (Design):** The rationale was to visually communicate that the app is about embarking on a story-like adventure of discovery, creating a more immersive and meaningful first impression.`,
      rationaleAndTheory: `This version heavily leans on **Narrative Design Principles** and **Visual Storytelling**. The imagery serves as a **Visual Metaphor** (bookshelf = discovery) and aims to evoke curiosity, connecting with the **Octalysis framework's** 'Exploration & Curiosity' core drive.`,
      researchInsight:
        'Visual metaphors—like doors or bookshelves—can effectively create a sense of journey and anticipation, making an experience feel more engaging.',
      hmwQuestion:
        'How can we show that this app is about exploring and finding new stories?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 3.1: Text Changes and Small Fixes',
      screenshotUrl: v3_1,
      caption:
        'Changed the tagline to "Find your vibe" and added more space around the image.',
      changesDescription: `**Approach (Design, Professional Skills):** The tagline was shortened to 'Find your vibe,' based on informal user feedback that it felt more natural and modern. More white space was also added.
**Justification (Advice, Professional Skills):** The tagline change was a direct result of processing stakeholder feedback. The spacing adjustment follows design principles for visual clarity, demonstrating a professional level of refinement.`,
      rationaleAndTheory: `Tagline refinement is an aspect of **UX Writing**. The adjustment of white space improves visual composition based on **Gestalt principles** of Proximity and Common Region. Making these small, feedback-driven changes aligns with an agile and **User-Centered Design (UCD)** process.`,
      researchInsight:
        'User feedback (even informal) on V3 indicated that shorter, more colloquial taglines resonate better with younger audiences.',
      learningOutcomes: ['Design', 'Advice', 'Professional Skills', 'Analysis'],
    },
  ],
  reflectionText: `**Key Learnings (Professional Skills):** This feature taught me the importance of setting an emotional tone from the very first screen. The iterative process from a cold, functional box (V1) to a visually rich invitation (V3) demonstrated how visual storytelling can be a powerful tool for engagement, even before any core functionality is accessed.

**Challenge Encountered (Dealing with uncertainty/open-ended challenges):** Balancing visual appeal with conciseness was a significant challenge. The open-ended goal was to be "inviting." I dealt with this by testing concrete hypotheses: "Will softer colors feel more inviting?" (Yes), "Will a picture be more inviting than just text?" (Yes). This iterative testing approach helped navigate the ambiguity.

**Learning from Feedback & Stakeholders (Professional Skills & Manage & Control):** The shift in tagline in V3.1 based on informal user reactions was a key learning moment. It highlighted how processing even small pieces of direct stakeholder feedback can lead to more effective communication and a better product-market fit.

**Personal Retrospective Goal (Professional Skills - taking charge of own development):** For future initial screens, I will consider incorporating subtle animations or micro-interactions much earlier in the design process. This could further enhance the 'welcoming' feeling and perceived quality. I also plan to build a small checklist for "First Screen Essentials," including brand tone, core CTA, and emotional goal.`,
  nextStepsText:
    'Next, I plan to A/B test two tagline variations—"Find your vibe" versus "Start your journey"—with a small group of teenagers to gather quantitative data on preference. Depending on development capacity, I might also explore adding a small bookshelf-opening animation to further increase delight.',
};

const WelcomeFeaturePage = () => {
  return <FeatureComponent {...welcomeFeatureDataWithProcess} />;
};

export default WelcomeFeaturePage;
