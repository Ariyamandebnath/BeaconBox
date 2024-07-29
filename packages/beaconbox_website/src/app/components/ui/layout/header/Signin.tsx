import {
    SignInContainer,
    LinkNextToSignIn,
    StyledButton,
} from '@/app/components/ui/layout/header/styled'


export const SignIn = () => {
    return (
        <SignInContainer>
            <LinkNextToSignIn href='/'> Sign in</LinkNextToSignIn>
            <a href="/">
                <StyledButton>Get Started</StyledButton>
            </a>
        </SignInContainer>
    )
}