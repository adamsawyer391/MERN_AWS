// exports.register = (req, res) => {
//     //here we will want to register the user (or it will fail for some reason
//     //[email exists, already registered, malformed email, etc] and we will send a response to the front end)
//     res.json({
//         data: 'You hit the registration end point for middleware from middle earth'
//     })
// }
exports.register = (req, res) => {
    console.log('REGISTER CONTROLLER', req.body);
}