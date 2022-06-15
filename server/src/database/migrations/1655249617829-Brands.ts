import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Brands1655249617829 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"brands",
                columns:[
                    {
                        name:"id",
                        type:"varchar(36)",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar(50)"
                    },
                    {
                        name:"logo",
                        type:"varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("brands");
    }

}
