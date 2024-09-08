"use client";

import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px ;

    @media (max-width: 809px) {
        padding: 0px 24px;
    }
`;

interface ContentContainerProps {
    children?: ReactNode;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
    return <Container>{children}</Container>;
};
