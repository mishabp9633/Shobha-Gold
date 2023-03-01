export function goldrateValidator(req, res, next) {
    // check if the "user" collection is present in the request body
    if (req.body) {
      let { gramRate, pavanRate} = req.body;
  
    if (!gramRate) {
      res.send({message:"Gram rate is required"});
      return
    }
    if (!pavanRate) {
      res.send({message:"Pavan rate is required"});
      return
    }
      
}
    next()
}