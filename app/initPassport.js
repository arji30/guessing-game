'use client'
import { passport, config } from "@imtbl/sdk";

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: "kkQK32kD8nBKbsysLlks9kLFqLXbkGwh",
  redirectUri: "https://arji30-number-guess.vercel.app",
  logoutRedirectUri: "https://arji30-number-guess.vercel.app",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});

export default passportInstance;
