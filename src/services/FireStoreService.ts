import {
    getFirestore,
    collection,
    getDocs,
    Firestore,
    doc,
    getDoc,
    DocumentReference,
    addDoc,
    type DocumentData,
    type WithFieldValue,
    deleteDoc
} from 'firebase/firestore/lite';
import fireBaseApp from '@/firebaseConfig';
import type { Id } from '@/types/types';
import { Error } from 'fp-ts-core/lib/models/Error';

class FireStoreService {
    firestore: Firestore = getFirestore(fireBaseApp);
    collection = collection(this.firestore, 'tickets');

    async retrieveAll<Type>(): Promise<unknown> {
        const items: unknown[] = [];

        const snap = await getDocs(this.collection);

        snap.forEach((doc) => {
            items.push(doc.data());
        });

        const err: Error = new Error(500, 'lol no');
        debugger;
        return items;
    }

    async retrieveOne<Type>(id: Id): Promise<unknown> {
        const docRef: DocumentReference = doc(this.firestore, 'tickets', id);
        return await getDoc(docRef); // TODO check doc exists() & get data()
    }

    async create<Type extends WithFieldValue<DocumentData>>(newItem: Type): Promise<unknown> {
        try {
            return await addDoc(this.collection, Object.assign({}, newItem));
        } catch (e) {
            console.error(e);
        }
    }

    async update<Type>(id: Id, updatedItem: Type): Promise<unknown> {
        try {
            return await addDoc(this.collection, newItem);
        } catch (e) {
            console.error(e);
        }
    }

    async removeAll<Type>(): Promise<unknown> {
        try {
            return await addDoc(this.collection, newItem);
        } catch (e) {
            console.error(e);
        }
    }

    async removeOne<Type>(id: Id): Promise<unknown> {
        try {
            return await deleteDoc(this.collection, newItem);
        } catch (e) {
            console.error(e);
        }
    }
}

export default new FireStoreService();
