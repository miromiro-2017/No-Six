import request from "superagent";

export function getWeeklyExpenses() {
  return request.get("/api/contractor/expenses/");
}

export function updateWeeklyExpenses(id, data) {
  return request.put("/api/contractor/expenses/" + id).send(data);
}

export function addWeeklyExpense(expense) {
  return request.post("/api/contractor/expenses").send(expense);
}