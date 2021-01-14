import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
  workerEdit: any;
  name: any;
  surname: any;
  modal = false;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }
  onEditById(worker){
    this.workerEdit = worker;
    this.modal = !this.modal;
    this.name = this.workerEdit.name;
    this.surname = this.workerEdit.surname;
  }
  onEditData(worker){
    this.workers[this.workerEdit.id - 1].name = this.name;
    this.workers[this.workerEdit.id - 1].surname = this.surname;
  }
  onClose(): void{
    this.modal = !this.modal;
  }

  onAddWorker(worker) {
    if((worker.name != undefined && worker.surname != undefined) && (worker.name != "" && worker.surname != "")){
        let id =
        this.workers.length > 0
          ? this.workers[this.workers.length - 1].id + 1
          : 0;
      worker.id = id;
      this.workers.push(worker);
      console.log(worker);
    }
  }
}
