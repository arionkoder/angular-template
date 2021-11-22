import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureExampleService {
  /**
   * Creates an instance of FeatureExampleService.
   * @param {HttpClient} http
   * @memberof FeatureExampleService
   */
  constructor(private readonly http: HttpClient) {}
}
