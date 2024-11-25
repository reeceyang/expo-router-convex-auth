import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/dist/react";
import { View } from "@/components/ui/view";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";

export default function Profile() {
  const user = useQuery(api.users.get);
  const { signOut } = useAuthActions();
  return (
    <View className="flex-1 p-8 gap-2">
      <Heading>Profile</Heading>
      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input variant="outline" size="md" isDisabled>
          <InputField value={user?.email} />
        </Input>
      </FormControl>

      <Button
        className="mt-auto"
        variant="outline"
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
