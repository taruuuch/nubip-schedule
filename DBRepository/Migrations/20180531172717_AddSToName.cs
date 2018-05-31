using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class AddSToName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auditorium_AuditoriumType_AuditoriumTypeId",
                table: "Auditorium");

            migrationBuilder.DropForeignKey(
                name: "FK_Auditorium_Building_BuildingId",
                table: "Auditorium");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculum_Departament_DepartamentId",
                table: "Curriculum");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculum_Speciality_SpecialityId",
                table: "Curriculum");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculum_Subject_SubjectId",
                table: "Curriculum");

            migrationBuilder.DropForeignKey(
                name: "FK_Faculty_Building_BuildingId",
                table: "Faculty");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_EducationForm_EducationFormId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_EducationLevel_EducationLevelId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_Speciality_SpecialityId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group");

            migrationBuilder.DropForeignKey(
                name: "FK_Lesson_Auditorium_AuditoriumId",
                table: "Lesson");

            migrationBuilder.DropForeignKey(
                name: "FK_Lesson_Curriculum_CurriculumId",
                table: "Lesson");

            migrationBuilder.DropForeignKey(
                name: "FK_Lesson_Group_GroupId",
                table: "Lesson");

            migrationBuilder.DropForeignKey(
                name: "FK_Lesson_Teacher_TeacherId",
                table: "Lesson");

            migrationBuilder.DropForeignKey(
                name: "FK_Lesson_Time_TimeId",
                table: "Lesson");

            migrationBuilder.DropForeignKey(
                name: "FK_Request_Lesson_LessonId",
                table: "Request");

            migrationBuilder.DropForeignKey(
                name: "FK_Request_Time_TimeId",
                table: "Request");

            migrationBuilder.DropForeignKey(
                name: "FK_Speciality_Faculty_FacultyId",
                table: "Speciality");

            migrationBuilder.DropForeignKey(
                name: "FK_Subject_SubjectType_SubjectTypeId",
                table: "Subject");

            migrationBuilder.DropForeignKey(
                name: "FK_Teacher_Academic_AcademicId",
                table: "Teacher");

            migrationBuilder.DropForeignKey(
                name: "FK_Teacher_Degree_DegreeId",
                table: "Teacher");

            migrationBuilder.DropForeignKey(
                name: "FK_Teacher_Departament_DepartamentId",
                table: "Teacher");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Time",
                table: "Time");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Teacher",
                table: "Teacher");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SubjectType",
                table: "SubjectType");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subject",
                table: "Subject");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Speciality",
                table: "Speciality");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Request",
                table: "Request");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lesson",
                table: "Lesson");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Group",
                table: "Group");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Faculty",
                table: "Faculty");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EducationLevel",
                table: "EducationLevel");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EducationForm",
                table: "EducationForm");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Departament",
                table: "Departament");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Degree",
                table: "Degree");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Curriculum",
                table: "Curriculum");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Building",
                table: "Building");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AuditoriumType",
                table: "AuditoriumType");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Auditorium",
                table: "Auditorium");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Academic",
                table: "Academic");

            migrationBuilder.RenameTable(
                name: "Time",
                newName: "Times");

            migrationBuilder.RenameTable(
                name: "Teacher",
                newName: "Teachers");

            migrationBuilder.RenameTable(
                name: "SubjectType",
                newName: "SubjectTypes");

            migrationBuilder.RenameTable(
                name: "Subject",
                newName: "Subjects");

            migrationBuilder.RenameTable(
                name: "Speciality",
                newName: "Specialitys");

            migrationBuilder.RenameTable(
                name: "Request",
                newName: "Requests");

            migrationBuilder.RenameTable(
                name: "Lesson",
                newName: "Lessons");

            migrationBuilder.RenameTable(
                name: "Group",
                newName: "Groups");

            migrationBuilder.RenameTable(
                name: "Faculty",
                newName: "Facultys");

            migrationBuilder.RenameTable(
                name: "EducationLevel",
                newName: "EducationLevels");

            migrationBuilder.RenameTable(
                name: "EducationForm",
                newName: "EducationForms");

            migrationBuilder.RenameTable(
                name: "Departament",
                newName: "Departaments");

            migrationBuilder.RenameTable(
                name: "Degree",
                newName: "Degrees");

            migrationBuilder.RenameTable(
                name: "Curriculum",
                newName: "Curriculums");

            migrationBuilder.RenameTable(
                name: "Building",
                newName: "Buildings");

            migrationBuilder.RenameTable(
                name: "AuditoriumType",
                newName: "AuditoriumTypes");

            migrationBuilder.RenameTable(
                name: "Auditorium",
                newName: "Auditoriums");

            migrationBuilder.RenameTable(
                name: "Academic",
                newName: "Academics");

            migrationBuilder.RenameIndex(
                name: "IX_Teacher_DepartamentId",
                table: "Teachers",
                newName: "IX_Teachers_DepartamentId");

            migrationBuilder.RenameIndex(
                name: "IX_Teacher_DegreeId",
                table: "Teachers",
                newName: "IX_Teachers_DegreeId");

            migrationBuilder.RenameIndex(
                name: "IX_Teacher_AcademicId",
                table: "Teachers",
                newName: "IX_Teachers_AcademicId");

            migrationBuilder.RenameIndex(
                name: "IX_Subject_SubjectTypeId",
                table: "Subjects",
                newName: "IX_Subjects_SubjectTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Speciality_FacultyId",
                table: "Specialitys",
                newName: "IX_Specialitys_FacultyId");

            migrationBuilder.RenameIndex(
                name: "IX_Request_TimeId",
                table: "Requests",
                newName: "IX_Requests_TimeId");

            migrationBuilder.RenameIndex(
                name: "IX_Request_LessonId",
                table: "Requests",
                newName: "IX_Requests_LessonId");

            migrationBuilder.RenameIndex(
                name: "IX_Lesson_TimeId",
                table: "Lessons",
                newName: "IX_Lessons_TimeId");

            migrationBuilder.RenameIndex(
                name: "IX_Lesson_TeacherId",
                table: "Lessons",
                newName: "IX_Lessons_TeacherId");

            migrationBuilder.RenameIndex(
                name: "IX_Lesson_GroupId",
                table: "Lessons",
                newName: "IX_Lessons_GroupId");

            migrationBuilder.RenameIndex(
                name: "IX_Lesson_CurriculumId",
                table: "Lessons",
                newName: "IX_Lessons_CurriculumId");

            migrationBuilder.RenameIndex(
                name: "IX_Lesson_AuditoriumId",
                table: "Lessons",
                newName: "IX_Lessons_AuditoriumId");

            migrationBuilder.RenameIndex(
                name: "IX_Group_TeacherId",
                table: "Groups",
                newName: "IX_Groups_TeacherId");

            migrationBuilder.RenameIndex(
                name: "IX_Group_SpecialityId",
                table: "Groups",
                newName: "IX_Groups_SpecialityId");

            migrationBuilder.RenameIndex(
                name: "IX_Group_EducationLevelId",
                table: "Groups",
                newName: "IX_Groups_EducationLevelId");

            migrationBuilder.RenameIndex(
                name: "IX_Group_EducationFormId",
                table: "Groups",
                newName: "IX_Groups_EducationFormId");

            migrationBuilder.RenameIndex(
                name: "IX_Faculty_BuildingId",
                table: "Facultys",
                newName: "IX_Facultys_BuildingId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculum_SubjectId",
                table: "Curriculums",
                newName: "IX_Curriculums_SubjectId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculum_SpecialityId",
                table: "Curriculums",
                newName: "IX_Curriculums_SpecialityId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculum_DepartamentId",
                table: "Curriculums",
                newName: "IX_Curriculums_DepartamentId");

            migrationBuilder.RenameIndex(
                name: "IX_Auditorium_BuildingId",
                table: "Auditoriums",
                newName: "IX_Auditoriums_BuildingId");

            migrationBuilder.RenameIndex(
                name: "IX_Auditorium_AuditoriumTypeId",
                table: "Auditoriums",
                newName: "IX_Auditoriums_AuditoriumTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Times",
                table: "Times",
                column: "TimeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers",
                column: "TeacherId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SubjectTypes",
                table: "SubjectTypes",
                column: "SubjectTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects",
                column: "SubjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Specialitys",
                table: "Specialitys",
                column: "SpecialityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Requests",
                table: "Requests",
                column: "RequestId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lessons",
                table: "Lessons",
                column: "LessonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Groups",
                table: "Groups",
                column: "GroupId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Facultys",
                table: "Facultys",
                column: "FacultyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EducationLevels",
                table: "EducationLevels",
                column: "EducationLevelId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EducationForms",
                table: "EducationForms",
                column: "EducationFormId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Departaments",
                table: "Departaments",
                column: "DepartamentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Degrees",
                table: "Degrees",
                column: "DegreeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Curriculums",
                table: "Curriculums",
                column: "CurriculumId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Buildings",
                table: "Buildings",
                column: "BuildingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AuditoriumTypes",
                table: "AuditoriumTypes",
                column: "AuditoriumTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Auditoriums",
                table: "Auditoriums",
                column: "AuditoriumId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Academics",
                table: "Academics",
                column: "AcademicId");

            migrationBuilder.AddForeignKey(
                name: "FK_Auditoriums_AuditoriumTypes_AuditoriumTypeId",
                table: "Auditoriums",
                column: "AuditoriumTypeId",
                principalTable: "AuditoriumTypes",
                principalColumn: "AuditoriumTypeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Auditoriums_Buildings_BuildingId",
                table: "Auditoriums",
                column: "BuildingId",
                principalTable: "Buildings",
                principalColumn: "BuildingId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculums_Departaments_DepartamentId",
                table: "Curriculums",
                column: "DepartamentId",
                principalTable: "Departaments",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculums_Specialitys_SpecialityId",
                table: "Curriculums",
                column: "SpecialityId",
                principalTable: "Specialitys",
                principalColumn: "SpecialityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculums_Subjects_SubjectId",
                table: "Curriculums",
                column: "SubjectId",
                principalTable: "Subjects",
                principalColumn: "SubjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Facultys_Buildings_BuildingId",
                table: "Facultys",
                column: "BuildingId",
                principalTable: "Buildings",
                principalColumn: "BuildingId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_EducationForms_EducationFormId",
                table: "Groups",
                column: "EducationFormId",
                principalTable: "EducationForms",
                principalColumn: "EducationFormId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_EducationLevels_EducationLevelId",
                table: "Groups",
                column: "EducationLevelId",
                principalTable: "EducationLevels",
                principalColumn: "EducationLevelId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Specialitys_SpecialityId",
                table: "Groups",
                column: "SpecialityId",
                principalTable: "Specialitys",
                principalColumn: "SpecialityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Teachers_TeacherId",
                table: "Groups",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Auditoriums_AuditoriumId",
                table: "Lessons",
                column: "AuditoriumId",
                principalTable: "Auditoriums",
                principalColumn: "AuditoriumId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Curriculums_CurriculumId",
                table: "Lessons",
                column: "CurriculumId",
                principalTable: "Curriculums",
                principalColumn: "CurriculumId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Groups_GroupId",
                table: "Lessons",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "GroupId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Teachers_TeacherId",
                table: "Lessons",
                column: "TeacherId",
                principalTable: "Teachers",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lessons_Times_TimeId",
                table: "Lessons",
                column: "TimeId",
                principalTable: "Times",
                principalColumn: "TimeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Lessons_LessonId",
                table: "Requests",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "LessonId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Times_TimeId",
                table: "Requests",
                column: "TimeId",
                principalTable: "Times",
                principalColumn: "TimeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Specialitys_Facultys_FacultyId",
                table: "Specialitys",
                column: "FacultyId",
                principalTable: "Facultys",
                principalColumn: "FacultyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subjects_SubjectTypes_SubjectTypeId",
                table: "Subjects",
                column: "SubjectTypeId",
                principalTable: "SubjectTypes",
                principalColumn: "SubjectTypeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_Academics_AcademicId",
                table: "Teachers",
                column: "AcademicId",
                principalTable: "Academics",
                principalColumn: "AcademicId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_Degrees_DegreeId",
                table: "Teachers",
                column: "DegreeId",
                principalTable: "Degrees",
                principalColumn: "DegreeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teachers_Departaments_DepartamentId",
                table: "Teachers",
                column: "DepartamentId",
                principalTable: "Departaments",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auditoriums_AuditoriumTypes_AuditoriumTypeId",
                table: "Auditoriums");

            migrationBuilder.DropForeignKey(
                name: "FK_Auditoriums_Buildings_BuildingId",
                table: "Auditoriums");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculums_Departaments_DepartamentId",
                table: "Curriculums");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculums_Specialitys_SpecialityId",
                table: "Curriculums");

            migrationBuilder.DropForeignKey(
                name: "FK_Curriculums_Subjects_SubjectId",
                table: "Curriculums");

            migrationBuilder.DropForeignKey(
                name: "FK_Facultys_Buildings_BuildingId",
                table: "Facultys");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_EducationForms_EducationFormId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_EducationLevels_EducationLevelId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Specialitys_SpecialityId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Teachers_TeacherId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Auditoriums_AuditoriumId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Curriculums_CurriculumId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Groups_GroupId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Teachers_TeacherId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Lessons_Times_TimeId",
                table: "Lessons");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Lessons_LessonId",
                table: "Requests");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Times_TimeId",
                table: "Requests");

            migrationBuilder.DropForeignKey(
                name: "FK_Specialitys_Facultys_FacultyId",
                table: "Specialitys");

            migrationBuilder.DropForeignKey(
                name: "FK_Subjects_SubjectTypes_SubjectTypeId",
                table: "Subjects");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_Academics_AcademicId",
                table: "Teachers");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_Degrees_DegreeId",
                table: "Teachers");

            migrationBuilder.DropForeignKey(
                name: "FK_Teachers_Departaments_DepartamentId",
                table: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Times",
                table: "Times");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Teachers",
                table: "Teachers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SubjectTypes",
                table: "SubjectTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Specialitys",
                table: "Specialitys");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Requests",
                table: "Requests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lessons",
                table: "Lessons");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Groups",
                table: "Groups");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Facultys",
                table: "Facultys");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EducationLevels",
                table: "EducationLevels");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EducationForms",
                table: "EducationForms");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Departaments",
                table: "Departaments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Degrees",
                table: "Degrees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Curriculums",
                table: "Curriculums");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Buildings",
                table: "Buildings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AuditoriumTypes",
                table: "AuditoriumTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Auditoriums",
                table: "Auditoriums");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Academics",
                table: "Academics");

            migrationBuilder.RenameTable(
                name: "Times",
                newName: "Time");

            migrationBuilder.RenameTable(
                name: "Teachers",
                newName: "Teacher");

            migrationBuilder.RenameTable(
                name: "SubjectTypes",
                newName: "SubjectType");

            migrationBuilder.RenameTable(
                name: "Subjects",
                newName: "Subject");

            migrationBuilder.RenameTable(
                name: "Specialitys",
                newName: "Speciality");

            migrationBuilder.RenameTable(
                name: "Requests",
                newName: "Request");

            migrationBuilder.RenameTable(
                name: "Lessons",
                newName: "Lesson");

            migrationBuilder.RenameTable(
                name: "Groups",
                newName: "Group");

            migrationBuilder.RenameTable(
                name: "Facultys",
                newName: "Faculty");

            migrationBuilder.RenameTable(
                name: "EducationLevels",
                newName: "EducationLevel");

            migrationBuilder.RenameTable(
                name: "EducationForms",
                newName: "EducationForm");

            migrationBuilder.RenameTable(
                name: "Departaments",
                newName: "Departament");

            migrationBuilder.RenameTable(
                name: "Degrees",
                newName: "Degree");

            migrationBuilder.RenameTable(
                name: "Curriculums",
                newName: "Curriculum");

            migrationBuilder.RenameTable(
                name: "Buildings",
                newName: "Building");

            migrationBuilder.RenameTable(
                name: "AuditoriumTypes",
                newName: "AuditoriumType");

            migrationBuilder.RenameTable(
                name: "Auditoriums",
                newName: "Auditorium");

            migrationBuilder.RenameTable(
                name: "Academics",
                newName: "Academic");

            migrationBuilder.RenameIndex(
                name: "IX_Teachers_DepartamentId",
                table: "Teacher",
                newName: "IX_Teacher_DepartamentId");

            migrationBuilder.RenameIndex(
                name: "IX_Teachers_DegreeId",
                table: "Teacher",
                newName: "IX_Teacher_DegreeId");

            migrationBuilder.RenameIndex(
                name: "IX_Teachers_AcademicId",
                table: "Teacher",
                newName: "IX_Teacher_AcademicId");

            migrationBuilder.RenameIndex(
                name: "IX_Subjects_SubjectTypeId",
                table: "Subject",
                newName: "IX_Subject_SubjectTypeId");

            migrationBuilder.RenameIndex(
                name: "IX_Specialitys_FacultyId",
                table: "Speciality",
                newName: "IX_Speciality_FacultyId");

            migrationBuilder.RenameIndex(
                name: "IX_Requests_TimeId",
                table: "Request",
                newName: "IX_Request_TimeId");

            migrationBuilder.RenameIndex(
                name: "IX_Requests_LessonId",
                table: "Request",
                newName: "IX_Request_LessonId");

            migrationBuilder.RenameIndex(
                name: "IX_Lessons_TimeId",
                table: "Lesson",
                newName: "IX_Lesson_TimeId");

            migrationBuilder.RenameIndex(
                name: "IX_Lessons_TeacherId",
                table: "Lesson",
                newName: "IX_Lesson_TeacherId");

            migrationBuilder.RenameIndex(
                name: "IX_Lessons_GroupId",
                table: "Lesson",
                newName: "IX_Lesson_GroupId");

            migrationBuilder.RenameIndex(
                name: "IX_Lessons_CurriculumId",
                table: "Lesson",
                newName: "IX_Lesson_CurriculumId");

            migrationBuilder.RenameIndex(
                name: "IX_Lessons_AuditoriumId",
                table: "Lesson",
                newName: "IX_Lesson_AuditoriumId");

            migrationBuilder.RenameIndex(
                name: "IX_Groups_TeacherId",
                table: "Group",
                newName: "IX_Group_TeacherId");

            migrationBuilder.RenameIndex(
                name: "IX_Groups_SpecialityId",
                table: "Group",
                newName: "IX_Group_SpecialityId");

            migrationBuilder.RenameIndex(
                name: "IX_Groups_EducationLevelId",
                table: "Group",
                newName: "IX_Group_EducationLevelId");

            migrationBuilder.RenameIndex(
                name: "IX_Groups_EducationFormId",
                table: "Group",
                newName: "IX_Group_EducationFormId");

            migrationBuilder.RenameIndex(
                name: "IX_Facultys_BuildingId",
                table: "Faculty",
                newName: "IX_Faculty_BuildingId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculums_SubjectId",
                table: "Curriculum",
                newName: "IX_Curriculum_SubjectId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculums_SpecialityId",
                table: "Curriculum",
                newName: "IX_Curriculum_SpecialityId");

            migrationBuilder.RenameIndex(
                name: "IX_Curriculums_DepartamentId",
                table: "Curriculum",
                newName: "IX_Curriculum_DepartamentId");

            migrationBuilder.RenameIndex(
                name: "IX_Auditoriums_BuildingId",
                table: "Auditorium",
                newName: "IX_Auditorium_BuildingId");

            migrationBuilder.RenameIndex(
                name: "IX_Auditoriums_AuditoriumTypeId",
                table: "Auditorium",
                newName: "IX_Auditorium_AuditoriumTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Time",
                table: "Time",
                column: "TimeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Teacher",
                table: "Teacher",
                column: "TeacherId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SubjectType",
                table: "SubjectType",
                column: "SubjectTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subject",
                table: "Subject",
                column: "SubjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Speciality",
                table: "Speciality",
                column: "SpecialityId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Request",
                table: "Request",
                column: "RequestId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lesson",
                table: "Lesson",
                column: "LessonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Group",
                table: "Group",
                column: "GroupId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Faculty",
                table: "Faculty",
                column: "FacultyId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EducationLevel",
                table: "EducationLevel",
                column: "EducationLevelId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EducationForm",
                table: "EducationForm",
                column: "EducationFormId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Departament",
                table: "Departament",
                column: "DepartamentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Degree",
                table: "Degree",
                column: "DegreeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Curriculum",
                table: "Curriculum",
                column: "CurriculumId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Building",
                table: "Building",
                column: "BuildingId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AuditoriumType",
                table: "AuditoriumType",
                column: "AuditoriumTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Auditorium",
                table: "Auditorium",
                column: "AuditoriumId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Academic",
                table: "Academic",
                column: "AcademicId");

            migrationBuilder.AddForeignKey(
                name: "FK_Auditorium_AuditoriumType_AuditoriumTypeId",
                table: "Auditorium",
                column: "AuditoriumTypeId",
                principalTable: "AuditoriumType",
                principalColumn: "AuditoriumTypeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Auditorium_Building_BuildingId",
                table: "Auditorium",
                column: "BuildingId",
                principalTable: "Building",
                principalColumn: "BuildingId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculum_Departament_DepartamentId",
                table: "Curriculum",
                column: "DepartamentId",
                principalTable: "Departament",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculum_Speciality_SpecialityId",
                table: "Curriculum",
                column: "SpecialityId",
                principalTable: "Speciality",
                principalColumn: "SpecialityId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Curriculum_Subject_SubjectId",
                table: "Curriculum",
                column: "SubjectId",
                principalTable: "Subject",
                principalColumn: "SubjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Faculty_Building_BuildingId",
                table: "Faculty",
                column: "BuildingId",
                principalTable: "Building",
                principalColumn: "BuildingId",
                onDelete: ReferentialAction.Cascade);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Speciality_SpecialityId",
                table: "Group",
                column: "SpecialityId",
                principalTable: "Speciality",
                principalColumn: "SpecialityId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Group_Teacher_TeacherId",
                table: "Group",
                column: "TeacherId",
                principalTable: "Teacher",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lesson_Auditorium_AuditoriumId",
                table: "Lesson",
                column: "AuditoriumId",
                principalTable: "Auditorium",
                principalColumn: "AuditoriumId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lesson_Curriculum_CurriculumId",
                table: "Lesson",
                column: "CurriculumId",
                principalTable: "Curriculum",
                principalColumn: "CurriculumId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lesson_Group_GroupId",
                table: "Lesson",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "GroupId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lesson_Teacher_TeacherId",
                table: "Lesson",
                column: "TeacherId",
                principalTable: "Teacher",
                principalColumn: "TeacherId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Lesson_Time_TimeId",
                table: "Lesson",
                column: "TimeId",
                principalTable: "Time",
                principalColumn: "TimeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Request_Lesson_LessonId",
                table: "Request",
                column: "LessonId",
                principalTable: "Lesson",
                principalColumn: "LessonId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Request_Time_TimeId",
                table: "Request",
                column: "TimeId",
                principalTable: "Time",
                principalColumn: "TimeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Speciality_Faculty_FacultyId",
                table: "Speciality",
                column: "FacultyId",
                principalTable: "Faculty",
                principalColumn: "FacultyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subject_SubjectType_SubjectTypeId",
                table: "Subject",
                column: "SubjectTypeId",
                principalTable: "SubjectType",
                principalColumn: "SubjectTypeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher_Academic_AcademicId",
                table: "Teacher",
                column: "AcademicId",
                principalTable: "Academic",
                principalColumn: "AcademicId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher_Degree_DegreeId",
                table: "Teacher",
                column: "DegreeId",
                principalTable: "Degree",
                principalColumn: "DegreeId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Teacher_Departament_DepartamentId",
                table: "Teacher",
                column: "DepartamentId",
                principalTable: "Departament",
                principalColumn: "DepartamentId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
