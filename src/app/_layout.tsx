import { Slot } from 'expo-router';
import { TaskProvider } from '../contexts/TaskContext';

export default function Layout() {
  return (
    <TaskProvider>
      <Slot />
    </TaskProvider>
  );
} 