const container = document.getElementById("menu");
fetch("/components/menu.html")
  .then((response) => response.text())
  .then((content) => {
    container.innerHTML = content;
  });
