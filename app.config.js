module.exports = {
  expo: {
    name: "Expo Router Convex Auth Example",
    slug: "expo-router-convex-auth",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/images/SplashScreen.png",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.example.expo-router-convex-auth",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.example.expo_router_convex_auth",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-build-properties",
        {
          ios: {
            deploymentTarget: "14.0",
          },
        },
      ],
      "expo-font",
      "expo-secure-store",
    ],
    scheme: "expo-router-convex-auth",
    extra: {
      router: {
        origin: false,
      },
    },
    owner: "reeceyang",
    runtimeVersion: {
      policy: "appVersion",
    },
    autoIncrement: true,
    experiments: {
      typedRoutes: true,
    },
  },
};
