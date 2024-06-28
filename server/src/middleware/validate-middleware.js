const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      return next();
    } catch (err) {
      
      const message = err.errors[0].message;
      console.log(message)
      res.status(400).json({msg:message})
    }
  };
  
  module.exports = validate;