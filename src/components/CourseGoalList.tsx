import { type CourseGoal as courseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type courseGoalListProps = {
  goals: courseGoalType[];
  onDeleteGoal: (goalId: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: courseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
