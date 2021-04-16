import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const CSS = {
  navItem: 'py-2 px-4 hover:text-gold transition-all duration-300 rounded',
  authButton: 'py-2 px-4 hover:text-red-500 transition duration-300 rounded',
  header:
    'relative flex justify-between items-center py-4 px-8 shadow-2xl bg-gradient-to-l from-gray-900 to-black text-gray-200 font-bold',
  logo: 'text-5xl font-bold tracking-tight',
  logoText: 'logo text-dark-green hover:text-green transition-all duration-500',
  navList: 'relative flex items-center font-bold text-lg',
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
