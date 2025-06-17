import React from 'react';
import FeatureComponent from '../../../components/FeatureComponent';
import { welcomeFeatureData } from '../../../data/readingapp/welcomeFeatureData';

const WelcomeFeaturePage = () => {
  return <FeatureComponent {...welcomeFeatureData} />;
};

export default WelcomeFeaturePage;
