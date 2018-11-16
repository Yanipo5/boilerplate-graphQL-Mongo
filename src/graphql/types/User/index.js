export default `
    type User {
      id: String
      email: String!
      password: String!,
      menu: String
    }

  type Query {
    login(email: String!, password: String!): User
    user(id: String!): User
    users: [User]
  }

  type Mutation {
    addUser(email: String!, password: String!): User
    setUserMenu(id: String, menu: String!): User
  }
  `;
