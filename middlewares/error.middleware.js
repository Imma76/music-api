const errorHander = (error, req, res, next) => { return res.status(500).send({ status: false, message: `${error}` }); }


export default errorHandler;