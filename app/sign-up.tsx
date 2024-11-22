import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/react";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import BackButton from "@/components/BackButton";
import { VStack } from "@/components/ui/vstack";
import { useConvexAuth } from "convex/react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"signUp" | "email-verification">("signUp");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { signIn } = useAuthActions();
  const { isAuthenticated } = useConvexAuth();

  const handleSubmit = async () => {
    setIsButtonLoading(true);
    await signIn("password", {
      email,
      password,
      flow: step,
    }).then(() => setStep("email-verification"));
    setIsButtonLoading(false);
  };

  const onPressVerify = async () => {
    setIsButtonLoading(true);
    await signIn("password", {
      email,
      code,
      flow: step,
    });
    setIsButtonLoading(false);
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
      {step === "signUp" ? (
        <>
          <Heading>Sign up</Heading>
          <Input variant="underlined">
            <InputField
              autoCapitalize="none"
              value={email}
              placeholder="Email..."
              onChangeText={setEmail}
              autoFocus
            />
          </Input>
          <Input variant="underlined">
            <InputField
              value={password}
              placeholder="Password..."
              placeholderTextColor="#000"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </Input>
          <Button
            onPress={handleSubmit}
            className="mt-auto"
            isDisabled={isButtonLoading}
          >
            <ButtonText>Sign up with email</ButtonText>
            {isButtonLoading && <Spinner className="ml-1" />}
          </Button>
        </>
      ) : (
        <>
          <Heading>Verify your email</Heading>
          <Text>Enter the code we sent to your email</Text>
          <Input variant="underlined">
            <InputField
              value={code}
              placeholder="Code..."
              onChangeText={setCode}
            />
          </Input>
          <Button
            onPress={onPressVerify}
            className="mt-auto"
            isDisabled={isButtonLoading}
          >
            <ButtonText>
              Verify email
              {isButtonLoading && <Spinner className="ml-1" />}
            </ButtonText>
          </Button>
          <Button onPress={() => setStep("signUp")}>
            <ButtonText>Cancel</ButtonText>
          </Button>
        </>
      )}
    </VStack>
  );
}
