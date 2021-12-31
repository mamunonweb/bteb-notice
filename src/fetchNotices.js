import { createSignal, createEffect } from 'solid-js'

export default function fetchNotices() {
  const [page, setPage] = createSignal(0)
  const [loading, setLoading] = createSignal(false)
  const [notices, setNotices] = createSignal([])
  
  createEffect(async () => {
    setLoading(true)
    const newNotices = await fetch(`https://notice.opps.workers.dev/${page()}`).then(res => res.json())
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
