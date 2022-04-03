import Header from './Header'

export default function Layout(props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {props.children}
    </div>
  )
}
