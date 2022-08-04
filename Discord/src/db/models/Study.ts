import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Study extends Model {
    @Column(DataType.TEXT)
    name!: string;
    @Column(DataType.BIGINT)
    leader!: number;
}
