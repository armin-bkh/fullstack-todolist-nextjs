import { http } from "@/services/httpServices";
import { TFormData } from "@/types/formData";

export function editTodo(id: number | string, todo: TFormData) {
  return http.put(`/todos/${id}`, todo);
}
