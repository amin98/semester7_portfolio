import { Link } from 'react-router-dom';
import swiftLogo from '../../assets/swift.png';
import swiftuiLogo from '../../assets/swiftui.png';
import demoVideo from '../../assets/videos/demo_video.mp4';
import xcodeLogo from '../../assets/xcode.png';

const Implementation = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-textPrimary mb-3">
          How I Made and Built It
        </h1>
        <p className="text-lg text-textSecondary mb-6">
          Here I show how I built the Reading App—what tools I picked, steps I
          did for development, and how all parts work together. You can look at
          the code link below to see every change and detail.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          Showing the App
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 mb-8">
          <div className="flex flex-col justify-between lg:flex-row ">
            {/* Left: Text & Bullet List */}
            <div className=" space-y-4">
              <p className="text-textSecondary">
                I made this as a native iOS app with Swift and SwiftUI to make
                it fast and smooth. You will see a full onboarding flow, a
                reading screen with no distractions, and a test recommendation
                engine working.
              </p>
              <ul className="list-disc list-inside text-textSecondary space-y-2">
                <li>
                  <strong>Onboarding:</strong> Personal start using BFI-10
                  personality test and choosing genres.
                </li>
                <li>
                  <strong>Reader UI:</strong> Simple, no-distraction reader with
                  font size changing, progress shown, and haptics.
                </li>
                <li>
                  <strong>Gamification:</strong> Streak system, small
                  animations, and virtual rewards.
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
          How I Developed It & What Tech I Used
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
                <strong>Persistence:</strong> UserDefaults (iCloud is planned)
              </li>
              <li>
                <strong>Development Tools:</strong> Xcode 16, SF Symbols, Git
                (GitHub)
              </li>
            </ul>

            <p className="text-textSecondary mt-4">
              Choosing SwiftUI let me focus on smooth animations and haptic
              feedback without thinking about other platforms. It helped me
              finish a nice, fast experience in short time.
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
          Why I Use Swift + SwiftUI?
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-textSecondary space-y-4">
          <p>
            To choose Swift and SwiftUI for this project was a careful decision
            for technical and user experience reasons:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>High-quality animations:</strong> Native APIs like{' '}
              <code>withAnimation</code>, <code>matchedGeometryEffect</code>,
              and <code>spring()</code> give smooth, quick gamification parts.
            </li>
            <li>
              <strong>Haptic feedback:</strong> Core Haptics gives touch
              feedback fast for user actions like streaks and finishing
              milestones.
            </li>
            <li>
              <strong>iOS-only features:</strong> Native access to GameKit,
              accessibility tools, and Core Animation make user experience
              deeper.
            </li>
            <li>
              <strong>Fits target users:</strong> Dutch young people age 12–25
              mostly use iOS devices, so Swift is a good start for checking
              ideas.
            </li>
            <li>
              <strong>Faster to make it good:</strong> Focusing on native helps
              with faster feedback and cleaner build, which is very important in
              a semester project.
            </li>
          </ul>
          <p>
            All these choices connect directly to our Learning Outcomes: clear
            design reasons, ready-for-production implementation, and best
            practices for smart-mobile.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-textPrimary mb-6">
          GitHub Code Place
        </h2>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-textSecondary mb-4">
            Take a look at the Reading App on GitHub.
          </p>
          <a
            href="https://github.com/amin98/readingapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            See on GitHub
          </a>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link to="/reading-app" className="text-primary hover:underline">
          &larr; Go Back to Reading App Case Study Overview
        </Link>
      </div>
    </div>
  );
};

export default Implementation;
