'use client'


import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { IconBook, IconChevronDown, IconRobotFace } from "@tabler/icons-react";


import { ExternalArrow, GithubIcon } from "../../icons/svgIcons";
import {
    DesktopNav,
    LinkList,
    ListItem,
    LogoContainer,
} from "@/app/components/ui/layout/header/styled";

import { Logo } from "@/app/components/ui/layout/Logo";
import { Theme } from "@/app/components/ui/theme/theme";
import { SignIn } from '../CallToAction';
const DropdownMenu = styled.ul<{ open: boolean }>`
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    background: white;
    border: 1px solid black;
    border-radius: 8px;
    padding: 2px 0;
    margin: 4px 0px;
    width: 150px;
`;

const DropdownItem = styled.a`
    color: rgb(71, 71, 71);
    text-decoration: none;
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 40px;
    margin: 0px 2px;
    border-radius: 4px;
    font-size: 15px;
    &:hover {
        background-color: #4CCD99;
    }
`;

const Dropdown = styled.div`
    color: rgb(71, 71, 71);
    text-decoration: none;
    display: flex;
    gap: 4px;
    align-items: center;
    border-radius: 8px;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    cursor: pointer;
    &:hover {
        background-color: #eaebd9;
    }
`;

const StyledIconContainer = styled.div`
    border: 1px solid ${Theme.text.color.secondary};
    border-radius: ${Theme.border.radius.sm};
    display: flex;
    align-items: center;
    padding: 2px;
`;

const StyledChevron = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2px;
    color: rgb(179, 179, 179);
`;

const Arrow = styled.div<{ open: boolean }>`
    display: inline-block;
    margin-left: 5px;
    transition: transform 0.3s;
    transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;



export const HeaderDesktop = () => {
    const [dropDownOpen, setdropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setdropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setdropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',
                handleClickOutside
            );
        };
    }, []);

    return (
        <DesktopNav>
            <LogoContainer>
                <Logo animate />
            </LogoContainer>
            <LinkList>
                <ListItem href="/story">Story</ListItem>
                <ListItem href="/pricing">Pricing</ListItem>
                <ListItem href="/releases">Releases</ListItem>
                <ListItem href="https://github.com/Ariyamandebnath/BeaconBox">
                    <GithubIcon color="rgb(71,71,71)" />
                    <ExternalArrow />
                </ListItem>
                <Dropdown
                    ref={dropdownRef}
                    style={{ position: 'relative' }}
                    onClick={toggleDropdown}
                >
                    Docs
                    <Arrow open={dropDownOpen}>
                        <StyledChevron>
                            <IconChevronDown size={Theme.icon.size.sm} />
                        </StyledChevron>
                    </Arrow>
                    <DropdownMenu open={dropDownOpen}>
                        <DropdownItem href="/user-guide">
                            <StyledIconContainer>
                                <IconBook size={Theme.icon.size.md} />
                            </StyledIconContainer>
                            User Guide
                        </DropdownItem>
                        <DropdownItem href="/developers">
                            <StyledIconContainer>
                                <IconRobotFace size={Theme.icon.size.md} />
                            </StyledIconContainer>
                            Developers
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </LinkList>
            <SignIn />
    </DesktopNav>
        
    )

}