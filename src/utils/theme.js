export function getLocaleTheme() {
  const themeCached = ['DARK', 'WHITE'].includes(localStorage.THEME)

  if (!themeCached) {
    localStorage.THEME = isPrefersSchemeDark() ? 'DARK' : 'WHITE'
  }

  return localStorage.THEME
}

export function setLocaleTheme(theme) {
  localStorage.THEME = theme
}

export function setThemeClass(theme) {
  if (theme === 'DARK') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function isPrefersSchemeDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
