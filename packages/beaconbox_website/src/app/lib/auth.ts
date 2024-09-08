import db from '../../../../beaconbox_db/src';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Define authentication options
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "12345654321" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials: any) {
                // TODO: Implement Zod validation and OTP validation here

                // Find user by phone number
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    // Compare the provided password with the hashed password stored in the database
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        // Authentication successful
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.number // Using phone number as email here
                        };
                    }
                    // Authentication failed: Invalid password
                    return null;
                }

                try {
                    // Create a new user if not existing
                    const hashedPassword = await bcrypt.hash(credentials.password, 10); // Hash the new password before storing
                    const user = await db.user.create({
                        data: {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    });

                    // TODO: Send an OTP to the user's phone number for email validation

                    // Return newly created user details
                    return {
                        id: user.id.toString(),
                        name: user.name,
                        email: user.number // Using phone number as email here
                    };
                } catch (e) {
                    console.error("Error creating user:", e);
                    return null;
                }
            }
        })
    ] 
};
