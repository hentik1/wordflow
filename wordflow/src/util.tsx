export const updateLocalStorage = () => {
  if (localStorage.getItem("keyboard") === null) {
    localStorage.setItem("keyboard", "true");
  }
  if (localStorage.getItem("visualclock") === null) {
    localStorage.setItem("visualclock", "true");
  }
};
