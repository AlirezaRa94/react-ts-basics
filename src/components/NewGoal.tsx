import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (title: string, description: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredTitle = titleInput.current!.value;
    const enteredDescription = descriptionInput.current!.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      alert("Please enter a valid title and description (non-empty values).");
      return;
    }

    onAddGoal(enteredTitle, enteredDescription);

    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='title'>Your Goal</label>
        <input type='text' id='title' ref={titleInput} />
      </p>
      <p>
        <label htmlFor='description'>Short Summary</label>
        <input type='text' id='description' ref={descriptionInput}></input>
      </p>
      <button type='submit'>Add Goal</button>
    </form>
  );
}

export default NewGoal;
