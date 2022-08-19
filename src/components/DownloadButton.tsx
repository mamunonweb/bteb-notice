import { DownloadIcon } from './icons'

type Props = {
  href: string
}

export default function DownloadButton(props: Props) {
  return (
    <a
      title="Download / Preview"
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      className="p-2 rounded-full text-gray-500 hover:text-primary-500"
    >
      <DownloadIcon />
    </a>
  )
}
