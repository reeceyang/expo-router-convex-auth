import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signIn" | "signUp" | { email: string }>(
    "signIn",
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    void signIn("password", {
      email,
      password,
      flow: step,
    }).then(() => setStep({ email }));
  };
  const [code, setCode] = useState<string>("");
  return step === "signIn" || step === "signUp" ? (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={step === "signIn" ? "Sign in" : "Sign up"}
        onPress={handleSubmit}
      />
      <Button
        onPress={() => {
          setStep(step === "signIn" ? "signUp" : "signIn");
        }}
        title={step === "signIn" ? "Sign up instead" : "Sign in instead"}
      />
    </View>
  ) : (
    <View>
      <TextInput placeholder="Code" value={code} onChangeText={setCode} />
      <Button
        title="Continue"
        onPress={() => {
          void signIn("password", {
            email: step.email,
            code,
            flow: "email-verification",
          });
        }}
      />
      <Button title="Cancel" onPress={() => setStep("signIn")} />
    </View>
  );
}
