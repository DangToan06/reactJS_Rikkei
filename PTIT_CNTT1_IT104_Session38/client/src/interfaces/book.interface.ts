export interface BookI {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
}

export interface InitialStateType {
  status: "idle" | "pending" | "success" | "failed";
  data: BookI[];
  error: null | undefined | string;
}
