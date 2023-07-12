import mongoose from "mongoose";

/* const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("se conecto con la db")
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect; */

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log("db Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // Detener la app
  }
};

module.exports = connect;
