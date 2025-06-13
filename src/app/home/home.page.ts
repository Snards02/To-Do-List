import { Component, OnInit } from '@angular/core';
import { StorageService, Task } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  newTask = '';

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.tasks = await this.storageService.getTasks();
  }

  async addTask() {
    if (!this.newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      title: this.newTask.trim(),
      completed: false
    };
    this.tasks.push(task);
    await this.storageService.saveTasks(this.tasks);
    this.newTask = '';
  }

  async toggleComplete(task: Task) {
    task.completed = !task.completed;
    await this.storageService.saveTasks(this.tasks);
  }

  async deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    await this.storageService.saveTasks(this.tasks);
  }
}
