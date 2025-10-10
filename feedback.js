
function goBack() {
  window.location.href = "index.html"
}

function confirmCancel() {
  window.location.href = "cancellation-complete.html"
}

function closeModal() {
  const modal = document.getElementById("confirmModal")
  if (modal) {
    modal.style.display = "none"
  }
}

function proceedWithCancellation() {
  console.log("[v0] Redirecionando para cancellation-complete.html")
  window.location.href = "cancellation-complete.html"
}

function submitFeedback() {

  const email = document.querySelector(".email-input").value
  const selectedReasons = []
  const checkboxes = document.querySelectorAll('input[name="reason"]:checked')

  checkboxes.forEach((checkbox) => {
    selectedReasons.push(checkbox.value)
  })


  if (!email) {
    alert("Por favor, digite seu e-mail.")
    return
  }

  if (selectedReasons.length === 0) {
    alert("Por favor, selecione pelo menos um motivo.")
    return
  }


  console.log("Feedback submitted:", {
    email: email,
    reasons: selectedReasons,
  })

  window.location.href = "offer.html"
}

document.addEventListener("DOMContentLoaded", () => {

  console.log("Feedback page loaded")
})
