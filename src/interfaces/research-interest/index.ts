import { GetQueryInterface } from 'interfaces';

export interface ResearchInterestInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ResearchInterestGetQueryInterface extends GetQueryInterface {
  id?: string;
}
