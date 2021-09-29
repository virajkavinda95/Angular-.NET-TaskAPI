using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAPI.Model
{
    public class Tasks
    {
        [Key]
        public int TaskId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string TaskTitle { get; set; }

        [Column(TypeName = "text")]
        [Required]
        public string TaskDescription { get; set; }
    }
}
