import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const exercises = ({ workoutId }) => {
  return db.exercise.findMany({ where: { workoutId } })
}

export const Exercise = {
  workout: (_obj, { root }) =>
    db.exercise.findUnique({ where: { id: root.id } }).workout(),
}

export const createExercise = ({ input }) => {
  requireAuth()
  return db.exercise.create({
    data: input,
  })
}

export const updateExercise = ({ id, input }) => {
  requireAuth()
  return db.exercise.update({
    data: input,
    where: { id },
  })
}

export const deleteExercise = ({ id }) => {
  requireAuth()
  return db.exercise.delete({
    where: { id },
  })
}
