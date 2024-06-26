let textArea = document.getElementById('texto')
let paragraph = document.getElementById('texto-encriptado')

const encriptar = () => {
  const text = textArea.value

  const replacedText = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  paragraph.innerHTML = replacedText
}

const desencriptar = () => {
  const text = textArea.value

  const decriptedText = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  paragraph.innerHTML = decriptedText
}

const footerParagraph = document.getElementById('footer-copy')
const actualYear = new Date().getFullYear()

let footerText = `Copy \u00A9 ${actualYear} Julian Andres Penagos`
footerParagraph.innerHTML = footerText