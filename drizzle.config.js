/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai-interview-mock_owner:G3LwAksvRKD8@ep-raspy-sea-a5eg6q1u.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };