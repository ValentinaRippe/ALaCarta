import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ACTIONS } from 'src/app/core/const/const';
import { AuthService } from '../../../core/service/auth/auth.service';

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
  signUp = ACTIONS.signUp
  @Input() options!: OptionsForm;

  constructor(private readonly fb: FormBuilder, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.authSvc.signIn(this.authForm.value).subscribe()
  }


  private initForm(): void {
    if (this.signIn === this.options.id) {
      this.authForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    } else {
      this.authForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        password_again: ['', Validators.required]
      })
    }
  }

}
