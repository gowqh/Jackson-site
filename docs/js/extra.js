document.addEventListener("DOMContentLoaded", function () {
  var toc = document.querySelector("nav.toc");
  var content = document.querySelector(".md-content");
  if (toc && content) {
    var headers = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach(function (header) {
      var link = document.createElement("a");
      link.href = "#" + header.id;
      link.textContent = header.textContent;
      var listItem = document.createElement("li");
      listItem.appendChild(link);
      toc.appendChild(listItem);
    });
  }
});
