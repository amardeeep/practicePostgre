const getNew = (req, res) => {
  res.render("form");
};
const postNew = (req, res) => {
  res.send("Username to be saved", req.body.username);
};
module.exports = { getNew, postNew };
