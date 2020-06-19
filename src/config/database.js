module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'baberapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
 };
