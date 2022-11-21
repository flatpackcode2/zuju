import { DataTypes, Model, } from "sequelize";
import { sequelizeConnection } from '../config'


interface FixtureAttr {
    id: number;
    match_start: Date;
    match_end: Date;
    home_team_id: number;
    away_team_id: number;
    home_score: number;
    away_score: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

type FixtureCreateAttr = FixtureAttr;

class Fixture extends Model<FixtureAttr, FixtureCreateAttr> implements FixtureAttr {
    public id!: number;
    public match_start!: Date;
    public match_end!: Date;
    public home_team_id!: number;
    public away_team_id!: number;
    public home_score!: number;
    public away_score!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly deleted_at!: Date;

}

Fixture.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    match_start: {
        type: DataTypes.DATE,
        unique: true
    },
    match_end: {
        type: DataTypes.DATE,
        unique: true
    },
    home_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    away_team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    home_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    away_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    sequelize: sequelizeConnection,
    paranoid: true
});

export default Fixture;