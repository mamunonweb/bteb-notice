import { createSignal, createEffect } from 'solid-js'

export default function fetchNotices() {
  const [page, setPage] = createSignal(1)
  const [loading, setLoading] = createSignal(false)
  const [notices, setNotices] = createSignal([])

  createEffect(async () => {
    setLoading(true)
    const res = await fetch(`https://biit.tk/api/bnotice/?page=${page()}`)
    const newNotices = await res.json()
    setNotices([...notices(), ...newNotices])
    setLoading(false)
  })

  function nextChunk() {
    if (loading() === false) {
      setPage(page() + 1)
    }
  }

  return { notices, loading, nextChunk }
}
