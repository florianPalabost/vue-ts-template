import axios from 'axios';

const URL = 'http://localhost:3000';

type Id = string | number;
class ApiService {
    async retrieveAll<Type>(): Promise<unknown> {
        return await axios.get<Type>(URL);
    }

    async retrieveOne<Type>(id: Id): Promise<unknown> {
        return await axios.get<Type>(URL + '/' + id);
    }

    async create<Type>(newItem: Type): Promise<unknown> {
        return await axios.post<Type>(URL, newItem);
    }

    async update<Type>(id: string | number, updatedItem: Type): Promise<unknown> {
        return await axios.patch(URL + '/' + id, updatedItem);
    }

    async removeAll<Type>(): Promise<unknown> {
        return await axios.delete<Type>(URL);
    }

    async removeOne<Type>(id: Id): Promise<unknown> {
        return await axios.delete<Type>(URL + '/' + id);
    }
}

export default new ApiService();
