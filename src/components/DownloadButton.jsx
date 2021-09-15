export default function DownloadButton({ link }) {
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
