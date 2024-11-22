import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/dist/react";
import { View } from "@/components/ui/view";
import { Heading } from "@/components/ui/heading";

export default function Profile() {
  const { signOut } = useAuthActions();
  return (
    <View className="flex-1 p-8 gap-2">
      <Heading>Profile</Heading>

      <Button
        onPress={async () => {
          await signOut();
          router.push("/");
        }}
      >
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </View>
  );
}
