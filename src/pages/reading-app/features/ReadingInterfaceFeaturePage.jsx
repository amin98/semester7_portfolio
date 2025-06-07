// src/pages/reading-app/features/ReadingInterfaceFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/reading_interface/v1.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/reading_interface/v2-1.png';
import v2 from '../../../assets/lo_images/readingapp/design/reading_interface/v2.png';

export const readingInterfaceFeatureDataWithProcess = {
  // 1. Standard Card Properties
  path: 'features/reading-interface',
  label: 'Reading Screen & Buttons',
  description: 'The main reading part.',
  relevantLearningOutcomesOverall: [
    'Design',
    'Advice',
    'Professional Skills',
    'Realisation',
  ],

  // 2.-3. Content Enhancements
  featureTitle: 'Reading Interface: Focus & Gentle Nudges',
  mainHmwQuestion:
    'How might we design a reading screen that maximizes immersion while providing subtle, motivating cues to encourage progress?',
  featureIntro: `The reading interface is the heart of the app, where users engage with the stories. The primary design goal was to create a sanctuary for reading—a clean, distraction-free layout that promotes deep focus. Simultaneously, it needed to incorporate gentle nudges to motivate users and guide them through the chapters without breaking the narrative spell.

**The Challenge & Goal (Analysis):** The core challenge was balancing minimalism with motivation. A screen that is too stark can feel sterile, while a screen with too many UI elements can be distracting. The goal was to find the perfect equilibrium where the interface is invisible when not needed but provides clear guidance and a sense of accomplishment at key moments.

**Key User Stories Addressed:**
* "As a reader, I want to be able to focus completely on the text without distracting buttons or menus."
* "As a reader, I want to easily know how far I am in a chapter and in the whole story so I feel a sense of progress."
* "As a reader, I want a comfortable and visually pleasing environment so that I can read for a long time without strain."

**Stakeholder Considerations (Analysis):**
*   **End-Users:** Need a highly readable, comfortable, and immersive experience.
*   **Developer (Me):** The design must be technically robust, supporting various text lengths and screen sizes. The implementation needs to be performant (Realisation).
*   **Teachers/Mentors:** Expect to see a design that is grounded in principles of readability, accessibility, and user engagement.

**Initial Thoughts & Research (Analysis):** My initial analysis drew from established e-reader apps (like Kindle, Apple Books) and articles on digital typography. Research confirmed that serif fonts, generous line spacing, and high contrast are crucial for long-form reading. This analysis provided the foundational input for the first iteration, which focused on getting the core reading experience right before adding motivational layers. This iterative way of working ensured the foundation was solid.
`,

  designVersions: [
    {
      versionName: 'Version 1 – Basic Simple Reader',
      screenshotUrl: v1,
      caption: 'Simple view that shows only text and basic page buttons.',
      changesDescription: `**Approach (Design):** The first version was a minimalist implementation of a chapter reader. It used a serif font, comfortable line spacing, and only essential navigation buttons.
**Justification (Design):** The goal was to establish a clean, uncluttered baseline—a Proof of Concept (POC) for the core functionality. By removing all non-essential elements, the focus was purely on readability and creating a calm reading space.`,
      rationaleAndTheory: `This design prioritizes **Readability** and **Legibility**, fundamental principles of **Typography**. The minimalist approach is an application of the "less is more" philosophy, aiming to reduce cognitive load and allow the user to enter a state of **Flow (Csikszentmihalyi)** with the text.`,
      researchInsight:
        'Academic research on digital reading confirms that a clean interface with a high-quality serif typeface significantly improves reading speed and comprehension.',
      hmwQuestion:
        'The space is calm, but it feels static. How can we introduce a sense of progress without creating a distraction?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Light Progress & Motivation',
      screenshotUrl: v2,
      caption: 'Added a thin progress bar and a small "Continue" button.',
      changesDescription: `**Approach (Design, Advice):** I introduced a thin, subtle progress bar at the top and a persistent "Continue" button at the bottom. A small icon was also added to represent the streak/energy system.
**Justification (Advice):** This was a research-based decision. Studies on learning and productivity apps show that visible progress indicators can significantly boost user motivation and task completion. This addition aims to add a light layer of playfulness and goal-orientation.`,
      rationaleAndTheory: `This iteration introduces **Gamification** elements in a subtle way. The progress bar provides a constant feedback loop, tapping into the **Goal-Gradient Effect**, where motivation increases as one gets closer to a goal. It aims to enhance engagement without breaking the immersive experience.`,
      researchInsight:
        'Subtle, non-intrusive progress bars are shown to increase completion rates in long-form content, as they provide a sense of achievement.',
      hmwQuestion:
        'The elements are there, but do they feel integrated and clear enough for the user to understand their purpose at a glance?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Clearer Navigation Signs',
      screenshotUrl: v2_1,
      caption: 'Chapter marks, bigger "Continue" button, and more spacing.',
      changesDescription: `**Approach (Design):** Based on usability feedback, I made the "Continue" button more prominent, added explicit chapter markers ("Chapter 3 of 10"), and increased the padding around all UI elements.
**Justification (Professional Skills):** This is a direct response to user feedback, demonstrating a professional, user-centric approach. The changes improve clarity and usability, making the interface feel more intuitive and less ambiguous.`,
      rationaleAndTheory: `These refinements are based on **Nielsen's Heuristic** of "Visibility of System Status," ensuring the user always knows where they are. Increasing the size of the CTA button applies **Fitt's Law**, making it easier to tap. These adjustments demonstrate a commitment to a polished and meaningful experience.`,
      researchInsight:
        'User testing revealed that while users liked the progress bar, they felt a lack of context. Explicit chapter numbers provided the clarity they needed to feel fully in control.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],

  reflectionText: `**Key Learnings (Professional Skills):** Developing the reading screen taught me the profound impact of micro-details on user experience. The iterative process from a sterile text box (V1) to a gently motivating space (V2.1) highlighted that in a reading context, every pixel matters. The challenge wasn't just what to add, but what to leave out to protect the user's focus.

**Challenge Encountered (Dealing with uncertainty/open-ended challenges):** The main challenge was the inherent conflict between "immersion" and "interaction." How do you show progress without pulling the user out of the story? I addressed this by treating UI elements as "whispers" rather than "shouts." The progress bar is thin, the button is present but not flashy. This "gentle UI" approach was my solution to the open-ended design problem.

**Learning from Feedback & Stakeholders (Professional Skills & Manage & Control):** Processing feedback was essential. When early testers mentioned feeling "a bit lost" in V2, it was a critical insight. My initial design was too subtle. I learned to balance my aesthetic preference for minimalism with the user's need for clear status indicators, which led directly to the more effective V2.1.

**Personal Retrospective Goal (Professional Skills - taking charge of own development):** In future UI design, especially for content-heavy screens, I will create a "Distraction Budget." I'll list every single UI element and assign it a "distraction cost." This will force me to be more disciplined and intentional about what earns a place on the screen, ensuring the core purpose—in this case, reading—is always protected.
`,

  implementationPlanText: `I will build this screen in Flutter using a PageView for easy horizontal chapter swipes. A stateful widget will manage the current chapter index and update the progress bar. User preferences for font size and theme (light/dark) will be handled via a settings provider. The technical realisation will involve significant testing for readability and performance across various devices to ensure a smooth experience. This is estimated to take 2-3 days for robust implementation and polish.`,

  nextStepsText: `Next, I plan to A/B test a "focus mode" where all UI elements fade out during reading and reappear on tap. I will also gather more extensive peer feedback on font choices and theme options (light vs. dark vs. sepia) to ensure maximum comfort for long reading sessions, addressing accessibility.`,
};

const ReadingInterfaceFeaturePage = () => {
  return <FeatureComponent {...readingInterfaceFeatureDataWithProcess} />;
};

export default ReadingInterfaceFeaturePage;
