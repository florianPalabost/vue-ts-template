import axios from 'axios';

const URL = 'http://localhost:3000';

type Id = string | number;
class ApiService {
    async retrieveAll<Type>(): Promise<unknown> {
        return await axios.get(URL);
    }

    async retrieveOne<Type>(id: Id): Promise<unknown> {
        return await axios.get(URL + '/' + id);
    }

    async create<Type>(newItem: Type): Promise<unknown> {
        return await axios.post(URL, newItem);
    }

    async update<Type>(id: string | number, updatedItem: Type): Promise<unknown> {
        return await axios.patch(URL + '/' + id);
    }

    async removeAll<Type>(): Promise<unknown> {
        return await axios.delete(URL);
    }

    async removeOne<Type>(id: Id): Promise<unknown> {
        return await axios.delete(URL + '/' + id);
    }
}

export default new ApiService();
