import React from 'react';
import { Link } from 'react-router-dom';
import trelloBoard from '../assets/trello_board.png';

const Planning = () => {
  // Group project planning details (Trello board explanation)
  // Individual project planning details (Google Sheets + AI analysis)
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-textPrimary mb-8">
        How We Plan Projects
      </h1>

      {/* ============================= */}
      {/* Group Project Planning (FitPhone) */}
      {/* ============================= */}
      <section id="group-planning" className="mb-12">
        <h2 className="text-2xl font-semibold text-textPrimary mb-4">
          Group Project Planning (FitPhone App)
        </h2>
        <p className="text-textSecondary mb-4">
          Our team uses an <strong>Agile way of work</strong> on a shared Trello
          board to arrange tasks, see progress, and always make sprint goals
          better. Each column on the board shows a stage of work:
        </p>
        <ul className="list-disc list-inside text-textSecondary mb-6 space-y-2">
          <li>
            <strong>Sizes (on left):</strong> A color list showing task sizes
            (XS, S, M, L, XL) and important flags.
          </li>
          <li>
            <strong>Backlog:</strong> All user stories and feature ideas waiting
            to be put in order.
          </li>
          <li>
            <strong>Sprint Backlog:</strong> Stories picked for the current
            sprint, each with clear rules for done.
          </li>
          <li>
            <strong>In Progress:</strong> Tasks being worked on now, each card
            has a team member name.
          </li>
          <li>
            <strong>In Review:</strong> Finished tasks waiting for team review
            and testing.
          </li>
          <li>
            <strong>Need Changes:</strong> Cards sent back from review with
            notes or bugs to fix.
          </li>
          <li>
            <strong>Done:</strong> Tasks that are approved, fully tested and put
            in main code.
          </li>
        </ul>
        <div className="mb-6">
          <img
            src={trelloBoard}
            alt="FitPhone Trello Board - Picture"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-textSecondary">
          When new needs come up during sprint planning, we guess each card size
          using color tags (purple = XS, blue = S, yellow = M, red = L, orange =
          XL). In our daily stand-up meetings, we move cards on columns to show
          progress. After each sprint, we have a quick look back to change task
          sizes and how we work for the next cycle.
        </p>
      </section>

      {/* ============================= */}
      {/* Individual Project Planning (Reading App) */}
      {/* ============================= */}
      <section id="individual-planning" className="mb-12">
        <h2 className="text-2xl font-semibold text-textPrimary mb-4">
          My Own Project Planning (Reading App)
        </h2>
        <p className="text-textSecondary mb-4">
          For my Reading App, I made a detailed plan in a spreadsheet (in Google
          Sheets) that puts together new feature work with tasks from Assessment
          1 feedback. I used AI to look at the feedback paper and make a to-do
          list in order of importance. Each row is a specific thing to deliver,
          with small tasks and target pages for writing in my portfolio.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-background border border-[#dee2e6] rounded-lg">
            <thead>
              <tr className="bg-light text-xs font-semibold uppercase tracking-wider text-textSecondary">
                <th className="p-3 text-left">Day of Week</th>
                <th className="p-3 text-left">Task Number</th>
                <th className="p-3 text-left">Main Job</th>
                <th className="p-3 text-left">Small Jobs</th>
              </tr>
            </thead>
            <tbody className="text-textPrimary">
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">1</td>
                <td className="p-3 whitespace-nowrap">Finish V1 Wireframes</td>
                <td className="p-3">
                  • Make wireframes for Onboarding, Quiz, Story Match, Story
                  View, End Screen, Profile.
                  <br />
                  • Write down why each screen is for.
                  <br />
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Wireframes – V1 Designs”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">2</td>
                <td className="p-3 whitespace-nowrap">Write Why for Design</td>
                <td className="p-3">
                  • Explain choices for flow structure.
                  <br />
                  • Show personalization & gamification parts.
                  <br />
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Design Choices & Reasons”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">3</td>
                <td className="p-3 whitespace-nowrap">
                  Build Clickable Figma Prototype
                </td>
                <td className="p-3">
                  • Link wireframes in Figma (tap flow).
                  <br />
                  • Take pictures of screens for portfolio. <br />
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Prototype View”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Friday</td>
                <td className="p-3 whitespace-nowrap">4</td>
                <td className="p-3 whitespace-nowrap">Do Usability Tests</td>
                <td className="p-3">
                  • Do 2 user tests on prototype.
                  <br />
                  • Ask: “What you expect here?” “What is confusing?”
                  <br />
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Test Feedback Notes”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Friday</td>
                <td className="p-3 whitespace-nowrap">5</td>
                <td className="p-3 whitespace-nowrap">
                  Change Wireframes (V2)
                </td>
                <td className="p-3">
                  • Update 2-3 wireframes from feedback.
                  <br />
                  • Label as “V2” with before/after pictures.
                  <br />
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Wireframes – Changes”</em>
                  </span>
                </td>
              </tr>
              {/* Add additional rows here as needed */}
            </tbody>
          </table>
        </div>
        <p className="text-textSecondary mb-4">
          This plan was made by first looking at the feedback from Assessment 1
          carefully, then using an AI tool to find key action items and guess
          timelines. Each task is for a specific portfolio page or feature step.
        </p>
        <p className="text-textSecondary">
          <Link
            to="https://docs.google.com/spreadsheets/d/1lA8HuB77ARCgOpCamTkwLytb4wkX4hBDZMqgPDWIZTs/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            See the full planning paper
          </Link>
          &nbsp; (Google Sheets).
        </p>
      </section>
    </div>
  );
};

export default Planning;
