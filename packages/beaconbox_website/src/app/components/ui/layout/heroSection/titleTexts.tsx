import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const HeroSubtitle = styled(motion.p)`
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.7); // Slightly faded for contrast
    width: 70%;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.5;
    text-align: center;
`;

export const HeroTitle = styled(motion.h1)`
    font-size: 4rem;
    font-weight: 700;
    color: black; // Adjusted to fit the card design
    margin-bottom: 16px;
    line-height: 1.2;
    text-align: center; // Center the title text
`;


