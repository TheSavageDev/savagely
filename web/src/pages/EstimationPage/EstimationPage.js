import MainLayout from 'src/layouts/MainLayout/MainLayout'

const EstimationPage = () => {
  return (
    <MainLayout>
      <section className="bg-red-300 mx-auto text-center rounded-xl mt-2 w-1/4">
        <h2 className="text-red-900 text-4xl py-2">Work In Progress</h2>
      </section>
      <section className="grid grid-cols-12 text-white mt-12">
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          1
        </article>
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          2
        </article>
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          3
        </article>
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          4
        </article>
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          5
        </article>
        <article className="bg-white bg-opacity-40 col-span-1 mx-4 flex justify-center items-center h-64 rounded-2xl shadow-2xl">
          6
        </article>
      </section>
    </MainLayout>
  )
}

export default EstimationPage
