import mongoose from "mongoose";
export const dbConnection = async (dbURI) => {
  try {
    const { connection } = await mongoose.connect(dbURI);
    return `DB Connected has been stablished on host ${connection.host}`;
  } catch (error) {
    console.log(error.message);
  }
};
