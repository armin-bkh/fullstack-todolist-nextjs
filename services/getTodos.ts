import { http } from "@/services/httpServices";

export function getTodos() {
  return http.get("/todos");
}
