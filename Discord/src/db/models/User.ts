import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column(DataType.TEXT)
    name!: string;
}
