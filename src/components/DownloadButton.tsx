import { DownloadIcon } from './icons'

type Props = {
  link: string
}

export default function DownloadButton(props: Props) {
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
