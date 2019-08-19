import { Component, OnInit } from '@angular/core';
import User from '../user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  updateSubs: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.userService.getUser(+id).subscribe((user: User) => {
      this.user = user;
    })
  }

  onSubmit(user: User) {
    user.id = this.user.id;
    this.updateSubs = this.userService.updateUser(user).subscribe((user: User) => {
      this.router.navigate(['/users']);
    })
  }

  ngOnDestroy(): void {
    if (this.updateSubs) {
      this.updateSubs.unsubscribe();
    }
  }
}
