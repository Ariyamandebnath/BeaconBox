'use client'


import React from 'react';
import styled from '@emotion/styled';

const FeatureSectionWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;

const FeatureItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  text-align: left;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4caf50;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FeatureSection: React.FC = () => {
    return (
        <FeatureSectionWrapper>
            <SectionTitle>Key Features</SectionTitle>
            <FeatureList>
                <FeatureItem>
                    <FeatureIcon>🔒</FeatureIcon>
                    <FeatureTitle>Secure Transactions</FeatureTitle>
                    <FeatureDescription>
            Ensure all your transactions are protected with top-notch security and encryption.
                    </FeatureDescription>
                </FeatureItem>
        <FeatureItem>
                    <FeatureIcon>💸</FeatureIcon>
                    <FeatureTitle>Instant Transfers</FeatureTitle>
                    <FeatureDescription>
            Send and receive money instantly across the globe, anytime, anywhere.
                    </FeatureDescription>
                </FeatureItem>
                <FeatureItem>
                    <FeatureIcon>🌍</FeatureIcon>
                    <FeatureTitle>Multi-Currency Support</FeatureTitle>
                    <FeatureDescription>
            Handle multiple currencies with ease, including crypto and fiat money.
                    </FeatureDescription>
                </FeatureItem>
        <FeatureItem>
                    <FeatureIcon>📈</FeatureIcon>
                    <FeatureTitle>Financial Analytics</FeatureTitle>
                    <FeatureDescription>
            Track your spending and analyze your financial habits with detailed reports.
                    </FeatureDescription>
                </FeatureItem>
            </FeatureList>
        </FeatureSectionWrapper>
    );
};

export default FeatureSection;
