module.exports= Mymiddleware=(req, res, next) =>
{
    if (req.query.age >= 18) {
      res.send("this is my website");
    } else if (req.query.age < 18) {
      res.send("This website is Adult only");
    } else {
     next();
    }
  }