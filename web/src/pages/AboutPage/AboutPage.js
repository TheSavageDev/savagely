import MainLayout from 'src/layouts/MainLayout/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="flex justify-center items-start flex-wrap">
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Workouts</h2>
          <p className="text-2xl">
            You can create a workout, then add custom exercises to the workout.
          </p>
        </section>
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Hauptbuch</h2>
          <p className="text-2xl">
            Add and track debits and credits to an account.
          </p>
        </section>
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Hangman</h2>
          <p className="text-2xl">You know what Hangman is.</p>
        </section>
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Stand-up</h2>
          <p className="text-2xl">
            Application for orchestrating stand-up meetings.
          </p>
        </section>
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Retroactive</h2>
          <p className="text-2xl">
            Application for orchestrating retroactive meetings.
          </p>
        </section>
        <section className="flex w-1/3 flex-col text-white shadow-2xl rounded-2xl p-8 mx-5 mt-5 bg-white bg-opacity-5">
          <h2 className="text-5xl text-center">Estimation</h2>
          <p className="text-2xl">
            Application for orchestrating estimation meetings.
          </p>
        </section>
      </section>
    </MainLayout>
  )
}

export default AboutPage
