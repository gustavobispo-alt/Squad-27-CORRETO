console.log("[v0] Script.js loaded successfully")

function goBack() {
  console.log("[v0] Going back to Engplay website")
  window.location.href = "https://engplay.com.br/"
}

function confirmCancel() {
  console.log("[v0] User confirmed cancellation")
  window.location.href = "cancellation-complete.html"
}

function continueSubscription() {
  console.log("[v0] User chose to continue to feedback")
  window.location.href = "feedback.html"
}


document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, initializing page effects")


  const cards = document.querySelectorAll(".comparison-card")
  console.log("[v0] Found", cards.length, "comparison cards")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })


  const offerCard = document.querySelector(".offer-card")
  if (offerCard) {
    console.log("[v0] Offer card found, adding pulse effect")
    setInterval(() => {
      offerCard.style.transform = "scale(1.02)"
      setTimeout(() => {
        offerCard.style.transform = "scale(1)"
      }, 200)
    }, 3000)
  } else {
    console.log("[v0] Offer card not found")
  }

  const testElement = document.querySelector(".container")
  if (testElement) {
    const styles = window.getComputedStyle(testElement)
    console.log("[v0] Container max-width:", styles.maxWidth)
    console.log("[v0] Container background:", styles.backgroundColor)
  }
})


function navigateTo(page) {
  console.log("[v0] Navigating to:", page)

  document.body.style.opacity = "0.7"

  setTimeout(() => {
    window.location.href = page
  }, 300)
}

function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
