import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {

    interval(1000).pipe(
      map((val) => val * 2)
    ).subscribe({
      next: (val) => console.log(val)
    });

      
  }

}
