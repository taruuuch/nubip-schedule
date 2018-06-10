using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class FixBuilding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Buildings");

            migrationBuilder.AddColumn<int>(
                name: "Number",
                table: "Buildings",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                table: "Buildings");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Buildings",
                nullable: true);
        }
    }
}
