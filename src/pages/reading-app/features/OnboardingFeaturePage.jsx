// src/pages/reading-app/features/OnboardingFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/onboarding/v1.png';
import v2 from '../../../assets/lo_images/readingapp/design/onboarding/v2.png';
import v3 from '../../../assets/lo_images/readingapp/design/onboarding/v3.png';
import v4_1 from '../../../assets/lo_images/readingapp/design/onboarding/v4-1.png';
import v4_2 from '../../../assets/lo_images/readingapp/design/onboarding/v4-2.png';
import v4 from '../../../assets/lo_images/readingapp/design/onboarding/v4.png';

export const onboardingFeatureDataWithProcess = {
  // 1. Standard Card Properties
  path: 'features/onboarding',
  label: 'User Start Flow',
  description: "Making user's trip personal.",
  relevantLearningOutcomesOverall: [
    'Analysis',
    'Advice',
    'Design',
    'Professional Skills',
  ],

  // 2.-3. Content Enhancements
  featureTitle: 'Onboarding: Crafting a Personal Welcome',
  mainHmwQuestion:
    'How might we turn the chore of preference-setting into an engaging and insightful first experience for the user?',
  featureIntro: `The goal of the onboarding process is to understand a user's reading preferences without making them feel like they're filling out a tedious form. The process was designed to be a playful, game-like quiz that uses visual cues like mood carousels and icons. This approach aims to make the onboarding feel like a fun mini-game, which provides the necessary data to personalize the user's reading journey from the very beginning.

**The Challenge & Goal (Analysis):** The primary challenge was to avoid the high drop-off rates typically associated with traditional, text-heavy onboarding forms. The goal was to design an interactive flow that would be both efficient in gathering data and emotionally engaging, thereby increasing user investment in the app from the first interaction.

**Key User Stories Addressed:**
* "As a new user, I want to tell the app my preferences quickly and easily so that I can start discovering relevant books."
* "As a new user, I want the first few screens to be fun and interesting so that I feel excited about using the app."
* "As a new user, I want to feel that the app 'gets' me so that I trust its recommendations."

**Stakeholder Considerations (Analysis):**
*   **End-Users:** Need a fast, engaging, and intuitive process.
*   **Developer (Me):** Need a reliable way to capture preference data to power the recommendation engine. The design must be feasible to implement (Proof of Concept).
*   **Teachers/Mentors:** Need to see a research-based, user-centric design process that substantiates choices.

**Initial Thoughts & Research (Analysis):** My initial analysis of popular apps (like Duolingo, Headspace) revealed a strong trend towards gamified, visually-driven onboarding. Research into user psychology suggested that reducing cognitive load and providing immediate, positive feedback are crucial for early engagement. This initial analysis provided the input for the first design iteration, which deliberately started simple to create a baseline for an iterative way of working.
`,

  designVersions: [
    {
      versionName: 'Version 1 – Old Style Genre Form',
      screenshotUrl: v1,
      caption:
        'Simple list of genres with a radio button and "Continue" button.',
      changesDescription: `**Approach (Design, Analysis):** This first version is a basic, functional screen. It directly asks the user to choose their favorite genre from a list, much like a standard web form. The purpose was to establish a functional baseline—a Proof of Concept (POC)—for the onboarding flow.
**Shortcoming (Analysis Output):** While functional, it was boring, impersonal, and felt like a chore. This approach failed to create a meaningful or playful experience, presenting a high risk of user drop-off due to its lack of engagement.`,
      rationaleAndTheory: `This version served as a baseline and intentionally did not apply deep UX theories beyond basic information architecture. Its failure, however, highlighted the need for **Affective Design (Norman)** to create a positive emotional response and demonstrated that a purely functional approach was insufficient for a product aiming for user engagement.`,
      researchInsight:
        'Analysis of user behavior shows that long, text-based forms often lead to user fatigue and abandonment. Users expect more interactive and visually stimulating experiences.',
      hmwQuestion:
        'How can we ask users about their preferences without it feeling like a test or a form?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Mood Picture Carousel',
      screenshotUrl: v2,
      caption: 'Horizontal icons that show mood scenes for picking.',
      changesDescription: `**Approach (Design, Advice):** Based on external inspiration, I replaced the list with a visual, horizontal carousel of icons representing different moods or scenes.
**Justification (Advice):** This design was influenced by successful apps like Finch and Headspace, which use mood selection to create a faster, more emotional connection. It's a research-based approach that substantiates the choice to move away from text, aiming to reduce cognitive load and increase playfulness.`,
      rationaleAndTheory: `This iteration applies the principle of **Visual Metaphor** to make abstract genres more tangible and relatable. By using images, it taps into **Affective Design (Norman)**, allowing users to make choices based on feeling rather than analytical reading. This is a step towards creating a more meaningful experience.`,
      researchInsight:
        'Competitor analysis shows that apps using visual, mood-based selection often achieve higher completion rates in their onboarding flows.',
      hmwQuestion:
        "How might we make the visual choices feel more personal and tied to the user's identity?",
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 3 – Symbols from Fandoms',
      screenshotUrl: v3,
      caption: 'Icons of pop culture things to let user feel their identity.',
      changesDescription: `**Approach (Design):** The icons were changed to illustrations of recognizable pop-culture items (e.g., a Pokéball, a ninja headband) to evoke nostalgia and a sense of identity.
**Justification (Design):** The rationale is that users will form a stronger connection with items they already have a positive association with, making the selection process feel more like a declaration of identity than a preference setting.`,
      rationaleAndTheory: `This design leverages the **Psychology of Nostalgia** and **Identity Signaling**. It aligns with creating meaningful experiences by connecting the app to the user's existing world. This also touches on the 'Epic Meaning & Calling' core drive from the **Octalysis framework**, as users align themselves with a larger cultural context.`,
      researchInsight:
        'Users feel a stronger sense of belonging and trust when an app reflects their cultural touchstones and personal memories.',
      hmwQuestion:
        'The icons are good, but the *action* is still a simple selection. How can we make the *process* itself feel more like a game?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4 – Vibe Picker Like a Game',
      screenshotUrl: v4,
      caption:
        'User picks 3 "vibe" items, with a progress indicator down below.',
      changesDescription: `**Approach (Design):** The interaction was reframed as a distinct task: "Pick 3 vibes." A progress indicator was added to show the user how many choices are left.
**Justification (Design):** This introduces a clear goal and feedback loop, which are core components of game mechanics. It gives the user a simple, achievable challenge, increasing their engagement.`,
      rationaleAndTheory: `This version directly applies **Gamification** principles by introducing rules ('Pick 3') and feedback (the progress indicator). It transforms the task into a mini-game, increasing user motivation and engagement by tapping into the **Octalysis framework's** 'Development & Accomplishment' core drive.`,
      researchInsight:
        'Research shows that providing clear, short-term goals (like "pick three") significantly increases task completion rates compared to open-ended selection.',
      hmwQuestion:
        'Now that the choice is made, how can we confirm it in a way that feels solid but not disruptive, dealing with the uncertainty of a final choice?',
      learningOutcomes: ['Design'],
    },
    {
      versionName: 'Version 4.1 – Popup for Confirmation',
      screenshotUrl: v4_1,
      caption: 'Popup asks "Are you sure?" before user sends their answers.',
      changesDescription: `**Approach (Design):** A simple confirmation modal was added after the user selects their three items, before finalizing the onboarding process.
**Justification (Professional Skills):** This is a standard UX best practice that gives users an "out," reducing errors and increasing their sense of control. It's a small but important step in professional execution.`,
      rationaleAndTheory: `This applies **Nielsen's Heuristic** of "User Control and Freedom" by providing a clear exit and a chance to correct mistakes. While simple, it's a key part of robust, user-friendly design that builds trust and demonstrates a professional approach to handling user input.`,
      researchInsight:
        'Usability studies consistently show that confirmation dialogs for significant actions reduce user errors and anxiety.',
      hmwQuestion:
        'The flow is now functionally complete. How can we refine the visual execution to feel more polished and professional?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 4.2 – Polish & Making it Easy to Use',
      screenshotUrl: v4_2,
      caption:
        'Better space between cards, clearer buttons, good contrast for easy reading.',
      changesDescription: `**Approach (Design):** Based on peer feedback, I refined the visual details: improved spacing between the selection cards, adjusted button colors for better contrast, and ensured consistent alignment.
**Justification (Professional Skills):** This stage focuses on the craft and execution. A visually polished interface feels more trustworthy and professional, directly impacting user perception of the app's quality.`,
      rationaleAndTheory: `This final polish applies fundamental **visual design principles** and **Gestalt principles** (like Proximity and Common Region) to improve clarity and reduce visual noise. It also addresses **Accessibility (WCAG)** concerns by improving contrast, demonstrating a holistic and professional design process.`,
      researchInsight:
        'Peer feedback identified minor inconsistencies in spacing and contrast. Addressing these small details significantly improves the overall perceived quality and usability of the interface.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],
  reflectionText: `**Key Learnings (Professional Skills):** Through this feature's development, I learned how critical the first interaction is for setting the user's perception. The iterative process, moving from a basic form to a gamified quiz, showed that even small details in interaction design can transform a chore into a delightful experience. The key was to shift the focus from 'gathering data' to 'providing a fun experience'.

**Challenge Encountered (Dealing with uncertainty/open-ended challenges):** The biggest challenge was the open-ended question of "what makes onboarding fun?" There wasn't a single right answer. I dealt with this uncertainty by breaking the problem down: first focusing on reducing friction (V2), then on emotional connection (V3), and finally on interaction mechanics (V4). This iterative approach made the problem manageable.

**Learning from Feedback & Stakeholders (Professional Skills & Manage & Control):** Processing feedback from peers was crucial for the final polish (V4.2). Initial versions were functionally okay, but feedback highlighted small visual inconsistencies that I had overlooked. This taught me to actively seek and integrate external perspectives to improve the quality of the end product.

**Personal Retrospective Goal (Professional Skills - taking charge of own development):** For future projects, I will create a small 'Design Principles' document at the start of a feature. For this feature, it would have been "1. Feel like a game, not a form. 2. Be visual, not texty. 3. Finish in under 30 seconds." This would provide a stronger filter for early ideas and speed up the iterative process.
`,
};

const OnboardingFeaturePage = () => {
  return <FeatureComponent {...onboardingFeatureDataWithProcess} />;
};

export default OnboardingFeaturePage;
