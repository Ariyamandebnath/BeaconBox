'use client';

import { useEffect } from 'react';
import {  useAnimation } from 'framer-motion';
import { HeroSubtitle, HeroTitle } from './titleTexts';
import {
  textVariants,
  backgroundVariants,
  containerVariants,
  iconHoverVariants,
  titleVariants,
  buttonVariants
} from './varients';
import { XIcon } from '../../icons/svgIcons';
import {
  MainContainer,
  Card,
  CashIcon,
  DollarSign,
  JoinCommunity,
  TitleWrapper,
  TitleLight,
  TitleDark,
  TitleParagraph,
  HeroCTA,

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
      <a href="https://x.com/AriyamanDe12_24" target="_blank" rel="noreferrer">
        
        <JoinCommunity
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          disabled={false} // Set to true to see the disabled state
        >
          Follow me on <XIcon size="M" />
        </JoinCommunity>
      </a>
      
      <TitleWrapper>
        <TitleLight>#Beacon Box</TitleLight>
        <TitleDark>Open-Source Wallet</TitleDark>
        <TitleParagraph>Replicating how Modern ,Fast and Secure wallet applications work on there infratructures </TitleParagraph>

        
          <HeroCTA>
            Your Button Text
          </HeroCTA>
        
      </TitleWrapper>

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