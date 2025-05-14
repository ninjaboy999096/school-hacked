fetch("https://cdn.jsdelivr.net/gh/ninjaboy999096/school-hacked/yeah.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
  });
