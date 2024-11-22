import { Link, Stack } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <VStack className="flex-1 p-8 gap-2">
        <Heading>Page doesn't exist.</Heading>
        <Link href="/" asChild>
          <Button>
            <ButtonText>Go back</ButtonText>
          </Button>
        </Link>
      </VStack>
    </>
  );
}
