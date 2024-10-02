import styled from '@emotion/styled';
import { motion } from 'framer-motion';

// Main container with updated styles
export const HeroSectionContainer = styled.div`
  background: url('./images/Sprinkle.svg')no-repeat center center;
  background-size: cover;
  width: 100%;
`

export const MainContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: min-content;
  padding: 40px 50px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`;

// Button with animation
export const JoinCommunity = styled(motion.button)`
  background-color: white;
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  gap: 0.625rem;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
  border: 3px solid black;
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cfeee2;
    color: black;
    border-color: #003b20;
    box-shadow: -4px 4px 500px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #0056b3;
    color: white;
    border: none;
  }

  &:disabled {
    background-color: #4CCD99;
    color: #666666;
    cursor: not-allowed;
  }
`;

// Title Wrapper with animation
export const TitleWrapper = styled(motion.div)`
  border-radius: 50px;
  margin: 15px;
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  height: min-content;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 646px;
  margin: 50
  px;
`

export const TitleLight = styled(motion.h1)`
  background: white;
  color: rgb(179, 179, 179);
  margin: 0;
  font-size: 2.5rem;
`;

export const TitleDark = styled(motion.h2)`
  background: white;
  color: rgb(20, 20, 20);
  margin: 0; 
  font-size: 2.5rem;
`;

export const TitleParagraph = styled(motion.p)`
  background: white;
  align-content: center;
  text-align: center;
  color: rgb(179, 179, 179);
  margin: 0;
`;

// Hero Call to Action Button
export const HeroCTA = styled(motion.button)`
  background-color: rgb(20, 20, 20);
  color: white;
  border: 1px solid rgb(20, 20, 20);
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 800;
  margin: 60px;
  padding: 13px 24px;
  width: 40%;
  max-width: 60%;
  position: relative;
  overflow: hidden;
  box-shadow: 
    4px 4px 6px rgba(0, 0, 0, 0.3),
    -2px -2px 3px rgba(255, 255, 255, 0.2);
  
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 20px;
  }

  &:hover {
    background-color: #333;
    transform: translateY(-6px);
    box-shadow: 
      6px 6px 10px rgba(0, 0, 0, 0.4),
      -3px -3px 5px rgba(255, 255, 255, 0.3);
  }

  &:active {
    background-color: #222;
    transform: translateY(-2px);
    box-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.3),
      -1px -1px 2px rgba(255, 255, 255, 0.2);
  }

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: inherit;
    text-align: center;
  }

  a:hover {
    color: inherit;
  }
`;

// Card with animation
export const Card = styled(motion.div)`
  background: #fff;
  border: 6px solid black;
  border-radius: 25px;
  padding: 60px 20px;
  width: 55%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  aspect-ratio: 15 / 7.8;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

// Cash Icon styling with animation
export const CashIcon = styled(motion.img)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: auto;
`;

// Dollar Sign styling with animation
export const DollarSign = styled(motion.span)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  font-weight: bold;
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
`;
