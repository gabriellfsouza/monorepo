const credentials = process.env.MONGO_USERNAME
  ? `${process.env.MONGO_USERNAME}:${encodeURI(process.env.MONGO_PASSWORD)}@`
  : "";

export default {
  mongoUrl: (host = process.env.MONGO_HOST) =>
    `mongodb://${credentials}${host}/${process.env.MONGO_DATABASE}`,
  config: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
};
