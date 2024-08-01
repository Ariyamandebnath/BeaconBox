'use client';

import { useEffect } from 'react';
import {  useAnimation } from 'framer-motion';
import { HeroSubtitle, HeroTitle } from './titleTexts';
import {
  textVariants,
  backgroundVariants,
  containerVariants,
  iconHoverVariants,
  titleVariants
} from './varients';

import {
  MainContainer,
  Card,
  CashIcon,
  DollarSign,
} from './animateElements'


export const Hero=()=> {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
      <div><MainContainer
        initial="hidden"
        animate={controls}
        variants={backgroundVariants}
      >
        <Card
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
        >
          <CashIcon
            src="./images/dollar-bill.png"
            alt="Cash Bundle Icon"
            variants={iconHoverVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
          />
          <DollarSign
            variants={iconHoverVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            $
          </DollarSign>
          <HeroTitle variants={titleVariants} initial="hidden" animate="show">
            The Future of Digital Wallets
          </HeroTitle>
          <HeroSubtitle variants={textVariants}>
            Decentralizing your transactions and ensuring top-notch security for
            all your digital assets. Experience seamless and secure financial
            management with BeaconBox.
          </HeroSubtitle>
        </Card>
      </MainContainer>
      </div>
      
  );
}
