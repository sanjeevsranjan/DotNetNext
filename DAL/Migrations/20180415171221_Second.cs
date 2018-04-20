using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DAL.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EmployeeID",
                table: "EmployeeContact",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeContact_EmployeeID",
                table: "EmployeeContact",
                column: "EmployeeID");

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeContact_Employee_EmployeeID",
                table: "EmployeeContact",
                column: "EmployeeID",
                principalTable: "Employee",
                principalColumn: "EmployeeID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeContact_Employee_EmployeeID",
                table: "EmployeeContact");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeContact_EmployeeID",
                table: "EmployeeContact");

            migrationBuilder.DropColumn(
                name: "EmployeeID",
                table: "EmployeeContact");
        }
    }
}
