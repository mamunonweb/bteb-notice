import { createSignal, onMount } from 'solid-js'

export default function useTheme() {
  const [theme, setTheme] = createSignal('light')

  onMount(() => setTheme(isDark() ? 'dark' : 'light'))

  function toggleTheme() {
    const theme = isDark() ? 'light' : 'dark'

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setTheme((localStorage.theme = theme))
  }

  return [theme, toggleTheme]
}

function isDark() {
  if ('theme' in localStorage) {
    return localStorage.theme === 'dark'
  } else {
    return matchMedia('(prefers-color-scheme: dark)').matches
  }
}
