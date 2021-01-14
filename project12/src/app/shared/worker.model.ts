export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Урабек', surname: 'Абв-гдеежжи', type: 0 },
  { id: 2, name: 'Сигизмунд', surname: 'Ежжи', type: 1 },
  { id: 3, name: 'Артем', surname: 'Артемов', type: 2 },
  { id: 4, name: 'Иван', surname: 'Сигизмундов', type: 3 },
];
