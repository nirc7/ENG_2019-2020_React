using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiStudentsLoginDemo.Models;

namespace WebApiStudentsLoginDemo.Controllers
{
    //[EnableCors( "*", "*", "*")]
    public class StudentController : ApiController
    {
        //[EnableCors( "*", "*", "*")]
        public IEnumerable<Student> Get()
        {
            return StudentsDB.GetAllStudents();
        }

        //opt1 - time efficient
        //[DisableCors]
        public Student Get(string email, string password)
        {
            return StudentsDB.GetStudentByEmailAndPassword(email, password);
        }

        //opt2 - less code
        //public Student Get(string email, string password)
        //{
        //    return StudentsDB.GetAllStudents()
        //        .SingleOrDefault(st => st.Email == email && st.Password == password);
        //}

        //[DisableCors]
        public Student Post([FromBody] Student val)
        {
            return StudentsDB.GetStudentByEmailAndPassword(val.Email, val.Password);
        }
    }
}
