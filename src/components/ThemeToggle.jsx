import { createSignal, createEffect, onCleanup } from 'solid-js'

import { MoonIcon, SunIcon } from './icons'

export default function ThemeToggle() {
  if (['DARK', 'WHITE'].indexOf(localStorage.THEME) < 0) {
    localStorage.THEME = 'PREFERS_SCHEME'
  }

  const mm = window.matchMedia('(prefers-color-scheme: dark)')

  const [theme, setTheme] = createSignal(localStorage.THEME)
  const [prefersScheme, setPrefersScheme] = createSignal(
    mm.matches ? 'DARK' : 'WHITE'
  )

  function handleMedia() {
    setPrefersScheme(mm.matches ? 'DARK' : 'WHITE')
  }

  mm.addEventListener('change', handleMedia)

  onCleanup(() => {
    mm.removeEventListener('change', handleMedia)
  })

  function handleTheme(theme) {
    setTheme((localStorage.THEME = theme))
  }

  createEffect(() => {
    setDarkClass(
      (theme() === 'PREFERS_SCHEME' ? prefersScheme() : theme()) === 'DARK'
    )
  })

  const map = {
    PREFERS_SCHEME: {
      title: 'Dark',
      next: 'DARK',
      content: <MoonIcon className="m-auto" />,
    },
    DARK: {
      title: 'White',
      next: 'WHITE',
      content: <SunIcon className="m-auto" />,
    },
    WHITE: {
      title: 'Auto',
      next: 'PREFERS_SCHEME',
      content: (
        <span className="m-auto inline-block border-[12px] rounded-full border-gray-800 border-b-white border-r-white shadow" />
      ),
    },
  }

  function getMapItem() {
    return map[theme()]
  }

  return (
    <>
      <button
        title={getMapItem().title}
        onClick={() => handleTheme(getMapItem().next)}
        className="h-12 w-12 flex text-gray-500"
      >
        {getMapItem().content}
      </button>
    </>
  )
}

function setDarkClass(isDark) {
  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
