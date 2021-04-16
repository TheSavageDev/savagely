import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Jira = () => (
  <article className="rounded-xl border-2 border-white p-2 my-1 w-3/4">
    <p>JIRA</p>
  </article>
)

const StandUpPage = () => {
  return (
    <MainLayout>
      <section className="bg-red-300 mx-auto text-center rounded-xl mt-2 w-1/4">
        <h2 className="text-red-900 text-4xl py-2">Work In Progress</h2>
      </section>
      <section className="flex justify-center items-center text-white">
        <section className="rounded-xl shadow-2xl px-12 py-5 mt-12 bg-white bg-opacity-5 mx-4">
          <h2 className="text-white text-5xl">Team</h2>
          <article className="flex flex-col justify-center items-center">
            <img src="https://picsum.photos/100" className="rounded-full" />
            <h3 className="text-center">Abraham</h3>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src="https://picsum.photos/100" className="rounded-full" />
            <h3 className="text-center">Isaac</h3>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src="https://picsum.photos/100" className="rounded-full" />
            <h3 className="text-center">Rebekah</h3>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src="https://picsum.photos/100" className="rounded-full" />
            <h3 className="text-center">Jacob</h3>
          </article>
          <article className="flex flex-col justify-center items-center">
            <img src="https://picsum.photos/100" className="rounded-full" />
            <h3 className="text-center">Rachel</h3>
          </article>
        </section>
        <section className="rounded-xl shadow-2xl p-12 mt-12 bg-white bg-opacity-5 mx-4 w-8/12">
          <h2 className="text-white text-5xl">Board</h2>
          <section className="grid grid-cols-5">
            <section className="">
              <h3 className="text-xl font-bold underline">Not Started</h3>
              <Jira />
              <Jira />
            </section>
            <section className="">
              <h3 className="text-xl font-bold underline">In Progress</h3>
              <Jira />
              <Jira />
            </section>
            <section className="">
              <h3 className="text-xl font-bold underline">In Review</h3>
              <Jira />
              <Jira />
            </section>
            <section className="">
              <h3 className="text-xl font-bold underline">In Test</h3>
              <Jira />
              <Jira />
            </section>
            <section className="">
              <h3 className="text-xl font-bold underline">Completed</h3>
              <Jira />
              <Jira />
            </section>
          </section>
        </section>
      </section>
    </MainLayout>
  )
}

export default StandUpPage
