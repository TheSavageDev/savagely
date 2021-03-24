export const schema = gql`
  type Account {
    id: String!
    name: String!
    balance: Float!
    credits: [Credit]!
    debits: [Debit]!
  }

  type Query {
    accounts: [Account!]!
    account(id: String!): Account
  }

  input CreateAccountInput {
    name: String!
    balance: Float!
  }

  input UpdateAccountInput {
    name: String
    balance: Float
  }

  type Mutation {
    createAccount(input: CreateAccountInput!): Account!
    updateAccount(id: String!, input: UpdateAccountInput!): Account!
    deleteAccount(id: String!): Account!
  }
`
