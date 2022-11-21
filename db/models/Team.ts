import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from '../config'


export interface TeamAttr {
    id: number;
    team_name: string;
    logo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface TeamCreateAttr extends Optional<TeamAttr, 'logo'> { };

export class Team extends Model<TeamAttr, TeamCreateAttr> implements TeamAttr {
    public id!: number;
    public team_name!: string;
    public logo?: string;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    public readonly deleted_at!: Date;

}

Team.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    team_name: {
        type: DataTypes.STRING,
        unique: true
    },
    logo: {
        type: DataTypes.TEXT,
        unique: true
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    sequelize: sequelizeConnection,
    paranoid: true,
    freezeTableName: true,
    tableName: 'team'
});