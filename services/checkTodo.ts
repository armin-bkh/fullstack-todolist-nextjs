import { http } from "@/services/httpServices";

export function checkTodo(id: number | string) {
  return http.put(`/todos/${id}`);
}
