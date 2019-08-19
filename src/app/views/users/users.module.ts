import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './shared/forms/user-form/user-form.component';
import { FormsModule } from '@angular/forms'
import { UsersService } from './shared/services/users.service';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';

@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent,
    UserFormComponent,
    ShortTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports :[
    ListUserComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
