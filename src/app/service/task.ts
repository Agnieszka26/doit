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
} from '@angular/fire/firestore';

export interface TaskInterface {
  createdAt: Date;
  id: string;
  name: string;
  description: string;
  time: Date;
  isCompleted: boolean;
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
      return { id: docSnap.id, ...docSnap.data() } as TaskInterface;
    });

    return tasks;
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
