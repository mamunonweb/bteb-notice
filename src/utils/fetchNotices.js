import { createEffect, createResource, createSignal } from 'solid-js'

async function noticeFetcher(page) {
  const res = await fetch(`https://netedge.netlify.app/notice?page=${page}`)
  return await res.json()
}

export default function fetchNotices() {
  let isLast = false
  const [page, setPage] = createSignal(0)
  const [notices, setNotices] = createSignal([])
  const [pageNotices] = createResource(page, noticeFetcher)

  const loading = () => pageNotices.loading

  createEffect(async () => {
    const newNotices = pageNotices()

    if (newNotices) {
      setNotices(notices => [...notices, ...newNotices])

      if (newNotices.length === 0) {
        isLast = true
      }
    }
  })

  function next() {
    if (!loading() && !isLast) {
      setPage(page() + 1)
    }
  }

  return { notices, loading, next }
}
