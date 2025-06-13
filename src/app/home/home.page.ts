import { Component, OnInit } from '@angular/core';
import { Category, StorageService, Task } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  newTask = '';
  newCategoryName = '';
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  taskCategoryId: number | null = null;
  filteredTasks: Task[] = [];

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.tasks = await this.storageService.getTasks();
    this.categories = await this.storageService.getCategories();
    this.filterTasks();
    
  }

  async addTask() {
  if (!this.newTask.trim()) return;

  const task: Task = {
    id: Date.now(),
    title: this.newTask.trim(),
    completed: false,
    categoryId: this.taskCategoryId || null
  };

  this.tasks.push(task);
  await this.storageService.saveTasks(this.tasks);

  this.newTask = '';
  this.taskCategoryId = null;
  this.filterTasks(); // ✅ Actualiza la vista
}

  async toggleComplete(task: Task) {
    task.completed = !task.completed;
    await this.storageService.saveTasks(this.tasks);
  }

  async deleteTask(task: Task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
  await this.storageService.saveTasks(this.tasks);
  this.filterTasks(); // ✅ Actualiza la vista
}

  filterTasks() {
  this.filteredTasks = this.tasks.filter(t =>
    !this.selectedCategoryId || t.categoryId === this.selectedCategoryId
  );
}

  async addCategory() {
  if (!this.newCategoryName.trim()) return;
  const category: Category = {
    id: Date.now(),
    name: this.newCategoryName.trim(),
  };
  this.categories.push(category);
  await this.storageService.saveCategories(this.categories);
  this.newCategoryName = '';
}

async deleteCategory(cat: Category) {
  this.categories = this.categories.filter(c => c.id !== cat.id);
  await this.storageService.saveCategories(this.categories);

  // Quitar categoría de tareas existentes
  this.tasks.forEach(t => {
    if (t.categoryId === cat.id) t.categoryId = null;
  });
  await this.storageService.saveTasks(this.tasks);
}
}
