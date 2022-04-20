//Dark - Light theme toggle
const themeToggle = document.getElementById("theme-toggle")

themeToggle.addEventListener("click", () => {
  ChangeTheme()
})



function ChangeTheme() {

  if (document.querySelector("html").dataset.darkTheme == "true") {
    ChangeThemeLight()
    SetThemeCookie("light")
  } else {
    ChangeThemeDark()
    SetThemeCookie("dark")
  }
}

function ChangeThemeLight() {
  everything.forEach(item => {
    item.dataset.darkTheme = "false"
  })
}

function ChangeThemeDark() {
  everything.forEach(item => {
    item.dataset.darkTheme = "true"
  })
}

const SetThemeCookie = (theme) => SetCookie("theme",theme,30)

const PrefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
const CookieDark = () => GetCookie("theme") == "" ? undefined : GetCookie("theme") == "dark" ? true : false

function DetermineInitialTheme() {

  if (CookieDark() == undefined) {
    if (PrefersDark()) {
      ChangeThemeDark()
    }else{
      ChangeThemeLight()
    }
  }
  else{
    if(CookieDark()){
      ChangeThemeDark()
    }
    else{
      ChangeThemeLight()
    }
  }
}

ChangeThemeDark()
DetermineInitialTheme()

/*I have set the initial theme of body to dark.
The reason behind this is:
if you are a dark theme user, initial background color of body needs to be black. 
Otherwise, you experience a flash of white screen before page loads and runs the script.

To make the initial background color black, I made initial theme of body, dark. 
This way, the body comes in black background and prevents light flash.

If you set the background black, you should set everything to dark too. 
To do that either I could give every element dark mode in HTML, which is a ton of work and makes HTML cluttered
or I could do it this way. Running ChangeThemeDark() on load.*/