const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize');

const category  = sequelize.define('category' , {
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '0'
    },
    platform_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: '0'
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    labels: {
        type: Sequelize.STRING(45),
        allowNull: true
    }
});

module.exports = category;
