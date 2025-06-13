import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Category {
  id: number;
  name: string;
  color?: string;
}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  categoryId: number | null;
}

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  private _storage: Storage | null = null;
  private TASK_KEY = 'tasks';
  private CATEGORY_KEY = 'categories';


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

  
// Obtener categorías
async getCategories(): Promise<Category[]> {
  return (await this._storage?.get(this.CATEGORY_KEY)) || [];
}

// Guardar categorías
async saveCategories(categories: Category[]) {
  await this._storage?.set(this.CATEGORY_KEY, categories);
}
}
