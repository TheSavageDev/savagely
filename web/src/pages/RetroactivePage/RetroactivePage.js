import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Card = () => (
  <article className="text-2xl p-2 bg-white bg-opacity-60 text-black mx-4 my-2 rounded-2xl">
    This would be cool if it worked.
  </article>
)
const RetroactivePage = () => {
  return (
    <MainLayout>
      <section className="bg-red-300 mx-auto text-center rounded-xl mt-2 w-1/4">
        <h2 className="text-red-900 text-4xl py-2">Work In Progress</h2>
      </section>
      <section className="flex justify-center items-center text-white">
        <section className="rounded-xl shadow-2xl px-12 py-2 mt-2 mx-4 w-full h-1/4 bg-white bg-opacity-40">
          <h2 className="text-white text-5xl">Board</h2>
          <section className="grid grid-cols-3 divide-x">
            <section className="overflow-y-scroll">
              <h3 className="text-4xl px-2">What Went Well</h3>
              <section className="grid grid-cols-3 px-4">
                <Card />
              </section>
            </section>
            <section className="overflow-y-scroll">
              <h3 className="text-4xl px-2">What Went Wrong</h3>
              <section className="grid grid-cols-3 px-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
            </section>
            <section className="overflow-y-scroll">
              <h3 className="text-4xl px-2">Action Items</h3>
              <section className="grid grid-cols-3 px-4">
                <Card />
                <Card />
                <Card />
              </section>
            </section>
          </section>
        </section>
      </section>
    </MainLayout>
  )
}

export default RetroactivePage
