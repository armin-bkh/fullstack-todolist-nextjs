import { http } from "@/services/httpServices";

export function deleteTodo(id: number | string) {
  return http.delete(`/todos/${id}`);
}
