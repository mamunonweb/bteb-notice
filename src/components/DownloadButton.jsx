import { DownloadIcon } from './icons'

export default function DownloadButton(props) {
  return (
    <a
      title="Download"
      href={props.link}
      target="_blank"
      rel="noreferrer noopener"
      className="rounded-full text-gray-500 hover:border-gray-300 hover:text-primary-500"
    >
      <DownloadIcon />
    </a>
  )
}
