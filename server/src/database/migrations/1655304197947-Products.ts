import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Products1655304197947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[
                    {
                        name:"id",
                        type:"varchar(36)",
                        isPrimary:true
                    },
                    {
                        name:"nameProduct",
                        type:"varchar",
                        isNullable:true
                    },
                    {
                        name:"price",
                        type:"float"
                    },
                    {
                        name:"brand",
                        type:"varchar"

                    },
                    {
                        name:"image",
                        type:"varchar"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKProductBrand",
                        referencedTableName:"brands",
                        referencedColumnNames:["id_brand"],
                        columnNames:["brand"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
