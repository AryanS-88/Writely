console.log('Email Writer Extension Loaded')

function injectButton() {}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    const addedNodes = Array.from(mutation.addedNodes)
    const hasComposeElements = addedNodes.some((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return false
      return (
        node.matches('.aDh, .btC [role="dialog"]') ||
        node.querySelector('.aDh, .btC [role="dialog"]')
      )
    })

    if (hasComposeElements) {
      console.log('Compose elements detected')
      setTimeout(injectButton, 500)
    }
  }
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
