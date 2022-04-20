const body = document.body
const everything = [...document.getElementsByTagName("*")]

const header = document.querySelector("body > header")

const hero = document.getElementById("hero")
const products = document.getElementById("products")
const about = document.getElementById("about")
const contact = document.getElementById("contact")

const sections = [hero, products, about, contact]



//Cookie functions from w3schools

function SetCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/ ; SameSite=Lax";
}

function GetCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
