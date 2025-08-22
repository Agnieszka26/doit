import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  Timestamp,
} from '@angular/fire/firestore';
const dateFormatter = (timestamp: Timestamp): string =>{

const date = timestamp.toDate();

const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = date.getFullYear();

const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');

return `${day}/${month}/${year} | ${hours}:${minutes}`;

}

export interface TaskInterface {
  createdAt: Date;
  id: string;
  name: string;
  description: string;
  time: Date;
  isComplete: boolean;
  formattedTime: string;
  user: [];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private firestore = inject(Firestore);
  async getTasks() {
    const querySnapshot = await getDocs(collection(this.firestore, 'tasks'));
    const tasks: TaskInterface[] = querySnapshot.docs.map((docSnap) => {
    const time = dateFormatter( docSnap.data()['time']) 
      

      return { id: docSnap.id, formattedTime: time, ...docSnap.data() } as TaskInterface;
    });
    const completed = tasks.filter((task) => task.isComplete) ?? []
    const incomplete = tasks.filter((task) => !task.isComplete) ?? []
    console.log("completed", completed, "incomplete", incomplete)

  return { completed, incomplete };
  }

  async getTaskById(id: string): Promise<TaskInterface | undefined> {
    const docRef = doc(this.firestore, 'tasks', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as TaskInterface;
    } else {
      return undefined;
    }
  }

  async addTask(task: TaskInterface): Promise<void> {
    const tasksCollection = collection(this.firestore, 'tasks');
    await addDoc(tasksCollection, task);
  }

  async updateTask(id: string, task: Partial<TaskInterface>): Promise<void> {
    const docRef = doc(this.firestore, 'tasks', id);
    await updateDoc(docRef, task);
  }

  async deleteTask(id: string): Promise<void> {
    const docRef = doc(this.firestore, 'tasks', id);
    await deleteDoc(docRef);
  }
}
