import {
    SignInContainer,
    LinkNextToSignIn,
    StyledButton,
} from '@/app/components/ui/layout/header/styled'
import { signIn } from "next-auth/react";


export const SignIn = () => {
    return (
        <SignInContainer>
            <LinkNextToSignIn onClick ={()=> signIn()}> Sign in</LinkNextToSignIn>
            <StyledButton onClick={()=>signIn()}>Get Started</StyledButton>
            
        </SignInContainer>
    )
}