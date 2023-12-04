const footer = document.getElementById("footer");
fetch("/components/footer.html")
  .then((response) => response.text())
  .then((content) => {
    footer.innerHTML = content;
  });
