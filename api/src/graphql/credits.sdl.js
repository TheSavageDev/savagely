export const schema = gql`
  type Credit {
    id: Int!
    amount: Float!
    notes: String!
    date: DateTime!
    account: Account!
    accountId: String!
  }

  type Query {
    credits(accountId: String!): [Credit!]!
    credit(id: Int!): Credit!
  }

  input CreateCreditInput {
    amount: Float!
    notes: String!
    date: DateTime!
    accountId: String!
  }

  input UpdateCreditInput {
    amount: Float
    notes: String
    date: DateTime
    accountId: String
  }

  type Mutation {
    createCredit(input: CreateCreditInput!): Credit!
    updateCredit(id: Int!, input: UpdateCreditInput!): Credit!
    deleteCredit(id: Int!): Credit!
  }
`
