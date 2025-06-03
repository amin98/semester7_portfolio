import React from 'react';
import { Link } from 'react-router-dom';
import trelloBoard from '../assets/trello_board.png';

const Planning = () => {
  // Group project planning details (Trello board explanation)
  // Individual project planning details (Google Sheets + AI analysis)
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-textPrimary mb-8">
        Project Planning
      </h1>

      {/* ============================= */}
      {/* Group Project Planning (FitPhone) */}
      {/* ============================= */}
      <section id="group-planning" className="mb-12">
        <h2 className="text-2xl font-semibold text-textPrimary mb-4">
          Group Project Planning (FitPhone)
        </h2>
        <p className="text-textSecondary mb-4">
          Our team uses an <strong>Agile workflow</strong> on a shared Trello board to coordinate tasks, track progress,
          and continuously refine sprint goals. Each column on the board represents a stage of work:
        </p>
        <ul className="list-disc list-inside text-textSecondary mb-6 space-y-2">
          <li>
            <strong>Sizes (leftmost):</strong> A color‐coded legend indicating task sizes (XS, S, M, L, XL) and priority flags.
          </li>
          <li>
            <strong>Backlog:</strong> All user stories and feature requests awaiting prioritization.
          </li>
          <li>
            <strong>Sprint Backlog:</strong> Stories selected for the current sprint, each with clear acceptance criteria.
          </li>
          <li>
            <strong>In Progress:</strong> Active tasks being developed, each card assigned to a team member.
          </li>
          <li>
            <strong>In Review:</strong> Completed tasks awaiting peer review and testing.
          </li>
          <li>
            <strong>Need Changes:</strong> Cards returned from review with feedback or bug fixes.
          </li>
          <li>
            <strong>Done:</strong> Approved tasks, fully tested and merged.
          </li>
        </ul>
        <div className="mb-6">
          <img
            src={trelloBoard}
            alt="FitPhone Trello Board"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-textSecondary">
          As new requirements emerge during sprint planning, we estimate each card using color tags (purple = XS, blue = S, yellow = M, red = L, orange = XL). During our daily stand-ups, we move cards across columns to visualize progress. After each sprint, we hold a quick retrospective to adjust task sizes and workflows for the next cycle.
        </p>
      </section>

      {/* ============================= */}
      {/* Individual Project Planning (Reading App) */}
      {/* ============================= */}
      <section id="individual-planning" className="mb-12">
        <h2 className="text-2xl font-semibold text-textPrimary mb-4">
          Individual Project Planning (Reading App)
        </h2>
        <p className="text-textSecondary mb-4">
          For my Reading App, I created a detailed planning spreadsheet (hosted in Google Sheets) that combines upcoming feature work with tasks derived from Assessment 1 feedback. I used AI to analyze the feedback document and generate a prioritized to-do list. Each row represents a specific deliverable, with associated subtasks and target pages for documentation in my portfolio.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-background border border-[#dee2e6] rounded-lg">
            <thead>
              <tr className="bg-light text-xs font-semibold uppercase tracking-wider text-textSecondary">
                <th className="p-3 text-left">Day</th>
                <th className="p-3 text-left">Task #</th>
                <th className="p-3 text-left">Main Task</th>
                <th className="p-3 text-left">Subtasks</th>
              </tr>
            </thead>
            <tbody className="text-textPrimary">
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">1</td>
                <td className="p-3 whitespace-nowrap">Finalize V1 Wireframes</td>
                <td className="p-3">
                  • Create wireframes for Onboarding, Quiz, Story Match, Story View, End Screen, Profile.<br/>
                  • Document purpose of each screen.<br/>
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Wireframes – V1”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">2</td>
                <td className="p-3 whitespace-nowrap">Write Design Rationale</td>
                <td className="p-3">
                  • Explain flow structure decisions.<br/>
                  • Highlight personalization & gamification points.<br/>
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Design Choices & Rationale”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Thursday</td>
                <td className="p-3 whitespace-nowrap">3</td>
                <td className="p-3 whitespace-nowrap">Build Clickable Prototype in Figma</td>
                <td className="p-3">
                  • Link wireframes in Figma (tap-through flow).<br/>
                  • Capture screens for portfolio. <br/>
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Prototype”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Friday</td>
                <td className="p-3 whitespace-nowrap">4</td>
                <td className="p-3 whitespace-nowrap">Run Usability Tests</td>
                <td className="p-3">
                  • Conduct 2 user tests on prototype.<br/>
                  • Ask: “What do you expect here?” “What’s confusing?”<br/>
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Testing Feedback Log”</em>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-[#dee2e6] hover:bg-light">
                <td className="p-3 whitespace-nowrap">Friday</td>
                <td className="p-3 whitespace-nowrap">5</td>
                <td className="p-3 whitespace-nowrap">Iterate Wireframes (V2)</td>
                <td className="p-3">
                  • Update 2-3 wireframes based on feedback.<br/>
                  • Label as “V2” with before/after screenshots.<br/>
                  <span className="text-sm italic text-textSecondary">
                    <em>Portfolio page: “Wireframes – Iteration”</em>
                  </span>
                </td>
              </tr>
              {/* Add additional rows here as needed */}
            </tbody>
          </table>
        </div>
        <p className="text-textSecondary mb-4">
          This plan was generated by first reviewing the feedback from Assessment 1 in detail, then using an AI-assisted tool to extract key action items and timeline estimates. Each task aligns with a specific portfolio page or feature milestone.
        </p>
        <p className="text-textSecondary">
          <Link
            to="https://docs.google.com/spreadsheets/d/1lA8HuB77ARCgOpCamTkwLytb4wkX4hBDZMqgPDWIZTs/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View the full planning spreadsheet
          </Link>
          &nbsp; (Google Sheets).
        </p>
      </section>


    </div>
  );
};

export default Planning;
