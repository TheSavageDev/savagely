import MainLayout from 'src/layouts/MainLayout/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="flex mx-12 h-screen justify-center items-center">
        <section className="flex flex-col justify-center items-center ring ring-green-900 text-gray-200 w-1/3 rounded-xl mx-1 h-1/2 p-8 mt-12">
          <h2 className="text-7xl">Workouts</h2>
          <p className="text-4xl text-center">
            You can create a workout, then add custom exercises to the workout.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center ring ring-gray-100 text-gray-200 w-1/3 rounded-xl mx-1 h-1/2 p-8 mt-12">
          <h2 className="text-7xl">Hauptbuch</h2>
          <p className="text-4xl text-center">
            Add and track debits and credits to an account.
          </p>
        </section>
        <section className="flex flex-col justify-center items-center ring ring-yellow-600 text-gray-200 w-1/3 rounded-xl mx-1 h-1/2 p-8 mt-12">
          <h2 className="text-7xl">Something</h2>
          <p className="text-4xl text-center">Does something cool.</p>
        </section>
      </section>
    </MainLayout>
  )
}

export default AboutPage
