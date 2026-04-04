const Attendant = require("./models/LibraryAttendant");
//create new attendant
exports.createAttendant = async (req, res) => {
    try{
  const attendant = await Attendant.create(req.body);
  res.json(attendant);
} catch (error) {
    res.status(400).json({message: error.message});
}
};


// get all library attendants
exports.getAllAttendants = async (req, res) => {
    try{
  const attendants = await Attendant.find();
  res.json(attendants);
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
};