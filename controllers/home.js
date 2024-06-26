const List = require("../models/list");

const HomeController = {
  Index: async (req, res) => {
    const list = await List.find({ completed: false });
    const completedList = await List.find({ completed: true });
    res.render("home/index", {
      list: list,
      completedList: completedList
    });
  },
};
module.exports = HomeController;
