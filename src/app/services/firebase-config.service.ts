import { Injectable } from '@angular/core';
import { RemoteConfig, fetchAndActivate, getBoolean } from '@angular/fire/remote-config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseConfigService {
  constructor(private remoteConfig: RemoteConfig) {}

  async init(): Promise<void> {
    await fetchAndActivate(this.remoteConfig);
  }

  isCategoriesEnabled(): boolean {
    return getBoolean(this.remoteConfig, 'enable_categories');
  }
}
