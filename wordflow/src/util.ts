export const updateLocalStorage = () => {
  if (localStorage.getItem("keyboard") === null) {
    localStorage.setItem("keyboard", "true");
  }
};
