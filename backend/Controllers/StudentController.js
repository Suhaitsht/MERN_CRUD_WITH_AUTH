const StudentCreate = (req, res) => {
  res.status(200).json({ messages: "This messagses from user controlller" });
};

const GetallData = (req, res) => {
  res.status(200).json({ messages: "this messages from getall student data " });
};

module.exports = {
  StudentCreate,
  GetallData,
};
