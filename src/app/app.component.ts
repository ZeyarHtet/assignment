import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm!: FormGroup;
  forbiddenProjectName = ['Testing' , 'Hello' ];


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
      projectname : new FormControl(null,[ Validators.required, this.forbiddenNames.bind(this)]),
      email : new FormControl(null, [Validators.required,Validators.email]),
      }),
     
    });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  forbiddenNames(control : FormControl) : { [s:string]: boolean} | null {
    if (control.value && this.forbiddenProjectName.indexOf(control.value) !== -1){
      return { nameIsForbidden : true};
    }
    return null;
  }


}
