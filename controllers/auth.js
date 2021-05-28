const {response} = require('express');

const newUser = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'Created user'
    })
    
}

module.exports = {
    newUser
}