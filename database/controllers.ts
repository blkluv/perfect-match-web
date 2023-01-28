import { User } from "./models";

export const createUser = async (user: any) => {
  const { email, name, given_name, family_name } = user;
  const newUser = new User({
    email: user.email,
    profile: { firstName: given_name, lastName: family_name, email: email },
  });
  const doc = await newUser.save();
  return doc;
};

export const getUser = async (user: any) => {
  const doc = await User.findOne({ email: user.email });
  return doc;
};

export const getUsers = async () => {
  const resp = await User.find();
  return resp;
};

export const countUsers = async () => {
  const resp = await User.find();
  return resp.length;
};
export const updateSurvey = async (user: any, survey: any) => {
  const doc = await User.findOneAndUpdate(
    { email: user.email },
    { survey: survey },
    { new: true }
  );
  return doc;
};

export const updateProfile = async (user: any, profile: any) => {
  const doc = await User.findOneAndUpdate(
    { email: user.email },
    { profile: profile },
    { new: true }
  );
  return doc;
};
