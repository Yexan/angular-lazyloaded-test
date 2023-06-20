export const getConfigUrls = (): any => {
  let DOMElement: any = document.querySelector('#app-root')
  if (!DOMElement) {
    // for unit testing
    DOMElement = {
      getAttribute() {
        return ''
      }
    }
  }

  const mode = DOMElement.getAttribute('data-mode')


  return {
    mode
  }
}