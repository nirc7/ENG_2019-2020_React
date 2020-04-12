using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApiStudentsLoginDemo.Models
{
    public class StudentsDB
    {
        static string strCon = @"Data Source=E440\SQLEXPRESS;Initial Catalog=UsersDB;Integrated Security=True";
        public static List<Student> GetAllStudents() 
        {
            List<Student> sl = new List<Student>();
            SqlConnection con = new SqlConnection(strCon);
            SqlCommand comm = new SqlCommand("SELECT * FROM StudentsTB", con);
            comm.Connection.Open();
            SqlDataReader reader = comm.ExecuteReader();
            while (reader.Read())
            {
                Student s = new Student(
                    (int)reader["ID"],
                    (string)reader["Name"], (string)reader["Email"], (string)reader["Password"],
                    (int)reader["Grade"]);
                sl.Add(s);
            }
            comm.Connection.Close();
            return sl;
        }

        public static Student GetStudentByEmailAndPassword(string email, string password)
        {
            Student s = null;
            SqlConnection con = new SqlConnection(strCon);
            SqlCommand comm = new SqlCommand(
                $" SELECT * FROM StudentsTB " +
                $" WHERE Email='{email}' AND Password='{password}'", con);
            comm.Connection.Open();
            SqlDataReader reader = comm.ExecuteReader();
            if(reader.Read())
            {
                s = new Student(
                    (int)reader["ID"],
                    (string)reader["Name"], (string)reader["Email"], (string)reader["Password"],
                    (int)reader["Grade"]);
            }
            comm.Connection.Close();
            return s;
        }

    }
}