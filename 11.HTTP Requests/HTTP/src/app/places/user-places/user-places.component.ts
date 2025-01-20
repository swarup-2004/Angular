import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  private httpClient = inject(HttpClient);

  places = signal<Place[] | undefined>(undefined);

  private destroyRef = inject(DestroyRef);

  isFetching = signal<boolean>(false);

  error = signal<string>('');
  
  ngOnInit(): void {
    this.isFetching.set(true);
      const subscription = this.httpClient.get<{places: Place[]}>("http://localhost:3000/user-places").subscribe({
        next: (response) => {
          // console.log(response);
          this.places.set(response.places);
        },
        complete: () => {
          this.isFetching.set(false);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        }

      });

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
  }




}
