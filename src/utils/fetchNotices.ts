import { createEffect, createResource, createSignal } from 'solid-js'

export type Notice = {
  title: string
  date: string
  dateInMonth: string
  dateDiffInDay: string
  url: string
}

async function noticeFetcher(page: number) {
  const res = await fetch(`https://netedge.netlify.app/notice?page=${page}`)
  return (await res.json()) as Notice[]
}

export default function fetchNotices() {
  let isLast = false
  const [page, setPage] = createSignal(0)
  const [notices, setNotices] = createSignal<Notice[]>([])
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
