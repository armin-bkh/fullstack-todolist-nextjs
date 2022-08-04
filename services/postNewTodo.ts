import { TFormData } from "@/types/formData";
import { http } from "@/services/httpServices";

export function postNewTodo(todo: TFormData) {
  return http.post("/todos", todo);
}
