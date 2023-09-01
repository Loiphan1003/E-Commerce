/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
    env: {
        GOOGLE_CLIENT_ID: "255487252052-a98qu2vknkcq08hj5flukfmod37ckqr5.apps.googleusercontent.com",
        GOOGLE_SECRET_ID: "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"
    }
};

module.exports = nextConfig;
