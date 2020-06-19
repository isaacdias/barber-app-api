module.exports =  {
  dialect: 'postgres',
  host: 'localhost',
  usename: 'postgres',
  password: 'docker',
  database: 'barberapp',
  define = {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
 };
