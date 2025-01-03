import React, { useState, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTaskContext } from '../contexts/TaskContext';
import { TaskItem } from '../components/TaskItem';
import { AddTaskButton } from '../components/AddTaskButton';
import { SearchBar } from '../components/SearchBar';
import { commonStyles } from '../styles/common';

export default function TaskListScreen() {
  const { tasks, deleteTask, toggleTaskStatus } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter tasks based on search query
  // Using useMemo to optimize performance by preventing unnecessary recalculations
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => 
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  return (
    <View style={commonStyles.container}>
      {/* Search bar for filtering tasks */}
      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {/* List of tasks with add button at the bottom */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem 
            task={item}
            onToggleStatus={toggleTaskStatus}
            onDelete={deleteTask}
          />
        )}
        ListFooterComponent={AddTaskButton}
        ListFooterComponentStyle={commonStyles.footer}
      />
    </View>
  );
} 