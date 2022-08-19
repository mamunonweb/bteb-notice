import type { JSX } from 'solid-js'
import Header from './Header'

type Props = {
  children: JSX.Element
}

export default function Layout(props: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {props.children}
    </div>
  )
}
