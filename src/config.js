const config = {
  STRIPE_KEY:
    "pk_test_51JCzpgSChv1F0QSH57P7hikSUCS6F6IDpGre5WSvIBVyJipY4i6gQAFULJzAhhOaoYaH01So5rjR6gGi5G6TGzov00yUTViAtc",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "nodejs-demo-upload",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://4jglbe3c8k.execute-api.us-east-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_FW6fu0RFP",
    APP_CLIENT_ID: "3dterr46v981kdnkdeer6jp258",
    IDENTITY_POOL_ID: "us-east-2:6d6913a6-d485-4bd3-bf1b-4d929e3cf6de",
  },
};

export default config;
