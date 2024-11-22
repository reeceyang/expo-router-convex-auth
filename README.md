# Expo Router Convex Auth Example

An example of using Convex Auth with Expo Router and gluestack-ui components.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

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

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
