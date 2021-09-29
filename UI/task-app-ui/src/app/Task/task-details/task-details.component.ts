import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Shared } from 'src/app/shared.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  constructor(public service:SharedService, private toastr:ToastrService) { }

  TaskTitleFilter:string="";
  TaskDescriptionFilter:string=""
  FilterWithoutAny:any=[];

  ngOnInit(): void {
    this.service.refreshTaskList();
  }

  populateForm(selectedTask:Shared){
    this.service.formData = Object.assign({},selectedTask);
  }

  deleteTask(Id:number){
    if(confirm("Are you sure?")){
      this.service.deleteTask(Id).subscribe(res => {
        this.toastr.error("Task Deleted Successfully", "Delete Task");
        this.service.refreshTaskList();
      }, 
      err=>{
        console.log(err);
        
      });
    }
  }

  filterFn(){
    var TaskTitleFilter = this.TaskTitleFilter;
    var TaskDescriptionFilter = this.TaskDescriptionFilter;

    this.service.taskList = this.FilterWithoutAny.filter(function (e:any) {
      return e.TaskTitle.toString().toLowerCase().includes(
        TaskTitleFilter.toString().trim().toLowerCase()
      )&&
      e.TaskDescription.toString().toLowerCase().includes(
        TaskDescriptionFilter.toString().trim().toLowerCase()
      )
    });
  }

}
