export interface StudentI {
  id: number;
  name: string;
  age: number;
  grade: string;
}

export interface InitialStateType {
  status: "idle" | "success" | "pending" | "failed";
  data: StudentI[];
  error: null | undefined | string;
}
