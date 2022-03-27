import {MigrationInterface, QueryRunner} from "typeorm";

export class people1648342642650 implements MigrationInterface {
    name = 'people1648342642650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`personas\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`direccion\` varchar(250) NOT NULL, \`telefono\` varchar(250) NOT NULL, \`fec_nacimiento\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`personas\``);
    }

}
