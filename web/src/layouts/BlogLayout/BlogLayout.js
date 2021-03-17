import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            to={routes.home()}
            className="text-blue-400 hover:text-blue-100 transition duration-100"
          >
            Savagely
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                to={routes.about()}
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={routes.contact()}
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                href="#"
                onClick={isAuthenticated ? logOut : logIn}
              >
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
