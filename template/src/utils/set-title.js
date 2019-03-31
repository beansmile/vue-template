import { rte } from './runtime-env'

export default function setTitle(title) {
  document.title = title
  if (rte.isIOS) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.setAttribute('src', 'about:blank')
    const onLoad = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', onLoad)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', onLoad)
    document.body.appendChild(iframe)
  }
}
