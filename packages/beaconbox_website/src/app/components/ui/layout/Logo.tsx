import styled from '@emotion/styled';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
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
    margin-right: 10px; /* Adjust this value for spacing between logo and name */
`;

const LogoText = styled.span`
    font-size: 20px; /* Adjust the font size as needed */
    color: #000; /* Change the color as needed */
    font-weight: bold; /* Adjust the font weight as needed */
`;

export const Logo = () => {
    return (
        <LogoContainer>
            <LogoLink href="/" />
            <LogoText>Beacon Box</LogoText> {/* Replace with your desired name */}
        </LogoContainer>
    );
}