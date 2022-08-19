import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-lg dark:bg-gray-800">
      <div className="max-w-2xl mx-auto h-12 px-2 flex items-center">
        <a href="https://biit.tk">
          <img className="w-8" src="/favicon.svg" alt="BIIT Logo" />
        </a>
        <h1 className="ml-2 text-lg font-medium">BTEB Notice</h1>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
