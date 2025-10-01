function goBack() {
  console.log("[v0] goBack function called")
  try {
    window.open("https://engplay.com.br/", "_self")
  } catch (e) {
    window.location.href = "https://engplay.com.br/"
  }
}

function returnToSite() {
  console.log("[v0] returnToSite function called")
  try {
    window.open("https://engplay.com.br/", "_self")
  } catch (e) {
    window.location.href = "https://engplay.com.br/"
  }
}

console.log("[v0] thank-you.js loaded successfully")
