import { GetQueryInterface } from 'interfaces';

export interface PatentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PatentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
