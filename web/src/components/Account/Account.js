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
      <section className="flex justify-center w-2/3 mt-12 mx-auto p-4">
        <section className="text-gray-200">
          <h2 className="text-4xl border-b-2 border-r-2 border-gray-200 text-center">
            Debits
          </h2>
          <section className="p-2 border-r-2 border-gray-200">
            <DebitsCell accountId={account.id} />
            <AddDebitForm accountId={account.id} />
          </section>
        </section>
        <section className="text-gray-200">
          <h2 className="text-4xl border-b-2 border-gray-200 text-center">
            Credits
          </h2>
          <section className="p-2">
            <CreditsCell accountId={account.id} />
            <AddCreditForm accountId={account.id} />
          </section>
        </section>
      </section>
    </>
  )
}

export default Account
