import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.editFormGroup = this.createForm();
  }
  private createForm() {
    return this.formBuilder.group({
      day1: [new Date()],
      day2: [new Date()],
      day3: [new Date()],
      day4: [new Date()],
      day5: [new Date()],
      day6: [new Date()],
      day7: [new Date()]
    });
  }
  edit() {
    let data = [];
    data.push(this.editFormGroup.controls['day1'].value);
    data.push(this.editFormGroup.controls['day2'].value);
    data.push(this.editFormGroup.controls['day3'].value);
    data.push(this.editFormGroup.controls['day4'].value);
    data.push(this.editFormGroup.controls['day5'].value);
    data.push(this.editFormGroup.controls['day6'].value);
    data.push(this.editFormGroup.controls['day7'].value);
    this.apiService.put(data).subscribe((data: any) => {
      console.log(data);
      debugger;
    })
  }
  cancel() {
    this.router.navigate(["/view"]);
  }
}
