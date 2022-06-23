import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Cart1655493472809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"cart",
                columns:[
                    {
                        name:"id_cart",
                        type:"varchar(36)",
                        isPrimary:true,

                    },
                    {
                        name:"productInCart",
                        type:"varchar(36)",
                    },
                ],
                foreignKeys:[
                    {
                        name:"FKProductInCart",
                        referencedTableName:"products",
                        referencedColumnNames:["id"],
                        columnNames:["productInCart"],
                        onDelete:"CASCADE",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cart");
    }

}
