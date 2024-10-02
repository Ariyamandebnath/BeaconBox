import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.4rem;  // Base size
  color: rgba(0, 0, 0, 0.7);
  width: 70%;
  max-width: 700px;
  margin: 0px 0px  10px ;
  padding: 0px 0px  15px ; ;
  line-height: 1.5;
  text-align: center;


  /* Responsive styling */
  @media (max-width: 1200px) {
    font-size: 1rem;
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 60%;  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    width: 40%;  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 4rem;  // Base size
  font-weight: 700;
  color: black;
  margin-bottom: 8px;
  line-height: 1.2;
  text-align: center;
  /* Responsive styling */
  @media (max-width: 1200px) {
    font-size: 3rem;
    padding: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.3rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 0.6rem;
  }
`;
