import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <section className="flex justify-center items-center mx-auto text-white max-w-4xl rounded-xl shadow-2xl p-12 mt-12 bg-white bg-opacity-5">
        <p className="text-5xl text-center">
          Welcome to my playground.
          <br /> I&apos;ll be adding a bunch of different apps and gizmos.
        </p>
      </section>
    </MainLayout>
  )
}

export default HomePage
