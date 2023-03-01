
export function userMiddleware(req, res, next) {
  // check if the "user" collection is present in the request body
  if (req.body) {
    let { username, password, name , confirmPassword } = req.body;

  if (!username) {
    res.send({message:"Username is required"});
    return
  }
  if (!password) {
    res.send({message:"password is required"});
    return
  }
  if (!confirmPassword) {
    res.send({message:"confirmPassword is required"});
    return
  }
  if (!name) {
    res.send({message:"name is required"});
    return
  }

  }
  next();
}
