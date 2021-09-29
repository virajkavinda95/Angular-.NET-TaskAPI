import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Shared } from 'src/app/shared.model';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-task-detail-form',
  templateUrl: './task-detail-form.component.html',
  styleUrls: ['./task-detail-form.component.css']
})
export class TaskDetailFormComponent implements OnInit {

  constructor(public service:SharedService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  btnTitle:string;

  onSubmit(form:NgForm){
    if(this.service.formData.taskId == 0){
      this.insertNewTask(form);
    }
    else{
      this.updateSelectedTask(form);
    }
  }

  insertNewTask(form:NgForm){
    this.service.postTask().subscribe(res => {
      this.service.refreshTaskList();
      this.toastr.success("New Task Added Successfully", "New Task");
    },
    err =>{
      console.log(err);
      
    });
  }

  updateSelectedTask(form:NgForm){
    this.service.updateTask().subscribe(res =>{
      this.service.refreshTaskList();
      this.toastr.info("Task Updated Successfully", "Update Task");
      this.resetForm(form);
    })
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Shared();
  }

}
