// import { type PropsWithChildren} from "react";
import { type ReactNode } from "react";

// method 1
type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (goalId: number) => void;
};

// method 2
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;
