
function showConfirmModal() {
  document.getElementById("confirmModal").style.display = "flex"
  document.body.style.overflow = "hidden" 
}

function closeModal() {
  document.getElementById("confirmModal").style.display = "none"
  document.body.style.overflow = "auto" 
}

function proceedWithCancellation() {
  closeModal()
  window.location.href = "cancellation-complete.html"
}


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("confirmModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }
})


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})
