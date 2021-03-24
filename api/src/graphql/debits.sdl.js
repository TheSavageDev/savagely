export const schema = gql`
  type Debit {
    id: Int!
    amount: Float!
    notes: String!
    date: DateTime!
    account: Account!
    accountId: String!
  }

  type Query {
    debits(accountId: String!): [Debit!]!
    debit(id: Int!): Debit!
  }

  input CreateDebitInput {
    amount: Float!
    notes: String!
    date: DateTime!
    accountId: String!
  }

  input UpdateDebitInput {
    amount: Float
    notes: String
    date: DateTime
    accountId: String
  }

  type Mutation {
    createDebit(input: CreateDebitInput!): Debit!
    updateDebit(id: Int!, input: UpdateDebitInput!): Debit!
    deleteDebit(id: Int!): Debit!
  }
`
