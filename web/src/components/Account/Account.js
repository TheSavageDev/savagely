import DebitsCell from 'src/components/DebitsCell'
import CreditsCell from '../CreditsCell/CreditsCell'
import AddCreditForm from '../AddCreditForm/AddCreditForm'
import AddDebitForm from '../AddDebitForm/AddDebitForm'

const Account = ({ account }) => {
  return (
    <>
      <section className="flex flex-col justify-around w-1/3 mt-12 text-gray-100 mx-auto rounded-xl p-4">
        <h2 className="text-6xl text-center">{account.name}</h2>
      </section>
      <section className="flex justify-between w-2/3 mt-12 mx-auto p-4">
        <section className="bg-gray-100 rounded-xl mx-3 p-4">
          <h2 className="text-4xl">Debits</h2>
          <DebitsCell accountId={account.id} />
          <AddDebitForm accountId={account.id} />
        </section>
        <section className="bg-gray-100 rounded-xl mx-3 p-4">
          <h2 className="text-4xl">Credits</h2>
          <CreditsCell accountId={account.id} />
          <AddCreditForm accountId={account.id} />
        </section>
      </section>
    </>
  )
}

export default Account
