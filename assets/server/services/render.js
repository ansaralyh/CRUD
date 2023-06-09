const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // get request to the api userss
    axios.get("http://localhost:3000/api/users").then(function(response)
    {
        // console.log(response.data.users)
        res.render('index', { users: response.data.users });
        

    })
    .catch(err =>{
        res.send(err);
    })
}


exports.add_user = (req , res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:3000/api/users",{params : {id:req.query.id}})
    .then(function(userdata)
    {
        res.render("update_user", {user : userdata.data})
    })
    .catch(err => {
        res.render(err)
    })

    // res.render('update_user');
}