import { useState } from "react";

import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    const newGoal: CourseGoal = {
      title: title,
      description: description,
      id: Math.random(),
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(goalId: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
