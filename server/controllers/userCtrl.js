// ===============  DATABASE REQUESTS
// ...............  get a list of all state names from the database
exports.getStatesList = (req, res) => req.app.get('db').getStates().then((response) => res.send(response))

// ...............  get a list of all countries from the database
exports.getCountriesList = (req, res) => req.app.get('db').getCountries().then((response) => res.send(response))

// ...............  adds a new user to the database
exports.createNewUser = (req, res) => {
    console.log(req.body)
    var userBody = [
        req.body.country_id
        , req.body.firstName
        , req.body.lastName
        , req.body.phone
        , req.body.email
        , req.body.address1
        , req.body.address2
        , req.body.city
        , req.body.state_id
    ]
    req.app.get('db').createUser(userBody).then((response) => res.status(200).send(`User has been created successfully`))
}
// ...............  gets a list of all users
exports.getAllUsers = (req, res) => req.app.get('db').getAllUsers().then((resp) => res.send(resp))

// ...............  gets a list of columns on the user table
exports.getUserColumns = function (req, res) {
    req.app.get('db').getUserColumnList().then(function (resp) {
        res.send(resp)
    })
}
// ...............  deletes all users
exports.deleteAllUsers = function (req, res) {
    req.app.get('db').deleteAllTheUsers().then(function (resp) {
        res.send(`all users have been deleted ${resp}`)
    })
}
// ...............  gets data for the manage user table
exports.getMUData = (req, res) => req.app.get('db').popManageUserTable().then((resp) => res.send(resp))