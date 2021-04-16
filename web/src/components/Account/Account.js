import DebitsCell from 'src/components/DebitsCell'
import CreditsCell from '../CreditsCell/CreditsCell'
import AddCreditForm from '../AddCreditForm/AddCreditForm'
import AddDebitForm from '../AddDebitForm/AddDebitForm'

const Account = ({ account }) => {
  return (
    <>
      <section className="flex flex-col justify-around w-1/3 mt-12 text-white mx-auto p-4">
        <h2 className="text-6xl text-center">{account.name}</h2>
      </section>
      <section className="flex justify-center w-2/3 mt-12 mx-auto p-4 bg-white bg-opacity-5 rounded-2xl shadow-2xl">
        <section className="text-white">
          <h2 className="text-4xl border-b-2 border-r-2 border-white text-center">
            Debits
          </h2>
          <section className="p-2 border-r-2 border-white">
            <DebitsCell accountId={account.id} />
            <AddDebitForm accountId={account.id} />
          </section>
        </section>
        <section className="text-white">
          <h2 className="text-4xl border-b-2 border-white text-center">
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
