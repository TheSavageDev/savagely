import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const CSS = {
  navItem: 'py-2 px-4 hover:bg-yellow-600 transition duration-100 rounded',
  authButton: 'py-2 px-4 hover:bg-red-700 transition duration-100 rounded',
  header:
    'relative flex justify-between items-center py-4 px-8 bg-green-900 text-white',
  logo: 'text-5xl font-semibold tracking-tight',
  logoText: 'text-black hover:text-yellow-500 transition duration-100',
  navList: 'relative flex items-center font-light',
}
const NavItem = ({ route, name }) => {
  return (
    <li>
      <Link to={route} className={CSS.navItem}>
        {name}
      </Link>
    </li>
  )
}

const LogInLogOutButton = ({ isAuthenticated, logOut, logIn }) => {
  const handleLogInLogOut = () => {
    return isAuthenticated ? logOut : logIn
  }

  return (
    <li>
      <a className={CSS.authButton} href="#" onClick={handleLogInLogOut}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </a>
    </li>
  )
}

const BlogHeader = ({ navRoutes }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  return (
    <header className={CSS.header}>
      <h1 className={CSS.logo}>
        <Link to={routes.home()} className={CSS.logoText}>
          Savagely
        </Link>
      </h1>
      <nav>
        <ul className={CSS.navList}>
          {navRoutes.map((nav) => (
            <NavItem key={nav.name} route={nav.route} name={nav.name} />
          ))}
          <LogInLogOutButton
            isAuthenticated={isAuthenticated}
            logIn={logIn}
            logOut={logOut}
          />
        </ul>
      </nav>
    </header>
  )
}

export default BlogHeader
