import { createSignal, createEffect } from 'solid-js'

import { MoonIcon, SunIcon } from './icons'
import { getLocaleTheme, setLocaleTheme, setThemeClass } from './theme'

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal(getLocaleTheme())

  function handleTheme() {
    setTheme(theme() === 'DARK' ? 'WHITE' : 'DARK')
    setLocaleTheme(theme())
  }

  createEffect(() => {
    setThemeClass(theme() === 'DARK')
  })

  return (
    <>
      <button
        title={theme() === 'DARK' ? 'Dark theme' : 'White theme'}
        onClick={() => handleTheme()}
        className="p-2 rounded-full text-primary-500"
      >
        {theme() === 'DARK' ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  )
}
