// import data
// render
import { data } from "./components/data.js";
import { employeeDiv } from "./components/employeedivrender.js";



  const root = document.getElementById("root");
  data.then((emp) => {
    emp.forEach((employee) => {
      root.appendChild(employeeDiv(employee));
    });
  });

