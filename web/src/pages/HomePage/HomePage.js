import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <section className=" flex justify-center items-center mx-auto bg-gray-100 max-w-4xl rounded-xl p-12 mt-12">
        <p className="text-5xl text-center">
          Welcome to my playground.
          <br /> I&apos;ll be adding a bunch of different apps and gizmos.
        </p>
      </section>
    </MainLayout>
  )
}

export default HomePage
