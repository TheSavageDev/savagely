import WorkoutCell from 'src/components/WorkoutCell'
import MainLayout from 'src/layouts/MainLayout'

const WorkoutPage = ({ id }) => {
  return (
    <MainLayout>
      <WorkoutCell id={id} />
    </MainLayout>
  )
}

export default WorkoutPage
