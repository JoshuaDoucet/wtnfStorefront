import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private apiHost: string = 'http://wtnfapi-env.eba-uzamsy27.us-east-1.elasticbeanstalk.com:3000';
        // 'http://52.0.169.67:3000';

  constructor() {}

  getApiHost(): string {
    return this.apiHost;
  }
}
