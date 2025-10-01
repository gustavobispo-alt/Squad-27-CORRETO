function goBack() {
  window.history.back()
}

function returnToSite() {

  alert("Redirecionando para o site principal da Engplay...")
  // window.location.href = 'https://engplay.com.br'; // Descomente quando tiver o URL real
}


document.addEventListener("DOMContentLoaded", () => {
  const returnBtn = document.querySelector(".return-btn")

  returnBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  returnBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})
