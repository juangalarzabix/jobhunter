var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

router.get('/', function(req, res, next) {
    var moduleName = req.query.moduleName;
    var moduleData = getModuleData(moduleName);
    res.send(moduleData);
});

function getModuleData(moduleName) {
    let result;
    let title;
    let description;
    let tiers;
    if (!moduleName) return {error: 'error'};
    const moduleKey = moduleName.toLowerCase();

    // get module data
    switch (moduleKey) {

        case 'career':
            result = {
                name: 'Career Coaching',
                description: 'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.',
                tiers: [ 
                    {
                        name: 'Basic',
                        description: 'Ideal for enthusiasts',
                        price: 10,
                    }, {
                        name: 'Professional',
                        description: 'same as Basic, plus:',
                        price: 18,
                    }, {
                        name: 'Executive',
                        description: 'same as Professional, plus:',
                        price: 25,
                    }
                ]
            };
            break;

        case 'linkedin':
            result = {
                name: 'LinkedIn Profile Update',
                description: 'This is a generic description of module',
                tiers: [ 
                    {
                        name: 'Basic',
                        description: 'Ideal for enthusiasts',
                        price: 10,
                    }, {
                        name: 'Professional',
                        description: 'same as Basic, plus:',
                        price: 18,
                    }, {
                        name: 'Executive',
                        description: 'same as Professional, plus:',
                        price: 25,
                    }
                ]
            };
            break;

        case 'resume':
            result = {
                name: 'Resume Writing',
                description: 'This is a generic description of module',
                tiers: [ 
                    {
                        name: 'Basic',
                        description: 'Ideal for enthusiasts',
                        price: 10,
                    }, {
                        name: 'Professional',
                        description: 'same as Basic, plus:',
                        price: 18,
                    }, {
                        name: 'Executive',
                        description: 'same as Professional, plus:',
                        price: 25,
                    }
                ]
            };
            break;
    }
    return result;
}

module.exports = router;
