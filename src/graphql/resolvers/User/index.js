import User from "../../../models/User";
import { ObjectID } from "mongodb";

export default {
  Query: {
    login: async (root, { email, password }) => {
      return await User.findOne({ email, password }).exec();
    },
    user: async (root, { id: _id }) => {
      return await User.findOne({ _id }).exec();
    },
    users: async () => {
      const res = await User.find({})
        .populate()
        .exec();

      return res.map(u => ({
        id: u._id.toString(),
        email: u.email,
        password: u.password,
        menu: u.menu
      }));
    }
  },
  Mutation: {
    addUser: async (root, { email, password }) => {
      const res = await new User({ email, password }).save();
      return Object.assign({}, res, { id: res._id.toString() });
    },
    setUserMenu: async (root, { id, menu }) => {
      return await User.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: { menu } }
      ).exec();
    }
  }
};
