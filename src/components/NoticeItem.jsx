export default function NoticeItem({ index, title, date, link }) {
  const newTitle = title.replaceAll('১', '<span class="font-sans2">১</span>')

  return (
    <div
      aria-label="Notice"
      className="flex py-4 border-b border-dashed dark:border-gray-700/50"
    >
      <div className="flex-shrink-0 w-12 text-gray-500 text-center text-sm">
        <span aria-label={`Index ${index}`}>{index}</span>
      </div>
      <div className="flex-grow">
        <time className="block mb-2 text-gray-500 text-sm" datetime={date}>
          {date}
        </time>
        <h2 innerHTML={newTitle} />
      </div>
      <div className="flex-shrink-0 flex items-center justify-center w-12">
        <DownloadButton link={link} />
      </div>
    </div>
  )
}

function DownloadButton({ link }) {
  return (
    <a
      title="Download"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex border border-dashed h-7 w-7 rounded-full text-gray-500 hover:border-gray-300 hover:text-primary-500 dark:border-gray-700/50 dark:hover:border-gray-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.75"
        className="inline-block m-auto"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </a>
  )
}
