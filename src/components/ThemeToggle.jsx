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
        title={theme() === 'DARK' ? 'Dark' : 'White'}
        onClick={() => handleTheme()}
        className="h-12 w-12 flex text-gray-500"
      >
        {theme() === 'DARK' ? (
          <MoonIcon className="m-auto" />
        ) : (
          <SunIcon className="m-auto" />
        )}
      </button>
    </>
  )
}
