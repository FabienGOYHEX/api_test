'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			email: DataTypes.STRING,
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			bio: DataTypes.STRING,
			isAdmin: DataTypes.BOOLEAN
		},
		{}
	);
	User.associate = function(models) {
		// associations defined
		models.User.hasMany(models.Message);
	};
	return User;
};
