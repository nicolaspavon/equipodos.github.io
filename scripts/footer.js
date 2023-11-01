const container = document.getElementById("footer");
fetch("/components/footer.html")
  .then((response) => response.text())
  .then((content) => {
    container.innerHTML = content;
  });
