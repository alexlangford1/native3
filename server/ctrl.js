const bcrypt = require("bcryptjs")

module.exports = {
    regi: async (req, res) => {
        const {
            email,
            first_name,
            last_name,
            password
        } = req.body
        const now = Date.now
        const db = req.app.get("db")
        console.log('pooopoopop')
        const [newUser] = await db.register_user([
            email,
            first_name,
            last_name,
            password,
            now
        ])
        res.status(200).send({
            message: "logged in",
            userData: req.session.user,
            loggedIn: true,
        }).catch(err => console.log(666, err))

    }
}