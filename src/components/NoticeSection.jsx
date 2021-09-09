import { For } from 'solid-js'

import NoticeItem from './NoticeItem'

import fetchNotices from '../fetchNotices'
import onScrollBottom from '../onScrollBottom'

export default function NoticeSection() {
  const { notices, nextChunk } = fetchNotices()

  onScrollBottom(() => {
    if (notLastItem(notices())) {
      nextChunk()
    }
  })

  return (
    <section className="mt-12 flex-grow flex">
      <div
        aria-label="Notices"
        className="flex flex-col max-w-2xl w-full mx-auto py-4 bg-white dark:bg-gray-800"
      >
        <Show
          when={notices().length > 0}
          fallback={<span className="m-auto">Loading...</span>}
        >
          <For each={notices()}>
            {([index, title, date, link]) => (
              <NoticeItem index={index} title={title} date={date} link={link} />
            )}
          </For>
        </Show>
      </div>
    </section>
  )
}

function notLastItem(notices) {
  if (notices.length > 0) {
    const [lastIndex] = notices[notices.length - 1]
    return lastIndex > 1
  }
}
