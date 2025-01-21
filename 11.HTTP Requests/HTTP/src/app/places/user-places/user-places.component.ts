import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  private httpClient = inject(HttpClient);

  

  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);

  isFetching = signal<boolean>(false);

  places = this.placesService.loadedUserPlaces;

  error = signal<string>('');
  
  ngOnInit(): void {
    this.isFetching.set(true);
      const subscription = this.placesService.loadUserPlaces().subscribe({
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

  onSelectPlace(place: Place) {
    this.placesService.removeUserPlace(place).subscribe();
  }




}
