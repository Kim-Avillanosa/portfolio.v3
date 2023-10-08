export const scrollToMyDiv = (id: string) => {
  const myDiv = document.getElementById(id);
  if (myDiv) {
    myDiv.scrollIntoView({ behavior: "smooth" });
  }
};
