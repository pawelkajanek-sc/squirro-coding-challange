export interface Book {
  type: string;
  id: string;
  attributes: {
    name: string;
    copiesSold: number;
  }
  relationships: {
    author: {
      data: {
        id: string;
        fullName?: string;
      }
    }
  }
}