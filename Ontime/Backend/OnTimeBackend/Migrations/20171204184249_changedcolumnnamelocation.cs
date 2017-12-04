using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace OnTimeBackend.Migrations
{
    public partial class changedcolumnnamelocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "longtitude",
                table: "locations");

            migrationBuilder.AddColumn<double>(
                name: "longitude",
                table: "locations",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "longitude",
                table: "locations");

            migrationBuilder.AddColumn<double>(
                name: "longtitude",
                table: "locations",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
