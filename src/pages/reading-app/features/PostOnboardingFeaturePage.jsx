// src/pages/reading-app/features/PostOnboardingFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1-4.png';
import v1 from '../../../assets/lo_images/readingapp/design/post_onboarding/v1.png';
import v2_4 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-4.png';
import v2_5 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2-5.png';
import v2 from '../../../assets/lo_images/readingapp/design/post_onboarding/v2.png';

export const postOnboardingFeatureDataWithProcess = {
  // 1. Standard Card Properties
  path: 'features/post-onboarding',
  label: 'After Start Experience',
  description: 'Helping users to first success.',
  relevantLearningOutcomesOverall: [
    'Design',
    'Analysis',
    'Advice',
    'Professional Skills',
    'Realisation',
  ],

  // 2.-3. Content Enhancements
  featureTitle: 'Post-Onboarding: Guiding to First Success',
  mainHmwQuestion:
    'How might we seamlessly guide a user from the end of onboarding to their first moment of delight in the app?',
  featureIntro: `Once a user completes onboarding, the next screen is critical for maintaining momentum. The objective is to bridge the gap between setup and action, immediately guiding the user to a meaningful activity. This feature focuses on creating a clear, motivating, and adventurous transition that avoids the common pitfall of dropping a user into a confusing, unfocused hub.

**The Challenge & Goal (Analysis):** The core challenge is the "Paradox of Choice." A generic dashboard with too many options can cause decision paralysis and disengagement. The goal was to design a post-onboarding screen that provides a single, compelling call to action, making the user's next step obvious and exciting.

**Key User Stories Addressed:**
* "As a user who just finished setup, I want to know what to do next so that I don't feel lost."
* "As a user, I want my first recommended story to feel relevant to my choices so that I trust the app."
* "As a user, I want to feel a sense of progress and excitement so that I am motivated to continue."

**Stakeholder Considerations (Analysis):**
*   **End-Users:** Want a clear path forward and a rewarding first experience.
*   **Developer (Me):** Needs to ensure the first interaction is sticky enough to encourage a second session. The solution must be technically feasible (POC).
*   **Teachers/Mentors:** Expect to see a design that logically follows the onboarding and is substantiated by research or UX principles.

**Initial Thoughts & Research (Analysis):** My initial analysis focused on the concept of "Time to First Value." Research suggests the sooner a user experiences the core benefit of an app, the more likely they are to be retained. My first thought was a standard dashboard, but analysis of this approach revealed its weakness in guiding the user. This informed the iterative process, pushing me to find a more focused, narrative-driven solution as input for the next iteration.
`,

  designVersions: [
    {
      versionName: 'Version 1.0 – Basic Dashboard Start Point',
      screenshotUrl: v1,
      caption:
        'Wireframe shows a simple dashboard with Library, Quests, and Explore tabs.',
      changesDescription: `**Approach (Design, Analysis):** The initial design was a standard tab-based hub with three main sections: Library, Quests, and Explore. This was a safe, conventional layout.
**Shortcoming (Analysis Output):** Analysis showed this design offered too many choices with no clear hierarchy. It answered "what can I do?" but failed to answer "what should I do next?", creating a point of friction.`,
      rationaleAndTheory: `This version represents a basic **Information Architecture** approach but fails to consider **Hick's Law**, which states that the time it takes to make a decision increases with the number and complexity of choices. The lack of a clear call to action (CTA) creates a poor **Fitt's Law** application for the desired next step.`,
      researchInsight:
        'User retention data shows a significant drop-off when users are presented with a generic, unfocused hub immediately after onboarding.',
      hmwQuestion:
        'How can we structure the page to guide the user towards one specific, high-value action?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 1.3 – Story-Like Prompt', // Consolidating minor steps
      screenshotUrl: v1_4,
      caption:
        'One single prompt: "Do you want a guide for your first story?" to show user the way.',
      changesDescription: `**Approach (Design, Advice):** After trying clearer buttons which still felt like a menu, the design shifted dramatically. It removed the hub and presented a single, direct question: "Do you want a guide for your first story?"
**Justification (Advice):** This change was a direct response to the analysis of V1.0's weakness. It's a research-based decision to reduce options and frame the next step as a narrative choice, making the experience feel like a quest.`,
      rationaleAndTheory: `This design directly addresses the "Paradox of Choice" by offering a binary choice. It uses principles of **Narrative Design** to create engagement and frames the interaction as a personalized invitation rather than a command, which aligns with **Self-Determination Theory** by supporting user autonomy.`,
      researchInsight:
        'Framing actions as questions or invitations ("Would you like to...?") often has higher engagement than imperative commands ("Start now").',
      hmwQuestion:
        'The prompt is good, but how do we make the *outcome* of that prompt feel instantly personal and rewarding?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.0 – Themed Story Introduction',
      screenshotUrl: v2,
      caption: "Full-screen themed picture that matches user's quiz answers.",
      changesDescription: `**Approach (Design, Advice):** Instead of a generic screen, the user is now shown a full-screen, evocative image that directly corresponds to the genre/vibe they selected during onboarding.
**Justification (Advice):** This decision is based on the principle of emotional design. A powerful visual that reflects the user's choice creates an immediate "wow" moment and confirms that the app has "listened."`,
      rationaleAndTheory: `This heavily utilizes **Affective Design (Norman)** to create a strong, positive emotional response. It provides immediate, personalized visual feedback, which is a powerful tool for engagement and reinforces the user's sense of making a meaningful choice. This is a clear method to create a meaningful experience.`,
      researchInsight:
        'Personalized visuals are highly effective at creating an emotional connection and making users feel seen and understood by a product.',
      hmwQuestion:
        'The image is great for setting a theme, but how do we present the actual story choices within this theme?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.3 – Story Choice Grid',
      screenshotUrl: v2_4,
      caption: 'Grid layout where user picks one story from a themed group.',
      changesDescription: `**Approach (Design):** Within the themed environment, the user is presented with a clean grid of story covers to choose from. The focus is on the visual appeal of the covers.
**Justification (Design, Realisation):** A grid layout is a highly scannable and efficient way to present visual options. The technical realisation involves ensuring the images load quickly and the touch targets are appropriately sized for a good mobile experience.`,
      rationaleAndTheory: `The grid layout applies **Gestalt Principles** (specifically Proximity and Similarity) to group related items. It allows for quick visual scanning and comparison. This design substantiates the choice of a visual-first approach, prioritizing aesthetics and quick recognition over dense text.`,
      researchInsight:
        'For visually-driven content like book covers, grid layouts are more effective for browsing and discovery than simple lists.',
      hmwQuestion:
        "The flow is almost perfect. What is the final step to confirm the user's choice and launch them into the story with confidence?",
      learningOutcomes: ['Design', 'Advice', 'Realisation'],
    },
    {
      versionName: 'Version 2.4 – Final Confirmation Box',
      screenshotUrl: v2_5,
      caption: 'Box asking "Do you like this vibe?" before going into story.',
      changesDescription: `**Approach (Design):** A final confirmation modal appears after the user selects a story, asking "Do you like this vibe?" before transitioning to the reader.
**Justification (Professional Skills):** This demonstrates a professional, user-centric approach. It gives the user a final moment of control and a clear point of transition, preventing accidental clicks and managing expectations.`,
      rationaleAndTheory: `This again applies **Nielsen's Heuristic** of "User Control and Freedom." The confirmation acts as a final handshake, building trust and ensuring the user feels in command of their journey. It's a key micro-interaction for a polished and robust user experience.`,
      researchInsight:
        'A final confirmation step before a major transition (like starting a story) can increase user satisfaction by providing a sense of closure and control.',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
  ],

  reflectionText: `**Key Learnings (Professional Skills):** The biggest lesson from this feature was the power of a single, focused call to action. The initial dashboard (V1) was a classic design mistake, offering choice without guidance. The iterative process of stripping away options to focus on a single, narrative prompt (V1.3) and then making that prompt visually rewarding (V2.0) was a powerful demonstration of "less is more."

**Challenge Encountered (Dealing with uncertainty/open-ended challenges):** The challenge was how to avoid a generic-feeling screen. I dealt with this uncertainty by focusing on the user's emotional state. Instead of asking "what should this screen do?", I asked "what should this screen make the user *feel*?". This shifted my thinking from functionality to emotion, leading to the breakthrough of the themed, full-screen visual.

**Learning from Feedback & Stakeholders (Professional Skills & Manage & Control):** Informal feedback on early wireframes confirmed my analysis that the dashboard was confusing. Peers noted they "didn't know where to click first." This feedback was crucial for validating the decision to pivot to a more focused, single-action design. It reinforced the importance of processing feedback early in the iterative process.

**Personal Retrospective Goal (Professional Skills - taking charge of own development):** In the future, for any transitional screen like this, my first step will be to define the "Single Most Important Action" for the user. I will write this down and use it as a guiding principle to prevent feature bloat and maintain focus throughout the design iterations.`,

  implementationPlanText: `I will build this flow in Flutter using animated transitions (e.g., Hero animations for the selected story cover) and manage the state with Riverpod to pass the user's onboarding choices. The themed background will be a Stack widget with a dynamic image. I estimate this will take approximately 1.5 days to develop and polish, with a focus on smooth performance.`,

  nextStepsText: `Next, I plan to run a simple A/B test: one version that immediately presents the first chapter of the top-recommended story vs. the current version that offers a choice grid. This will provide data on whether users prefer being directed or having a final moment of choice.`,
};

const PostOnboardingFeaturePage = () => {
  return <FeatureComponent {...postOnboardingFeatureDataWithProcess} />;
};

export default PostOnboardingFeaturePage;
