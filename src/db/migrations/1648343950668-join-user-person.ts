import {MigrationInterface, QueryRunner} from "typeorm";

export class joinUserPerson1648343950668 implements MigrationInterface {
    name = 'joinUserPerson1648343950668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`id_persona\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD UNIQUE INDEX \`IDX_5b29c4b5cc11b9c67c8b70c9cb\` (\`id_persona\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_5b29c4b5cc11b9c67c8b70c9cb\` ON \`usuarios\` (\`id_persona\`)`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_5b29c4b5cc11b9c67c8b70c9cb2\` FOREIGN KEY (\`id_persona\`) REFERENCES \`personas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_5b29c4b5cc11b9c67c8b70c9cb2\``);
        await queryRunner.query(`DROP INDEX \`REL_5b29c4b5cc11b9c67c8b70c9cb\` ON \`usuarios\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP INDEX \`IDX_5b29c4b5cc11b9c67c8b70c9cb\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`id_persona\``);
    }

}
