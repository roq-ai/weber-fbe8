import { GetQueryInterface } from 'interfaces';

export interface CitationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CitationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
