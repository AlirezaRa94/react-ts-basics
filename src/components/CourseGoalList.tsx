import { type CourseGoal as courseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type courseGoalListProps = {
  goals: courseGoalType[];
};

function CourseGoalList({ goals }: courseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
