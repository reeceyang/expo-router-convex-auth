import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/react";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Pressable } from "@/components/ui/pressable";
import BackButton from "@/components/BackButton";
import { VStack } from "@/components/ui/vstack";
import { useConvexAuth } from "convex/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();

  const handleSubmit = async () => {
    setIsButtonLoading(true);
    await signIn("password", {
      email,
      password,
      flow: "signIn",
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <VStack className="flex-1 p-8 gap-2">
      <Pressable onPress={router.back} className="-ml-4">
        <BackButton />
      </Pressable>
      <Heading>Welcome back!</Heading>
      <Input variant="underlined">
        <InputField
          autoCapitalize="none"
          value={email}
          placeholder="Email..."
          onChangeText={setEmail}
          autoFocus={!email}
        />
      </Input>
      <Input variant="underlined">
        <InputField
          value={password}
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={setPassword}
          autoFocus={Boolean(email)}
        />
      </Input>

      <Button
        onPress={handleSubmit}
        className="mt-auto"
        isDisabled={isButtonLoading}
      >
        <ButtonText>Log in with email</ButtonText>
        {isButtonLoading && <Spinner className="ml-1" />}
      </Button>
    </VStack>
  );
}
