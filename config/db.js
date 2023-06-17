const mongoose = require("mongoose");

const connectDB = async () =>
{
  mongoose.set('strictQuery', false);
  try
  {
    const conn = await mongoose.connect(process.env.MONGODB_URI,
        {
      useUnifiedTopology: true,
      useNewUrlParser: true,
        })
    console.log(`💾 Connected to DB: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.bold)
    process.exit(1)
  }
}

module.exports =
    {
  connectDB
};
