using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OnTimeBackend.Migrations
{
    public partial class businesshours : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "IssueClosed",
                table: "issues",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "IssueCreated",
                table: "issues",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "BusinessHoursID",
                table: "employers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "BusinessHours",
                columns: table => new
                {
                    BusinessHoursID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    closinghour = table.Column<DateTime>(type: "datetime2", nullable: false),
                    starthour = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BusinessHours", x => x.BusinessHoursID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_employers_BusinessHoursID",
                table: "employers",
                column: "BusinessHoursID",
                unique: true,
                filter: "[BusinessHoursID] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_employers_BusinessHours_BusinessHoursID",
                table: "employers",
                column: "BusinessHoursID",
                principalTable: "BusinessHours",
                principalColumn: "BusinessHoursID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employers_BusinessHours_BusinessHoursID",
                table: "employers");

            migrationBuilder.DropTable(
                name: "BusinessHours");

            migrationBuilder.DropIndex(
                name: "IX_employers_BusinessHoursID",
                table: "employers");

            migrationBuilder.DropColumn(
                name: "IssueClosed",
                table: "issues");

            migrationBuilder.DropColumn(
                name: "IssueCreated",
                table: "issues");

            migrationBuilder.DropColumn(
                name: "BusinessHoursID",
                table: "employers");
        }
    }
}
