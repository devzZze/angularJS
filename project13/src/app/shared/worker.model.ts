export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Урабек', surname: 'Абв-где', phone: "+7(800)555-55-35", type: 0 },
  { id: 2, name: 'Сигизмунд', surname: 'Ежжи', phone: "+7(800)-555-55-36", type: 1 },
  { id: 3, name: 'Артем', surname: 'Артемов', phone: "+7(800)555-55-37", type: 2 },
  { id: 4, name: 'Иван', surname: 'Сигизмуф', phone: "+7(800)-555-55-38", type: 3 },
];
