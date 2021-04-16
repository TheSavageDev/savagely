import BlogHeader from 'src/components/BlogHeader'
import { routes } from '@redwoodjs/router'

const navRoutes = [
  {
    route: routes.about(),
    name: 'About',
  },
  {
    route: routes.contact(),
    name: 'Contact',
  },
  {
    route: routes.workouts(),
    name: 'Workouts',
  },
  {
    route: routes.hauptbuch(),
    name: 'Hauptbuch',
  },
  {
    route: routes.hangman(),
    name: 'Hangman',
  },
  {
    route: routes.standUp(),
    name: 'Stand-Up',
  },
  {
    route: routes.retroactive(),
    name: 'Retroactive',
  },
  {
    route: routes.estimation(),
    name: 'Estimation',
  },
]

const CSS = {
  main: 'w-full',
}

const MainLayout = ({ children }) => {
  return (
    <>
      <BlogHeader navRoutes={navRoutes} />
      <main className={CSS.main}>{children}</main>
    </>
  )
}

export default MainLayout
