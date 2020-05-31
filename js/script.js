function active() {
  const menu = document.querySelector("img#menu");
  const close = document.querySelector("img#close");
  const m1 = document.querySelector("main#m1");
  const m4 = document.querySelector("main#m4");
  const aside = document.querySelector("aside");

  menu.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
    m1.classList.toggle("hidden");
    m4.classList.toggle("hidden");
    aside.classList.toggle("hidden");

    e.preventDefault();
  });

  close.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
    m1.classList.toggle("hidden");
    m4.classList.toggle("hidden");
    aside.classList.toggle("hidden");

    e.preventDefault();
  });

  const chk = document.getElementById("switch");

  chk.addEventListener("change", () => {
    document.body.classList.toggle("light");
  });
}

active();

function totop() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } else {
  }
}

let c = document.querySelector(".clock");
let d = document.querySelector(".date");

setInterval(() => {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let date = today.toDateString();

  c.innerText = `${mktwodigits(hh)} : ${mktwodigits(mm)} : ${mktwodigits(ss)}`;
  d.innerText = date;
}, 10);

function mktwodigits(m) {
  return m.toString().padStart(2, "0");
}

window.onload = function () {
  CoronaStats();
};

function CoronaStats() {
  fetch("https://disease.sh/v2/countries/qatar")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let active = data.active;
      let todaycases = data.todayCases;
      let todaydeaths = data.todayDeaths;
      let deaths = data.deaths;
      let recovered = data.recovered;
      let tests = data.tests;
      let critical1 = data.critical;
      let total = data.cases;
      //let update = data.location.updated;

      document.getElementById("dead").innerHTML = deaths.toLocaleString("en");
      document.getElementById("dead24").innerHTML = todaydeaths.toLocaleString(
        "en"
      );
      document.getElementById("active").innerHTML = active.toLocaleString("en");
      document.getElementById("active24").innerHTML = todaycases.toLocaleString(
        "en"
      );
      document.getElementById("recovered").innerHTML = recovered.toLocaleString(
        "en"
      );
      document.getElementById("tested").innerHTML = tests.toLocaleString("en");
      document.getElementById("critical1").innerHTML = critical1.toLocaleString(
        "en"
      );
      document.getElementById("total").innerHTML = total.toLocaleString("en");
      //document.getElementById('lastupdate').innerHTML = update.substr(0, 10);
    })
    .catch(function () {
      console.log("error");
    });
  setTimeout(CoronaStats, 1800000); // update every .5 hours
}
