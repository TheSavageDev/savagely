import AccountCell from 'src/components/AccountCell/AccountCell'
import MainLayout from 'src/layouts/MainLayout'

const AccountPage = ({ id }) => {
  return (
    <MainLayout>
      <AccountCell id={id} />
    </MainLayout>
  )
}

export default AccountPage
