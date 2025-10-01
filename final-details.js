
function goBack() {
  window.location.href = "offer.html"
}

function confirmCancel() {
  window.location.href = "cancellation-complete.html"
}

function confirmFinalCancellation() {
  const email = document.getElementById("email").value
  const plan = document.getElementById("plan").value

  if (!email || !plan) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return
  }

  if (!isValidEmail(email)) {
    alert("Por favor, insira um e-mail válido.")
    return
  }


  window.location.href = "success.html"
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
