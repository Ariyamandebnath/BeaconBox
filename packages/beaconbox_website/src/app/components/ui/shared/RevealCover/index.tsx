'use client'

import { motion } from "framer-motion";
import styled from "styled-components";

// Variants for the reveal animation
const variant = {
    hidden: {
        width: '100%',  // Initially, the cover will take the full width
    },
    visible: {
        width: '0%',  // As the animation progresses, the width shrinks to 0
        transition: {
            duration: 1.4,  // Control the duration of the animation
            ease: [0.6, 0.05, -0.01, 0.9],  // Custom easing for a smoother effect
        },
    },
};

// Styled motion.div for Reveal effect
const Reveal = styled(motion.div)`
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--Background, white);  // Fallback to black if --Background is undefined
    z-index: 10;

    // Responsive design for different screen sizes
    @media (max-width: 599px) {
        border-radius: 0;
    }

    @media (min-width: 600px) and (max-width: 1024px) {
        border-radius: 0;
    }
`;

// RevealCover Component
const RevealCover = () => {
    return (
        <Reveal
            variants={variant}  // Applying the animation variants
            initial="hidden"  // Initial state is hidden
            whileInView="visible"  // When in view, apply visible state
            viewport={{ amount: 0.6, once: true }}  // Only run once when 60% of the element is in view
        />
    )
}

export default RevealCover;
