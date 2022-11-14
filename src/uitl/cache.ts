class LocalCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string): any {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }
  cleatCache() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
