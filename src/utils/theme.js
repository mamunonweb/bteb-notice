export function getLocaleTheme() {
  const themeCache = ['DARK', 'WHITE'].indexOf(localStorage.THEME) < 0

  if (themeCache) {
    const isPrefersSchemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    localStorage.THEME = isPrefersSchemeDark ? 'DARK' : 'WHITE'
  }

  return localStorage.THEME
}

export function setLocaleTheme(theme) {
  localStorage.THEME = theme
}

export function setThemeClass(isDark) {
  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
