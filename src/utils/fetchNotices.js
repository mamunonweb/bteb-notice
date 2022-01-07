import { createSignal, createEffect } from 'solid-js'

export default function fetchNotices() {
  let empty = false
  const [page, setPage] = createSignal(0)
  const [loading, setLoading] = createSignal(false)
  const [notices, setNotices] = createSignal([])

  createEffect(async () => {
    setLoading(true)
    const newNotices = await fetch(
      `https://notice.opps.workers.dev/${page()}`
    ).then(res => res.json())

    if (newNotices.length === 0) {
      empty = true
    }

    setNotices([...notices(), ...newNotices])
    setLoading(false)
  })

  function fetchNextChunk() {
    if (loading() === false && empty === false) {
      setPage(page() + 1)
    }
  }

  return { notices, loading, fetchNextChunk }
}
