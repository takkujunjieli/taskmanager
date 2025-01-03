import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Task } from "../interfaces";

const mockTasks: Task[] = [
  { id: "1", title: "Leetcode", description: "5 questions today", status: "pending" },
  { id: "2", title: "Sleep", description: "At least 8 hours", status: "completed" },
];

export default function TaskDetailsScreen() {
  const params = useLocalSearchParams();
  const taskId = params.taskId as string;
  const router = useRouter();

  const task = mockTasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Task not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Status: {task.status}</Text>
      <Button 
        title="Edit Task" 
        onPress={() => router.push(`/edit-task?id=${taskId}`)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
});
