const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

const Compte = sequelize.define('Compte', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

const Ticket = sequelize.define('Ticket', {
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

const Statut = sequelize.define('Statut', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

const Fichier = sequelize.define('Fichier', {
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
    
Fichier.belongsTo(Ticket);
Ticket.hasMany(Fichier);

Message.belongsTo(Ticket);
Ticket.hasMany(Message);

Ticket.belongsTo(Category);
Category.hasMany(Ticket);

Compte.belongsTo(Role);
Role.hasMany(Compte);

Ticket.belongsTo(Statut);
Statut.hasMany(Ticket);


sequelize.sync({ force: true })
  .then(() => {
    console.log('Database and tables created!');
  });

module.exports = {
    Role,
    Compte,
    Category,
    Ticket,
    Message,
    Statut,
    Fichier,
};
