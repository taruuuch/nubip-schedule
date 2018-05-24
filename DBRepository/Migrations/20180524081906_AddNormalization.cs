using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DBRepository.Migrations
{
    public partial class AddNormalization : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EducationForm",
                table: "Group");

            migrationBuilder.DropColumn(
                name: "EducationLevel",
                table: "Group");

            migrationBuilder.AddColumn<int>(
                name: "EducationFormId",
                table: "Group",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "EducationLevelId",
                table: "Group",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "EducationForm",
                columns: table => new
                {
                    EducationFormId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationForm", x => x.EducationFormId);
                });

            migrationBuilder.CreateTable(
                name: "EducationLevel",
                columns: table => new
                {
                    EducationLevelId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationLevel", x => x.EducationLevelId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Group_EducationFormId",
                table: "Group",
                column: "EducationFormId");

            migrationBuilder.CreateIndex(
                name: "IX_Group_EducationLevelId",
                table: "Group",
                column: "EducationLevelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Group_EducationForm_EducationFormId",
                table: "Group",
                column: "EducationFormId",
                principalTable: "EducationForm",
                principalColumn: "EducationFormId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_EducationLevel_EducationLevelId",
                table: "Group",
                column: "EducationLevelId",
                principalTable: "EducationLevel",
                principalColumn: "EducationLevelId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Group_EducationForm_EducationFormId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_EducationLevel_EducationLevelId",
                table: "Group");

            migrationBuilder.DropTable(
                name: "EducationForm");

            migrationBuilder.DropTable(
                name: "EducationLevel");

            migrationBuilder.DropIndex(
                name: "IX_Group_EducationFormId",
                table: "Group");

            migrationBuilder.DropIndex(
                name: "IX_Group_EducationLevelId",
                table: "Group");

            migrationBuilder.DropColumn(
                name: "EducationFormId",
                table: "Group");

            migrationBuilder.DropColumn(
                name: "EducationLevelId",
                table: "Group");

            migrationBuilder.AddColumn<string>(
                name: "EducationForm",
                table: "Group",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EducationLevel",
                table: "Group",
                nullable: true);
        }
    }
}
