import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-400">
      <Header />
      {children}
    </div>
  )
}
