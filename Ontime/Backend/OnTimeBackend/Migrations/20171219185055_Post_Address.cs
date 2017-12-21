using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OnTimeBackend.Migrations
{
    public partial class Post_Address : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EmployerID",
                table: "addresses",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_addresses_EmployerID",
                table: "addresses",
                column: "EmployerID",
                unique: true,
                filter: "[EmployerID] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_addresses_employers_EmployerID",
                table: "addresses",
                column: "EmployerID",
                principalTable: "employers",
                principalColumn: "EmployerID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_addresses_employers_EmployerID",
                table: "addresses");

            migrationBuilder.DropIndex(
                name: "IX_addresses_EmployerID",
                table: "addresses");

            migrationBuilder.DropColumn(
                name: "EmployerID",
                table: "addresses");
        }
    }
}
