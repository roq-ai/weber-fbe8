import { GetQueryInterface } from 'interfaces';

export interface WorkshopInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WorkshopGetQueryInterface extends GetQueryInterface {
  id?: string;
}
