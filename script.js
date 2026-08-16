// Prevent Chrome from restoring the old scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

window.scrollTo(0, 0)

async function loadComponent (id, file) {
  try {
    const response = await fetch(file)

    const html = await response.text()

    document.getElementById(id).innerHTML = html
  } catch (err) {
    console.error(err)
  }
}

const insidePages = window.location.pathname.includes('/pages/')

if (document.getElementById('navbar')) {
  loadComponent(
    'navbar',

    insidePages ? '../components/navbar.html' : 'components/navbar.html'
  )
}

if (document.getElementById('footer')) {
  loadComponent(
    'footer',

    insidePages ? '../components/footer.html' : 'components/footer.html'
  )
}
