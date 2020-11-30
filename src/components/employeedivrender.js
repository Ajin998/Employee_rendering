// Employee card will be rendered.
import { data } from "./data.js";

export const employeeDiv = (employee) => {
  let employeeCard = document.createElement("div");
  employeeCard.innerHTML = `<div class="employee-image">
          <img src="${employee.imageUrl}" alt="" />
        </div>
        <p id="emp${employee.id}"><i>${employee.firstName} ${employee.lastName}</i></p>
        <p><b>${employee.company}</b</p>`;
  employeeCard.className = "employee-card";

  //EVENT LISTENER

  return employeeCard;
};
