using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OnTimeBackend.Migrations
{
    public partial class addressmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AddressID",
                table: "employers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_employers_AddressID",
                table: "employers",
                column: "AddressID");

            migrationBuilder.AddForeignKey(
                name: "FK_employers_addresses_AddressID",
                table: "employers",
                column: "AddressID",
                principalTable: "addresses",
                principalColumn: "AddressID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employers_addresses_AddressID",
                table: "employers");

            migrationBuilder.DropIndex(
                name: "IX_employers_AddressID",
                table: "employers");

            migrationBuilder.DropColumn(
                name: "AddressID",
                table: "employers");
        }
    }
}
