export class StorageService {
  public get<T>(key: string): T {
    return JSON.parse(globalThis.localStorage.getItem(key) as string);
  }
    
  public set<T>(key: string, payload: T): void {
    globalThis.localStorage.setItem(key, JSON.stringify(payload));
  }
    
  public remove(key: string): void {
    globalThis.localStorage.removeItem(key);
  }
}