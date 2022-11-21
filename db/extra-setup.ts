export const applyExtraSetup = (db) => {
    console.log('db', db.sequelize)
    const { Fixture, Team } = db.sequelize;

    Team.hasMany(Fixture, {
        foreignKey: 'home_team_id'
    });
    Team.hasMany(Fixture, {
        foreignKey: 'away_team_id'
    });
    Fixture.belongsTo(Team);
};