'use client';

import styled from '@emotion/styled'

import {
    DiscordIcon,
    GithubIcon2,
    LinkedInIcon,
    XIcon,
} from '../icons/svgIcons'

import { Logo } from './Logo';

const FooterContainer = styled.div`
    padding: 64px 96px 64px 96px;
    display: flex;
    flex-direction: column;
    color: rgb(129,129,129);
    gap:32px;
    @media (max-width: 809px) {
        padding: 36px 24px;
    }
`;

const LeftSideFooter = styled.div`
    width: 360px;
    display: flex;
    flex-direction: columnl;

`

export const FooterDesktop = () => {
    return (
        <div>
            This is the Footer
        </div>
    )
}