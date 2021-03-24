import { db } from 'src/lib/db'

export const accounts = () => {
  return db.account.findMany()
}

export const account = ({ id }) => {
  return db.account.findUnique({
    where: { id },
  })
}

export const Account = {
  credits: (_obj, { root }) =>
    db.account.findUnique({ where: { id: root.id } }).credits(),
  debits: (_obj, { root }) =>
    db.account.findUnique({ where: { id: root.id } }).debits(),
}

export const createAccount = ({ input }) => {
  return db.account.create({
    data: input,
  })
}

export const updateAccount = ({ id, input }) => {
  return db.account.update({
    data: input,
    where: { id },
  })
}

export const deleteAccount = ({ id }) => {
  return db.account.delete({
    where: { id },
  })
}
