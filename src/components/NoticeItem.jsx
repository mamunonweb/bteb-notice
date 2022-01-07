import DownloadButton from './DownloadButton'

export default function NoticeItem(props) {
  return (
    <div
      aria-label="Notice"
      className="flex py-4 border-b border-gray-100 dark:border-gray-700/50"
    >
      <div className="flex-grow pl-4">
        <time
          className="block mb-2 text-gray-500 text-sm"
          datetime={props.date}
        >
          {props.date}
        </time>
        <h2 innerHTML={props.title} />
      </div>
      <div className="flex-shrink-0 flex items-center justify-center px-2">
        <DownloadButton link={props.link} />
      </div>
    </div>
  )
}
