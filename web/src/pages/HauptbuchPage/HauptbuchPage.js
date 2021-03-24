import MainLayout from 'src/layouts/MainLayout/MainLayout'
import AccountsCell from 'src/components/AccountsCell'

const HauptbuchPage = () => {
  return (
    <MainLayout>
      <section className="w-5/6 bg-red-300 text-red-900 text-4xl mx-auto text-center rounded-xl mt-2 py-5">
        Work In Progress
      </section>
      <section className="flex justify-around mt-12">
        <section className="w-1/3 bg-gray-100 rounded-xl p-4">
          <h2 className="text-4xl">Accounts</h2>
          <AccountsCell />
        </section>
      </section>
    </MainLayout>
  )
}

export default HauptbuchPage
