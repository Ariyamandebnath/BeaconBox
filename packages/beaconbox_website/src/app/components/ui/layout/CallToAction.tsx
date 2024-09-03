import {
    SignInContainer,
    LinkNextToSignIn,
    StyledButton,
} from '@/app/components/ui/layout/header/styled'


export const SignIn = () => {
    return (
        <SignInContainer>
            <LinkNextToSignIn href='/api/auth/signin'> Sign in</LinkNextToSignIn>
            <a href="/api/auth/signin">
                <StyledButton>Get Started</StyledButton>
            </a>
        </SignInContainer>
    )
}