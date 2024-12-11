import { type ReactNode } from "react";

import { type CourseGoal as courseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type courseGoalListProps = {
  goals: courseGoalType[];
  onDeleteGoal: (goalId: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: courseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Why not add one?
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode='warning'>
        You have a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
