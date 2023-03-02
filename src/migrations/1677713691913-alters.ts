import { MigrationInterface, QueryRunner } from "typeorm";

export class alters1677713691913 implements MigrationInterface {
    name = 'alters1677713691913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "coty" TO "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "city" TO "coty"`);
    }

}
