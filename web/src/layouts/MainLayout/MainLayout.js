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
    route: routes.hauptbuch(),
    name: 'Something',
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
