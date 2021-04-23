module.exports = {
    index: (req, res) => {
        const employees = [
            {
                "_id": "1",
                "name": "Khairat Adam",
                "email": "khairy@gmail.com",
                "address": "No1 Bukuru",
                "phone": 09088899966
            },
            {
                "_id": "2",
                "name": "Nanbyen",
                "email": "nanbyen@yahoo.com",
                "address": "No5 Rutsau",
                "phone": 0987654321
            },
            {
                "_id": "1",
                "name": "Lawrence",
                "email": "lawrence@gmail.com",
                "address": "No11 Odus Village",
                "phone": 567891234
            }
        ]
        res.render("defaultViews/index", { employees});
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