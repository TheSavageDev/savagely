import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const credits = ({ accountId }) => {
  return db.credit.findMany({ where: { accountId } })
}

export const credit = ({ id }) => {
  return db.credit.findUnique({ where: { id } })
}

export const Credit = {
  account: (_obj, { root }) =>
    db.credit.findUnique({ where: { id: root.id } }).account(),
}

export const createCredit = ({ input }) => {
  requireAuth()
  return db.credit.create({
    data: input,
  })
}

export const updateCredit = ({ id, input }) => {
  requireAuth()
  return db.credit.update({
    data: input,
    where: { id },
  })
}

export const deleteCredit = ({ id }) => {
  requireAuth()
  return db.credit.delete({
    where: { id },
  })
}
