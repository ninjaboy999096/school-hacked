fetch("https://raw.githubusercontent.com/ninjaboy999096/school-hacked/main/yeah.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
  });
