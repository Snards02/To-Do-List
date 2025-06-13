import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;
  private TASK_KEY = 'tasks';

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Obtener tareas
  async getTasks(): Promise<Task[]> {
    return (await this._storage?.get(this.TASK_KEY)) || [];
  }

  // Guardar tareas
  async saveTasks(tasks: Task[]) {
    await this._storage?.set(this.TASK_KEY, tasks);
  }
}
