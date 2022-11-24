export const env = {
  facebook: {
    clientId: process.env.FB_CLIENT_ID!,
    clientSecret: process.env.FB_CLIENT_SECRET!,
    facebookToken: process.env.FB_TOKEN!
  },
  s3: {
    accessKey: process.env.AWS_S3_ACCESS_KEY!,
    secret: process.env.AWS_S3_SECRET!,
    bucket: process.env.AWS_S3_BUCKET!
  },
  port: process.env.PORT!,
  jwtSecret: process.env.JWT_SECRET!
}
