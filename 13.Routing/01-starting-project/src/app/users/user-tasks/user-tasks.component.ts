import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  // private userService = inject(UsersService);

  // private activatedRoute = inject(ActivatedRoute);

  // userName = computed(() => {
  //   return this.userService.users.find(u => u.id === this.userId())?.name
  // });

  userName = input.required<string>();

  
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {

  const usersService = inject(UsersService);
  const username = usersService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return username;
};


export const resolveTitle: ResolveFn<string>(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
  const username = resolveUserName(activatedRoute, routerState) + 'Tasks';
  console.log(username);
  return username;
};
