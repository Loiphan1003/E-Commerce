import jwt, { Secret } from "jsonwebtoken";

// Function to generate JWT token
export function generateToken(payload: any): string {
    const secretKey: Secret = "ecommerce"; // Replace with your own secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Set the token expiration time as needed
    return token;
}
