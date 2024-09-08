import React from 'react';
import styled from '@emotion/styled';
import featurItem

const FeatureListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;

const features = [
  {
    icon: '🔒',
    title: 'Secure Transactions',
    description: 'Ensure all your transactions are protected with top-notch security and encryption.',
  },
  {
    icon: '💸',
    title: 'Instant Transfers',
    description: 'Send and receive money instantly across the globe, anytime, anywhere.',
  },
  {
    icon: '🌍',
    title: 'Multi-Currency Support',
    description: 'Handle multiple currencies with ease, including crypto and fiat money.',
  },
  {
    icon: '📈',
    title: 'Financial Analytics',
    description: 'Track your spending and analyze your financial habits with detailed reports.',
  },
];

const FeatureList: React.FC = () => {
  return (
    <FeatureListWrapper>
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </FeatureListWrapper>
  );
};

export default FeatureList;

