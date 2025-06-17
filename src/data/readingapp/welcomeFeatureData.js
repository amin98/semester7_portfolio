import v1 from '../../assets/lo_images/readingapp/design/welcome/v1.png';
import v2 from '../../assets/lo_images/readingapp/design/welcome/v2.png';
import v3_1 from '../../assets/lo_images/readingapp/design/welcome/v3-1.png';
import v3 from '../../assets/lo_images/readingapp/design/welcome/v3.png';

export const welcomeFeatureData = {
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

  // 2. Feature-Specific Content
  featureTitle: 'Welcome Screen: Setting an Inviting Tone',

  // --- Concise Intro Content ---
  summary: `
The first screen a user sees is a critical first impression. The goal was to design an inviting "nice hello" that subtly introduces the app's personality, making the user feel welcomed and clear on how to proceed. This addresses the core user need to feel good about starting and to understand what to do next without confusion.
  `,
  processAndAnalysis: `
**The Challenge & Goal:** My initial **[Competitive Analysis](/reading-app/analysis/competitive-analysis)** showed a market gap for an app with a strong emotional first impression. The challenge was to design a screen that provides this, transforming a simple entry point into an engaging invitation.
  `,
  mainHmwQuestion:
    'How might we make the first screen of the app feel like a warm, personal invitation rather than a cold, functional machine?',

  // --- REFACTORED DESIGN VERSIONS ---
  designVersions: [
    {
      versionName: 'Version 1: Basic Wireframe',
      screenshotUrl: v1,
      caption:
        'Gray mockup with title in the middle and a simple "Get Started" button.',
      approach:
        'This first version was a minimal wireframe showing only the essential components: a title and a button. The purpose was to establish the fundamental layout as a Proof of Concept (POC).',
      justification: `The analysis of this version was that while functional, it completely failed to meet the 'welcoming' goal identified in the **[Problem Definition](/reading-app/analysis/problem-definition)**. It felt cold, impersonal, and lacked any brand personality.`,
      theoreticalGrounding: `This version served as a baseline. Its identified shortcoming—a lack of emotional engagement—substantiates the choice to iterate towards a more visually rich design, highlighting the need for **Affective Design (Norman)**.`,
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 2: Words and Font Style',
      screenshotUrl: v2,
      caption: 'Cream background with a more playful sentence.',
      approach:
        'To inject personality, I changed the placeholder text to a more playful, onboarding-related question, used a friendlier font, and changed the background to a soft cream color.',
      justification: `This was a research-based decision. One of my **[Sub-questions](/reading-app/analysis/research-questions)** explored how to make content accessible. UX studies suggest that casual, challenge-like text can improve user involvement and lower the barrier to entry.`,
      theoreticalGrounding: `This iteration uses **Microcopy** to create a more engaging textual prompt. The choice of a friendlier font and softer colors is a direct application of **Affective Design (Norman)** to create a positive emotional response.`,
      hmwQuestion:
        'How can we lead users into the personality quiz without it being too much?',
      learningOutcomes: ['Design', 'Advice', 'Analysis'],
    },
    {
      versionName: 'Version 3: Picture Framing',
      screenshotUrl: v3,
      caption: 'Image of a young explorer with a magical bookshelf.',
      approach: `This iteration introduced significant visual storytelling by adding an illustration of a young explorer by a 'magic' bookshelf.`,
      justification: `The rationale was to visually address the **[Design Challenge](/reading-app/analysis/research-questions)** of making reading feel like an adventure. It aims to create a more immersive and meaningful first impression than competitors identified in the **[Competitive Analysis](/reading-app/analysis/competitive-analysis)**.`,
      theoreticalGrounding: `This version heavily leans on **Narrative Design Principles**. The imagery serves as a **Visual Metaphor** (bookshelf = discovery) and aims to evoke curiosity, connecting with the **Octalysis framework's** 'Exploration & Curiosity' core drive.`,
      hmwQuestion:
        'How can we show that this app is about exploring and finding new stories?',
      learningOutcomes: ['Design', 'Analysis'],
    },
    {
      versionName: 'Version 3.1: Refinements & Feedback',
      screenshotUrl: v3_1,
      caption: 'Changed the tagline to "Find your vibe" and added more space.',
      approach: `The tagline was shortened to 'Find your vibe,' based on informal user feedback. More white space was also added around the image for better visual balance.`,
      justification: `This change was a direct result of processing stakeholder feedback, a key part of my **[Testing Strategy](/reading-app/management/testing)**. The more modern tagline is also better suited for the **[Target Audience](/reading-app/analysis/target-audience)**.`,
      theoreticalGrounding: `Tagline refinement is an aspect of **UX Writing**. Increased white space improves visual composition based on **Gestalt principles** of Proximity. Making these small, feedback-driven changes aligns with an agile and **User-Centered Design (UCD)** process.`,
      learningOutcomes: ['Design', 'Advice', 'Professional Skills', 'Analysis'],
    },
  ],

  reflectionText: `
  **Key Learning:** This feature taught me that for a welcome screen, emotional tone is just as important as functionality. The iterative process from a cold wireframe (V1) to a visually rich invitation (V3) proved that small choices in color, imagery, and microcopy have a massive impact on a user's first impression.
  
  **Challenge & Response:** The main challenge was navigating the ambiguity of the "inviting" goal. I addressed this by creating concrete design hypotheses and testing them through iteration. For example, I tested if an illustration was more inviting than just text, and the result directly informed the final design.
  
  **Future Action:** Based on direct feedback about the tagline, my next step for a similar feature would be to conduct informal user testing on critical copy much earlier in the process, even with simple text mockups, to validate assumptions before they are fully designed.
    `,

 };
