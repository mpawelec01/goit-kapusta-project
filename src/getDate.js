export function getDate() {
  const today = new Date();
  const day = `${today.getDate()}`.padStart(2, "0");
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const year = today.getFullYear();
  return [day, month, year].join(".");
}
