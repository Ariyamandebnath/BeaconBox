'use client';

import styled from '@emotion/styled';
import { motion, MotionProps } from 'framer-motion';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


const Banner = styled(motion.div)`
  transform: rotate(32deg) translateZ(0px);
  align-content: center;
  align-items: center;
  box-shadow: 0 3px 0 0 var(--token-, #141414);
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  position: absolute;
  right: -42px;
  top: 48px;
  width: 344px;
  z-index: 1;
  border-top: 2px solid var(--token-, #141414);
  border-bottom: 2px solid var(--token-, #141414);
  border-left: 0;
  border-right: 0;
  background-color: var(--token-97dec3ed-aec0-48f4-b209-6155f50b3420, #fafafa);
  border-radius: 20px;
  will-change: transform;
`;
// Styled Components
export const FeatureSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--token-, #fafafa);
  border: 3px solid var(--token-18c9af6f-a68e-48a0-bd24-f7c5094292e0, #141414);
  border-left-width: 0;
  border-right-width: 3px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  max-width: 1248px;
  height: min-content;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  will-change: var(--framer-will-change-override, transform);
  padding: 128px 20px;


  @media (min-width: 810px) and (max-width: 1199px) {
    padding: 80px 20px;
  }

  @media (max-width: 809px) {
    padding: 60px 10px;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: inherit;
  }
`;

export const FeatureGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 80px;
  width: 100%;
`;

export const FeatureCard = styled(motion.div)<MotionProps>`
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const FeatureIcon = styled(motion.img)`
  width: 60px;
  height: auto;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
`;

// Animation Variants
export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: 'easeOut',
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Feature Section Component
export const Features = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
    <div>
      
      <FeatureSection initial="hidden" animate={controls} variants={sectionVariants}>
        <Banner>
        <h2>Feature Banner</h2>
      </Banner>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Our Features
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Discover the amazing features that make our product unique.
      </motion.p>
      <FeatureGrid>
        <FeatureCard variants={cardVariants}>
          <FeatureIcon src="./images/feature1.png" alt="Feature 1 Icon" />
          <FeatureTitle>Feature One</FeatureTitle>
          <FeatureDescription>
            This is a brief description of feature one. It provides amazing benefits and features.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard variants={cardVariants}>
          <FeatureIcon src="./images/feature2.png" alt="Feature 2 Icon" />
          <FeatureTitle>Feature Two</FeatureTitle>
          <FeatureDescription>
            This is a brief description of feature two. It provides amazing benefits and features.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard variants={cardVariants}>
          <FeatureIcon src="./images/feature3.png" alt="Feature 3 Icon" />
          <FeatureTitle>Feature Three</FeatureTitle>
          <FeatureDescription>
            This is a brief description of feature three. It provides amazing benefits and features.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </FeatureSection>
    </div>
    
  );
};
