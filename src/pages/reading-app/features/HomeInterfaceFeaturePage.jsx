// src/pages/reading-app/features/HomeInterfaceFeaturePage.jsx
import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';

import v1 from '../../../assets/lo_images/readingapp/design/home/v1.png';
import v2_1 from '../../../assets/lo_images/readingapp/design/home/v2-1.png';
import v2_2 from '../../../assets/lo_images/readingapp/design/home/v2-2.png';
import v2 from '../../../assets/lo_images/readingapp/design/home/v2.png';

export const homeInterfaceFeatureDataWithProcess = {
  // 1. Standard Card Properties
  path: 'features/home-interface',
  label: 'Home Screen / Main Page',
  description: 'Place for user to do things.',
  relevantLearningOutcomesOverall: [
    'Design',
    'Analysis',
    'Advice',
    'Professional Skills',
    'Realisation',
  ],

  // 2.-3. Content Enhancements
  featureTitle: 'Home Interface: A Dashboard for Daily Engagement',
  mainHmwQuestion:
    'How might we design a home screen that not only serves as a functional hub but also creates a compelling reason for users to return every day?',
  featureIntro: `The home screen is the user's main base of operations after their initial onboarding. My vision was to elevate it from a simple content list to a dynamic, game-like dashboard. By incorporating elements like reading streaks, daily goals, experience points (XP), and personalized story recommendations, the goal was to make the app feel both helpful and fun—transforming the routine act of opening the app into a small, rewarding experience.

**The Challenge & Goal (Analysis):** The central challenge was to present a rich set of features without overwhelming the user. The screen needed to provide quick access to core tasks while also showcasing motivational systems. The goal was to create an interface that felt energizing and rewarding, not cluttered, thereby fostering a habit of daily use.

**Key User Stories Addressed:**
* "As a returning user, I want to see my current progress at a glance so that I feel motivated to continue."
* "As a user, I want to have a clear 'next step' or daily challenge so that I know what to do without thinking too much."
* "As a user, I want the home screen to feel alive and personal so that I enjoy coming back."

**Stakeholder Considerations (Analysis):**
*   **End-Users:** Need a clear, motivating, and easy-to-navigate home base.
*   **Developer (Me):** The dashboard must be technically performant, loading user data (like streaks and XP) quickly from the backend (Realisation). The design must be a feasible POC.
*   **Teachers/Mentors:** Expect a design that is substantiated by research into user engagement and retention strategies.

**Initial Thoughts & Research (Analysis):** My initial analysis of successful mobile apps, particularly in the language-learning and fitness spaces (e.g., Duolingo, Strava), pointed to the power of streaks, levels, and daily goals. This research-based input was foundational. I decided on an iterative way of working, starting with a very simple layout to establish a baseline before layering in these more complex motivational mechanics.
`,

  designVersions: [
    {
      versionName: 'Version 1 – Simple Book List',
      screenshotUrl: v1,
      caption:
        'Wireframe with easy list of current book, streak, and daily challenge.',
      changesDescription: `**Approach (Design, Analysis):** This first version was a text-only wireframe showing the most basic information: the book currently being read, a streak counter, and a daily prompt.
**Shortcoming (Analysis Output):** The analysis of this version concluded that while it was clear, it completely lacked an emotional hook. It was functional but felt sterile and uninspiring, failing to create the desired "fun" or "game-like" feeling.`,
      rationaleAndTheory: `This design served as a functional **Proof of Concept (POC)** but did not apply any significant motivational theories. Its failure to engage highlighted the importance of **Aesthetics** and **Affective Design (Norman)** in creating a rewarding user experience. It lacked any sense of playfulness.`,
      researchInsight:
        'Analysis of user behavior shows that users need clear tasks, but without a sense of reward or visual feedback, daily retention is low.',
      hmwQuestion:
        'How can we make the home screen feel rewarding without making it cluttered or confusing?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2 – Dashboard Like a Game',
      screenshotUrl: v2,
      caption: 'Dashboard with XP bar, streak badge, and daily story idea.',
      changesDescription: `**Approach (Design, Advice):** I introduced explicit game-like elements: a level-up XP bar, a stylized streak badge, and a "Story of the Day" recommendation card. The visual language became more playful and illustrative.
**Justification (Advice):** This approach is directly substantiated by research into **Gamification**. The advice from countless case studies is that elements like points, badges, and leaderboards (or in this case, personal progress) are effective at driving engagement, especially with younger audiences.`,
      rationaleAndTheory: `This version directly applies **Gamification** theory by incorporating multiple core drives from the **Octalysis Framework**, including 'Development & Accomplishment' (XP bar) and 'Scarcity & Impatience' (daily story). This aims to create a more meaningful and engaging experience.`,
      researchInsight:
        'Gamification features like XP bars and daily streaks are proven to increase user retention and create a habit-forming product loop.',
      hmwQuestion:
        'The elements are now in place, but is their visual hierarchy clear enough for users to understand them instantly?',
      learningOutcomes: ['Design', 'Advice'],
    },
    {
      versionName: 'Version 2.1 – Better XP & Streak Look',
      screenshotUrl: v2_1,
      caption: 'Moved XP and coin icons for better looking order.',
      changesDescription: `**Approach (Design):** I repositioned the XP bar and streak icon to the top for immediate visibility, differentiated the size of badges, and used color-coding to make progress bars clearer.
**Justification (Professional Skills):** This demonstrates an iterative refinement process based on design principles. Improving the visual hierarchy is a key professional skill that makes an interface more intuitive.`,
      rationaleAndTheory: `This work applies **Gestalt Principles** like **Proximity** and **Similarity** to group related items and establish a clear visual flow. The use of color and size to create emphasis follows fundamental **visual design principles** for creating a clear information hierarchy.`,
      researchInsight:
        'Users need a clear visual hierarchy to quickly understand feedback systems. If progress indicators are confusingly placed, their motivational impact is diminished.',
      hmwQuestion:
        'The hierarchy is better, but does the overall screen feel cohesive and polished? How can we improve the micro-details?',
      learningOutcomes: ['Design', 'Professional Skills'],
    },
    {
      versionName: 'Version 2.2 – Fix Contrast & Spacing',
      screenshotUrl: v2_2,
      caption: 'Make outlines, padding, and icon sizes better for clarity.',
      changesDescription: `**Approach (Design):** I meticulously adjusted the padding around cards, added subtle shadows for depth, and ensured consistent icon alignment.
**Justification (Professional Skills):** This final polish is about craftsmanship. Small details in spacing and contrast have a large impact on the perceived quality and professionalism of the app. It also addresses potential accessibility issues.`,
      rationaleAndTheory: `This applies principles of **Accessibility (WCAG)** by checking contrast, and uses **Grid Systems** and consistent spacing to create a visually harmonious and professional layout. This substantiates the choice to spend time on refinement, as it builds user trust.`,
      researchInsight:
        'Minor adjustments in contrast and spacing significantly improve readability and reduce cognitive load, especially on mobile devices with varying screen quality.',
      hmwQuestion:
        'How can we make visuals better so home is easy and nice to look at?',
      learningOutcomes: ['Design'],
    },
  ],

  reflectionText: `**Key Learnings (Professional Skills):** The key learning from this feature was the importance of tangible rewards in the UI. The initial, purely informational layout (V1) was functional but lifeless. The moment I introduced visual feedback systems like XP bars and streak badges (V2), the screen came alive. It taught me that for an engagement-focused app, every visit must feel like a small victory for the user.

**Challenge Encountered (Dealing with uncertainty/open-ended challenges):** The challenge was the open-ended problem of "what makes a dashboard engaging?" I dealt with the uncertainty by turning to external research (Advice) on gamification. Instead of inventing a system from scratch, I adapted proven mechanics, which provided a solid foundation and reduced the uncertainty of the design process.

**Learning from Feedback & Stakeholders (Professional Skills & Manage & Control):** Processing peer feedback on visual hierarchy was crucial. My initial layout in V2 had all the right elements, but feedback correctly pointed out that their placement wasn't optimal. This led to the V2.1 iteration, teaching me that the arrangement of elements is just as important as the elements themselves.

**Personal Retrospective Goal (Professional Skills - taking charge of own development):** For future dashboard designs, I will start by creating a "Motivation Matrix." I'll map each UI element to a specific user motivation (e.g., "XP Bar -> Accomplishment," "Daily Story -> Discovery"). This will ensure every component has a clear purpose in the engagement strategy and prevent adding features that don't serve a motivational goal.
`,

  implementationPlanText: `For the technical realisation, I will use Flutter's ListView to vertically stack the dashboard sections (current book, daily challenge, recommendations). User-specific data like XP and streaks will be fetched from Firebase in real-time. Each card (e.g., book card, challenge card) will be a reusable widget to ensure clean, maintainable code, which is a key aspect of Realisation.`,

  nextStepsText: `• Test the "Story of the Day" feature against a multi-story carousel to see which drives more clicks.
• Add a subtle, rewarding animation for when a user levels up their XP.
• Design a dedicated "Achievements" area to display badges earned.
• Conduct a full accessibility check, focusing on contrast ratios and screen reader compatibility for all interactive elements.`,
};

const HomeInterfaceFeaturePage = () => {
  return <FeatureComponent {...homeInterfaceFeatureDataWithProcess} />;
};

export default HomeInterfaceFeaturePage;
