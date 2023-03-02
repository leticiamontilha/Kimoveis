import { MigrationInterface, QueryRunner } from "typeorm";

export class createNewRelations1677719624996 implements MigrationInterface {
    name = 'createNewRelations1677719624996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoryId"`);
    }

}
