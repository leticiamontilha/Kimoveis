import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableRealEstate1678135667816 implements MigrationInterface {
    name = 'alterTableRealEstate1678135667816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "adressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_e64472d578faf91bee90a06ecc0" UNIQUE ("categoryId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "adressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_52edcc84ae4f80ef26ce777ef3a" UNIQUE ("adressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_52edcc84ae4f80ef26ce777ef3a" FOREIGN KEY ("adressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
