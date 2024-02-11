import mongoose from "mongoose";
  mongoose.Promise = global.Promise;

const mongoURI = "mongodb://localhost:27017/ecommerce";
mongoose
  .connect(mongoURI, {
    // useNewUrlParser: true,
	// useUnifiedTopology: true,
	// useCreateIndex: true,
	// useFindAndModify: false
  })
  .then(() => console.log("Successfully connect to MongoDB.", mongoURI))
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

const connection = mongoose.connection;
export default connection;