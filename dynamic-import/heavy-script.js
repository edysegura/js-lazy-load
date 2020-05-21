export async function getMyIp() {
  const p = document.createElement('p')
  const response = await fetch('https://httpbin.org/ip')
  const ip = await response.json()

  p.textContent = ip.origin
  document.body.appendChild(p)
}
