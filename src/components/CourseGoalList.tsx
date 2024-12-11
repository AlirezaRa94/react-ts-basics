import { type CourseGoal as courseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type courseGoalListProps = {
  goals: courseGoalType[];
  onDelete: (goalId: number) => void;
};

function CourseGoalList({ goals, onDelete }: courseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDeleteGoal={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
