const titleinput = document.querySelector("#id_title");
const sluginput = document.querySelector("#id_slug");

slugify = (val) => {
  return val
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-and-")
    .replace(/[\s\W-]+/g, "-");
};
titleinput.addEventListener("keyup", (e) => {
  sluginput.setAttribute("value", slugify(titleinput.value));
});
