import { Text } from "./ui/text";
import { HStack } from "./ui/hstack";
import { ChevronLeftIcon, Icon } from "./ui/icon";

export default function BackButton() {
  return (
    <HStack className="items-center">
      <Icon as={ChevronLeftIcon} className="m-2 w-6 h-6" />
      <Text>Back</Text>
    </HStack>
  );
}
