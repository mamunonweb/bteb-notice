import DownloadButton from './DownloadButton'

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
