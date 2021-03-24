import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const debits = ({ accountId }) => {
  return db.debit.findMany({ where: { accountId } })
}

export const debit = ({ id }) => {
  return db.debit.findUnique({ where: { id } })
}

export const Debit = {
  account: (_obj, { root }) =>
    db.debit.findUnique({ where: { id: root.id } }).account(),
}

export const createDebit = ({ input }) => {
  requireAuth()
  return db.debit.create({
    data: input,
  })
}

export const updateDebit = ({ id, input }) => {
  requireAuth()
  return db.debit.update({
    data: input,
    where: { id },
  })
}

export const deleteDebit = ({ id }) => {
  requireAuth()
  return db.debit.delete({
    where: { id },
  })
}
