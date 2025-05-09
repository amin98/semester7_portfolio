import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import FeedbackProgress from './pages/FeedbackProgress';
import GroupOverview from './pages/GroupOverview';
import Home from './pages/Home';
import IndividualOverview from './pages/IndividualOverview';
import LearningOutcomes from './pages/LearningOutcomes';
import Advice from './pages/lo/Advice';
import Analysis from './pages/lo/Analysis';
import Design from './pages/lo/Design';
import ManageControl from './pages/lo/ManageControl';
import Professional from './pages/lo/Professional';
import Realisation from './pages/lo/Realisation';
import Planning from './pages/Planning';
import ReadingApp from './pages/ReadingApp';
import VersionHistory from './pages/VersionHistory';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-outcomes" element={<LearningOutcomes />} />
        <Route path="/lo/analysis" element={<Analysis />} />
        <Route path="/lo/advice" element={<Advice />} />
        <Route path="/lo/design" element={<Design />} />
        <Route path="/lo/realisation" element={<Realisation />} />
        <Route path="/lo/manage-control" element={<ManageControl />} />
        <Route path="/lo/professional" element={<Professional />} />
        <Route path="/feedback-progress" element={<FeedbackProgress />} />
        <Route path="/version-history" element={<VersionHistory />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/reading-app" element={<ReadingApp />} />
        <Route path="/individual" element={<IndividualOverview />} />
        <Route path="/group" element={<GroupOverview />} />
        {/* // TODO: Add routes for other pages/components as needed */}
      </Routes>
    </Layout>
  );
}

export default App;
