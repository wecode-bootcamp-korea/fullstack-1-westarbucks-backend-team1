const generalErrorHandler = (err, req, res, next) => {
  const { status, message } = err;
  console.err(err);
  res.status(status || 500).json({ message });
};

export default generalErrorHandler;
