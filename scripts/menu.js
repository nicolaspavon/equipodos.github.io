const menu = document.getElementById("menu");
fetch("/components/menu.html")
  .then((response) => response.text())
  .then((content) => {
    menu.innerHTML = content;
  });
