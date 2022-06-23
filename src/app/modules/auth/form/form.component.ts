import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ACTIONS } from 'src/app/shared/const/const';
import { AuthService } from '../service/auth.service';

export interface OptionsForm {
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  authForm!: FormGroup;
  signIn = ACTIONS.signIn
  @Input() options!: OptionsForm;

  constructor(private readonly fb: FormBuilder, private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  async onSubmit(){
    this.authSvc.signIn(this.authForm.value).subscribe(res=>{
      if(res){
        this.router.navigate(['/home'])
      }
    })
  }

  private initForm():void{
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
