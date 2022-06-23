import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/shared/const/const';
import { OptionsForm } from '../../form/form.component';

@Component({
  selector: 'app-sign-up',
  template: `
  <div class="formLogin">
    <app-form [options]='options'></app-form>
  </div>
  `,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{
  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp
  }

}
