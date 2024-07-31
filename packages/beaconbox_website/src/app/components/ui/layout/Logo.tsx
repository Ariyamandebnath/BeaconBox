import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const LogoLink = styled.a`
    display: block;
    image-rendering: pixelated;
    flex-shrink: 0;
    background-size: 100% 100%;
    border-radius: 8px;
    height: 40px;
    width: 40px;
    background-image: url('/images/LogoWhite.png');
    opacity: 1;
`;

const LogoText = styled.span`
    font-size: 20px;
    color: #000;
    font-weight: bold;
`;

const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

interface LogoProps {
    animate?: boolean;
}

export const Logo = ({ animate = false }: LogoProps) => {
    return (
        <LogoContainer>
            {animate ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <LogoLink href="/" />
                </motion.div>
            ) : (
                <LogoLink href="/" />
            )}
            {animate ? (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                >
                    <LogoText>BeaconBox</LogoText>
                </motion.div>
            ) : (
                <LogoText>BeaconBox</LogoText>
            )}
        </LogoContainer>
    );
};
