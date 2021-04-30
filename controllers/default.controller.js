const { Employee } = require("../models/employees/model.employee");

module.exports = {
    /**
     * 
     * @param {*GET} req 
     * @param {*POST} res 
     */
    index: async(req, res) => {
        /**
         * 
         * @package { name, email, phone, address } data
         * 
         */
        await Employee.find({})
        .exec()
        
        res.render("defaultViews/index", { });
    },
    users: (req, res) => {
        const people = [
            {
                "name": "Khairat",
                "email": "khairy@gmail.com",
                "age": 32
            },
            {
                "name": "Nanbyen",
                "email": "nanbyen@gmail.com",
                "age": 93
            }
        ];
        res.render("defaultViews/users", {people});
    }
}