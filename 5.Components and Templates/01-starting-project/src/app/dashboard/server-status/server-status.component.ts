import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard.component";
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardComponent, DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {

  currentStatus ='online';

  image = {src:'status.png', alt:'A signal symbol'};
  title = "Server Status";

}
