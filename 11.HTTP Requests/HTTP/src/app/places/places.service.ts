import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();
  private errorSerive = inject(ErrorService);

  private httpClient = inject(HttpClient);

  loadAvailablePlaces() {
    return this.fetchPlaces("http://localhost:3000/places", "Failed to Fetch Places");
  }

  loadUserPlaces() {
    return this.fetchPlaces("http://localhost:3000/user-places", "Failed to Fetch Favourite Places")
    .pipe(tap({
      next: (userPlaces) => this.userPlaces.set(userPlaces.places),
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((p) => p.id == place.id)) {
      this.userPlaces.update(prevPlaces => [...prevPlaces, place]);
    }
    
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id
    }).pipe(
      catchError(error => {
        this.errorSerive.showError("Error while adding to favourite places");
        this.userPlaces.set(prevPlaces);
        return throwError(() => new Error("Failed to select new place"));
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();

    if (prevPlaces.some((p) => p.id == place.id)) {
      this.userPlaces.update(prevPlaces => prevPlaces.filter((p) => p.id != place.id));
    }
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`);
  }

  private fetchPlaces(url: string, errorMessage: string) {

    return this.httpClient
      .get<{places: Place[]}>(url)
      .pipe(catchError((error) => {
        return throwError(() => new Error(errorMessage));
      }));

  }
}
