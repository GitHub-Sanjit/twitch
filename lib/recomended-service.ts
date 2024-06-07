import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  const users = await db.user.findMany();
  console.log(users);

  return users;
};
