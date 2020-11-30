// Fetch data and fll the object
const BASE_URL = " https://niravkpatel28.github.io/json-data-server/employees/";
const endpoint = "employees.json";

//IIFE call there itself--> (function)()
//data contains a promise (response.data will return promise)
export const data = (async () => {
  let response = await axios.get(BASE_URL+endpoint);
  return response.data;
})();
