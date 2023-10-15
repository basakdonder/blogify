export default class ApiFetcher {
  constructor() {}

  async fetchData(path: string) {
    const url = `${process.env.API_ENDPOINT}${path}?format=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
