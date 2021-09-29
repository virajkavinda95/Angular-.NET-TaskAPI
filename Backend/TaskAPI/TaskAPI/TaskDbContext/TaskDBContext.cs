using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskAPI.Model;

namespace TaskAPI.TaskDbContext
{
    public class TaskDBContext:DbContext
    {
        public TaskDBContext(DbContextOptions<TaskDBContext> options):base(options)
        {

        }

        public DbSet<Tasks> Tasks { get; set; }
    }
}
