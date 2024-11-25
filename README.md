# Expo Router Convex Auth Example

An example of using [Convex Auth](https://labs.convex.dev/auth) with [Expo Router](https://docs.expo.dev/router/introduction/) and [gluestack-ui](https://gluestack.io/) components. This app uses the [Passwords](https://labs.convex.dev/auth/config/passwords) authentication method with email verification using the [Resend](https://resend.com/) email provider. 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). You can try out the public preview at [expo-router-convex-auth.vercel.app](https://expo-router-convex-auth.vercel.app/), or build the Android or iOS apps following the instructions below.

![Screenshot_1732315260](https://github.com/user-attachments/assets/a6067428-a310-4cb7-a8a0-abe020d263cc)
![Screenshot_1732315440](https://github.com/user-attachments/assets/4607e45d-53b0-43a8-9a1d-d8dba4e30b1f)

## Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Set up the Convex project

   ```bash
   npx convex dev
   ```

3. Set up Convex Auth and environment variables

   ```bash
   npx @convex-dev/auth
   ```

   Set the `SITE_URL` environment variable (https://labs.convex.dev/auth/setup/manual#configure-site_url):
   > OTP providers require a SITE_URL variable even though the value is not used. Set this to a placeholder value if using OTPs with React Native:

   ```bash
   npx convex env set SITE_URL http://localhost:3000
   ```

   Sign up for [Resend](https://resend.com/), obtain your API key, and set the `AUTH_RESEND_KEY` environment variable:

   ```bash
   npx convex env set AUTH_RESEND_KEY yourresendkey
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).
