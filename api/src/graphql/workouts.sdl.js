export const schema = gql`
  type Workout {
    id: Int!
    exercises: [Exercise]!
    title: String!
  }

  type Query {
    workouts: [Workout!]!
    workout(id: Int!): Workout
  }

  input CreateWorkoutInput {
    title: String
  }

  input UpdateWorkoutInput {
    title: String
  }

  type Mutation {
    createWorkout(input: CreateWorkoutInput!): Workout!
    updateWorkout(id: Int!, input: UpdateWorkoutInput!): Workout!
    deleteWorkout(id: Int!): Workout!
  }
`
