const getNew = (req, res) => {
  console.log("Something Happens");
  res.send("Something Happens");
};
const postNew = (req, res) => {
  res.send("Username to be saved", req.body.username);
};
module.exports = { getNew, postNew };
