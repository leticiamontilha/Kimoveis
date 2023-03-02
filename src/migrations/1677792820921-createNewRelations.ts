import { MigrationInterface, QueryRunner } from "typeorm";

export class createNewRelations1677792820921 implements MigrationInterface {
    name = 'createNewRelations1677792820921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0" UNIQUE ("categoryId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(20) NOT NULL`);
    }

}
