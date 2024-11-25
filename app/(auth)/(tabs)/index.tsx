import { Heading } from "@/components/ui/heading";
import { View } from "@/components/ui/view";
import { ScrollView } from "@/components/ui/scroll-view";
import { api } from "@/convex/_generated/api";
import { HStack } from "@/components/ui/hstack";
import { useMutation, useQuery } from "convex/react";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const setIsCompleted = useMutation(api.tasks.setIsCompleted);
  const addTask = useMutation(api.tasks.add);
  const [newTaskText, setNewTaskText] = useState("");

  const onSubmitNewTask = () => {
    addTask({ text: newTaskText });
    setNewTaskText("");
  };

  return (
    <View className="flex-1 p-8 gap-2">
      <Heading>Home</Heading>
      <HStack className="gap-2">
        <Input variant="outline" size="md">
          <InputField
            onSubmitEditing={onSubmitNewTask}
            onChangeText={setNewTaskText}
            placeholder="Enter new task here..."
            value={newTaskText}
            blurOnSubmit={false}
          />
        </Input>
        <Button onPress={onSubmitNewTask}>
          <ButtonText>Add</ButtonText>
        </Button>
      </HStack>
      <ScrollView className="flex-1 h-full">
        <VStack className="flex gap-2">
          {tasks?.map(({ _id, text, isCompleted }) => (
            <HStack key={_id}>
              <Checkbox
                size="md"
                value={""}
                isChecked={isCompleted}
                onChange={(isCompleted) =>
                  setIsCompleted({ taskId: _id, isCompleted })
                }
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>{text}</CheckboxLabel>
              </Checkbox>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </View>
  );
}
