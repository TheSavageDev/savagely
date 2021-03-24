export const schema = gql`
  type Exercise {
    id: Int!
    name: String!
    instructions: String
    workout: Workout!
    workoutId: Int!
    reps: Int
    sets: Int
    weight: Int
    minutes: Int
    level: String!
    equipment: String!
    abs: Boolean
    arms: Boolean
    back: Boolean
    chest: Boolean
    legs: Boolean
    shoulders: Boolean
  }

  type Query {
    exercises(workoutId: Int!): [Exercise!]!
  }

  input CreateExerciseInput {
    name: String!
    instructions: String
    reps: Int
    sets: Int
    weight: Int
    minutes: Int
    workoutId: Int!
    level: String!
    equipment: String!
    abs: Boolean
    arms: Boolean
    back: Boolean
    chest: Boolean
    legs: Boolean
    shoulders: Boolean
  }

  input UpdateExerciseInput {
    name: String
    instructions: String
    reps: Int
    sets: Int
    weight: Int
    minutes: Int
    workoutId: Int
    level: String
    equipment: String
    abs: Boolean
    arms: Boolean
    back: Boolean
    chest: Boolean
    legs: Boolean
    shoulders: Boolean
  }

  type Mutation {
    createExercise(input: CreateExerciseInput!): Exercise!
    updateExercise(id: Int!, input: UpdateExerciseInput!): Exercise!
    deleteExercise(id: Int!): Exercise!
  }
`
