let button = document.querySelector('button')

async function lazyLoadScript() {
  const { getMyIp } = await import('./heavy-script.js')
  getMyIp()
}

button.addEventListener('click', lazyLoadScript)
