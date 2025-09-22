export interface Student {
  id: string;
  name: string;
  age: number;
  gender: "Nam" | "Nữ";
  birthday: string;
  hometown: string;
  address: string;
}

export type ActionType =
  | { type: "ADD_STUDENT"; payload: Student }
  | { type: "DELETE_STUDENT"; payload: Student }
  | { type: "SEARCH_STUDENT"; payload: string };
