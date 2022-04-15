const project1 = "yellow"
const project2 = "purple"
const project3 = "red"
const project4 = "blue"

const focusProject = project1 //Pick your project here, changes img through jQuery

const favicon = $("link[rel~='icon']")
const navLogo = $("#nav-logo")
const biggerLogos = $(".gs-logo")
const lady = $("#os-lady")
/* <img src="img/lady-large.png" alt="sexy anime girl in tight spacesuit"
srcset="img/lady-large.png 800w, img/lady-large.png 520w, img/lady-small.png 320w" id="os-lady"> */

switch (focusProject) {
  case "yellow":
    favicon.attr("href", "img/favicon_yellow.ico")
    navLogo.attr("src", "img/logo-small-yellow.png")
    biggerLogos.each(function () {
      $(this).attr("src", "img/logo-large-yellow.png")
    })
    lady.attr("src", "img/lady-large-yellow.png")
    lady.attr(
      "srcset",
      "img/lady-large-yellow.png 800w, img/lady-mid-yellow.png 520w, img/lady-small-yellow.png 320w"
    )
    document.documentElement.style.setProperty("--accent", "#FCEE21")
    document.documentElement.style.setProperty("--accent-lighter", "#fced210a")
    break
  case "purple":
    favicon.attr("href", "img/favicon_purple.ico")
    navLogo.attr("src", "img/logo-small-purple.png")
    biggerLogos.each(function () {
      $(this).attr("src", "img/logo-large-purple.png")
    })
    lady.attr("src", "img/lady-large-purple.png")
    lady.attr(
      "srcset",
      "img/lady-large-purple.png 800w, img/lady-mid-purple.png 520w, img/lady-small-purple.png 320w"
    )

    document.documentElement.style.setProperty("--accent", "#6d51ff")
    document.documentElement.style.setProperty("--accent-lighter", "#6d51ff2f")
    break
  case "red":
    favicon.attr("href", "img/favicon_red.ico")
    navLogo.attr("src", "img/logo-small-red.png")
    biggerLogos.each(function () {
      $(this).attr("src", "img/logo-large-red.png")
    })
    lady.attr("src", "img/lady-large-red.png")
    lady.attr(
      "srcset",
      "img/lady-large-red.png 800w, img/lady-mid-red.png 520w, img/lady-small-red.png 320w"
    )
    document.documentElement.style.setProperty("--accent", "#E61929")
    document.documentElement.style.setProperty("--accent-lighter", "#E619292f")

    break
  case "blue":
    favicon.attr("href", "img/favicon_blue.ico")
    navLogo.attr("src", "img/logo-small-blue.png")
    biggerLogos.each(function () {
      $(this).attr("src", "img/logo-large-blue.png")
    })
    lady.attr("src", "img/lady-large-blue.png")
    lady.attr(
      "srcset",
      "img/lady-large-blue.png 800w, img/lady-mid-blue.png 520w, img/lady-small-blue.png 320w"
    )
    document.documentElement.style.setProperty("--accent", "#008dff")
    document.documentElement.style.setProperty("--accent-lighter", "#008dff2f")

    break
  default:
    alert("Error, please pick an existing project.")
    break
}
