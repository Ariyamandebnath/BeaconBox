'use client';

import { useState } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import { Logo } from "@/app/components/ui/layout/Logo";
import { ExternalArrow, GithubIcon } from "../../icons/svgIcons";
import { SignIn } from '../CallToAction';
import {
  HamburgerContainer,
  HamburgerLine1,
  HamburgerLine2,
  ListItem,
  LogoAddon,
  LogoContainer,
  MobileLinkList,
  MobileMenu,
  MobileNav,
  NavOpen,
} from './styled';

const IBMPlexMono = IBM_Plex_Mono({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});



export const HeaderMobile = () => {
  const isTwentyDev = false;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MobileMenu>
      <MobileNav>
        <LogoContainer>
          <Logo />
          {isTwentyDev && (
            <LogoAddon className={IBMPlexMono.className}>
              for Developers
            </LogoAddon>
          )}
        </LogoContainer>
        <HamburgerContainer>
          <input
            type="checkbox"
            id="menu-input"
            onChange={toggleMenu}
            aria-label="Toggle menu"
            title="Toggle menu"
          />
          <HamburgerLine1 id="line1" />
          <HamburgerLine2 id="line2" />
        </HamburgerContainer>
      </MobileNav>
      <NavOpen
        style={{
          transform: `scaleY(${menuOpen ? '1' : '0'})`,
        }}
      >
        <MobileLinkList>
          <ListItem href="/story">Story</ListItem>
          <ListItem href="/pricing">Pricing</ListItem>
          <ListItem href="/releases">Releases</ListItem>
          <ListItem href="https://github.com/Ariyamandebnath/BeaconBox">
            <GithubIcon color="rgb(71,71,71)" />
            <ExternalArrow />
          </ListItem>
        </MobileLinkList>
        <SignIn />
      </NavOpen>
    </MobileMenu>
  );
};
