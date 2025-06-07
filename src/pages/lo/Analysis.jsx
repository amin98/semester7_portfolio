// src/pages/lo/Analysis.jsx
import React from 'react';
import { LOLayout } from '../../components/LOLayout'; // Adjust path to LOLayout.jsx

const Analysis = () => {
  // The learningOutcomeId prop will match the 'analysis' part of the route /lo/analysis
  // The learningOutcomeName prop is for a nicely formatted display title.
  return (
    <LOLayout learningOutcomeName="Analysis" learningOutcomeId="analysis" />
  );
};

export default Analysis;
