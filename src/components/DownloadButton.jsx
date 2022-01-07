import { DownloadIcon } from './icons'

export default function DownloadButton(props) {
  return (
    <a
      title="Download / Preview"
      href={props.link}
      target="_blank"
      rel="noreferrer noopener"
      className="p-2 rounded-full text-gray-500 hover:text-primary-500"
    >
      <DownloadIcon />
    </a>
  )
}
