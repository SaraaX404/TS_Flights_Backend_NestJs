export interface Flight {
    id?: number;
    origin: string;
    destination: string;
    flightNumber: number;
    depart: Date;
    arrive: Date;
    nonstop: boolean;
  }
