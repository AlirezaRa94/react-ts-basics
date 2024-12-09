// import { type PropsWithChildren} from "react";
import { type ReactNode } from "react";

// method 1
type CourseGoalProps = {
  title: string;
  children: ReactNode;
};

// method 2
// type CourseGoalProps = PropsWithChildren<{ title: string }>;

function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
