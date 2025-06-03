import { Link } from 'react-router-dom';
import demoVideo from '../../assets/videos/demo_video.mp4';
import swiftLogo from '../../assets/swift.png';
import swiftuiLogo from '../../assets/swiftui.png';
import xcodeLogo from '../../assets/xcode.png';

const Implementation = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          Implementation & Realization
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          This section details the technical realization of the Reading App,
          including the development process, technology stack, and links to the
          source code. All choices are motivated based on the goals of the app,
          learning outcomes, and project constraints.
        </p>
      </header>

      <section className="mb-12">
  <h2 className="text-3xl font-semibold text-textPrimary mb-6">
    Application Showcase
  </h2>
  <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
    <div className="flex flex-col justify-between lg:flex-row ">
      {/* Left: Text & Bullet List */}
      <div className=" space-y-4">
        <p className="text-textSecondary">
          The Reading App is developed natively in Swift and SwiftUI, targeting iOS devices.
          It currently includes a complete onboarding flow (age gate, personality quiz, genre preferences),
          a dynamic reading interface, and a prototype recommendation engine.
        </p>
        <ul className="list-disc list-inside text-textSecondary space-y-2">
          <li>
            <strong>Onboarding:</strong> Personalized entry using BFI-10
            personality test and genre selection.
          </li>
          <li>
            <strong>Reader UI:</strong> Minimalist, distraction-free reader
            with font scaling, progress tracking, and haptics.
          </li>
          <li>
            <strong>Gamification:</strong> Streak system, subtle animations,
            and virtual rewards.
          </li>
        </ul>
      </div>

      {/* Right: Embedded Video */}
      <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center items-center">
        <video
          controls
          className="w-full max-w-lg rounded-lg shadow-md"
          src={demoVideo}
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  </div>
</section>


      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          Development Process & Technologies
        </h2>
        <div className="flex bg-white p-8 rounded-xl border border-gray-200">
          <div className="w-2/3 ">
            <ul className="list-disc list-inside space-y-2 text-textSecondary">
              <li>
                <strong>Platform:</strong> Swift (native iOS app)
              </li>
              <li>
                <strong>UI Framework:</strong> SwiftUI
              </li>
              <li>
                <strong>State & Logic:</strong> ObservableObject & Combine
              </li>
              <li>
                <strong>Animations:</strong> <code>withAnimation</code>,{' '}
                <code>spring()</code>, <code>matchedGeometryEffect</code>
              </li>
              <li>
                <strong>Persistence:</strong> UserDefaults (iCloud planned)
              </li>
              <li>
                <strong>Development Tools:</strong> Xcode 16, SF Symbols, Git
                (GitHub)
              </li>
            </ul>

            <p className="text-textSecondary mt-4">
              Focusing exclusively on iOS using SwiftUI allowed me to prioritize
              fluid interactions, tactile feedback, and high-fidelity animation
              support — all critical to delivering the gamified, immersive
              experience required by the concept.
            </p>
          </div>
          <div className="flex flex-col w-1/3 gap-10 justify-center items-center mb-6">
            <div className="flex flex-col items-center">
              <img src={xcodeLogo} alt="Xcode Logo" className="h-16 w-16" />
            </div>
            <div className="flex flex-col items-center">
              <img src={swiftLogo} alt="Swift Logo" className="h-16 w-16" />
            </div>
            <div className="flex flex-col items-center">
              <img src={swiftuiLogo} alt="SwiftUI Logo" className="h-16 w-16" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          Why Swift + SwiftUI?
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-textSecondary space-y-4">
          <p>
            Choosing Swift and SwiftUI for this project was a strategic decision
            based on both technical and experience-driven factors:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>High-fidelity animations:</strong> Native APIs like{' '}
              <code>withAnimation</code>, <code>matchedGeometryEffect</code>,
              and <code>spring()</code> provide smooth, responsive gamification
              elements.
            </li>
            <li>
              <strong>Haptic feedback:</strong> Core Haptics integration
              delivers tactile, low-latency responses to user actions like
              streaks and milestone completions.
            </li>
            <li>
              <strong>iOS-exclusive features:</strong> Native access to GameKit,
              accessibility tools, and Core Animation deepen the user
              experience.
            </li>
            <li>
              <strong>Target audience fit:</strong> Dutch youth aged 12–25
              predominantly use iOS devices, making Swift the pragmatic starting
              point for validation.
            </li>
            <li>
              <strong>Faster polish:</strong> Native focus supports a faster
              feedback loop and cleaner build quality — critical in a
              semester-long development window.
            </li>
          </ul>
          <p>
            These reasons align strongly with the Learning Outcomes related to
            design justification, realization quality, and managing complexity
            in smart-mobile contexts.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          GitHub Repository
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-textSecondary mb-4">
            The complete source code for the Reading App project is available on
            GitHub. The commit history reflects all development iterations and
            implementation phases. A downloadable build or TestFlight link will
            be provided soon.
          </p>
          <a
            href="https://github.com/amin98/readingapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link to="/reading-app" className="text-primary hover:underline">
          &larr; Back to Reading App Case Study Overview
        </Link>
      </div>
    </div>
  );
};

export default Implementation;
