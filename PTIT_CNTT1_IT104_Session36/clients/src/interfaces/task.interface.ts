export interface TaskI {
  id: number;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

export interface InitialStateType {
  status: "idle" | "pending" | "success" | "failed";
  data: TaskI[];
  error: null | undefined | string;
  //   task: Task | null;
}
