export class StorageService {
    static getItem(key: string): any {
        try {
            const json = localStorage.getItem(key);

            return JSON.parse(json);
        } catch (Error) {
            return null;
        }
    }

    static setItem(key: string, data: any) {
        const writableData = typeof data !== 'string'
            ? JSON.stringify(data)
            : data;

        localStorage.setItem(key, writableData);
    }
}
