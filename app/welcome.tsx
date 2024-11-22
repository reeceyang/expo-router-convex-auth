import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { useConvexAuth } from "convex/react";
import { Link, Redirect } from "expo-router";

export default function Welcome() {
  const { isAuthenticated } = useConvexAuth();

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <VStack className="flex-1 gap-2 p-6">
      <Heading>Welcome</Heading>
      <Link href="/sign-up" asChild>
        <Button className="mt-auto">
          <ButtonText>Get started</ButtonText>
        </Button>
      </Link>
      <Link href="/sign-in" asChild>
        <Button variant="outline">
          <ButtonText>Login</ButtonText>
        </Button>
      </Link>
    </VStack>
  );
}
