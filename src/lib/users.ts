import connectDB from "../../mongodb/connect";
import User from "../../mongodb/models/user";

connectDB(process.env.MONGODB_URL!);

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = (await User.findOne({ email })) as User;
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
