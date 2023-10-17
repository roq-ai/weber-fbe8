import { GetQueryInterface } from 'interfaces';

export interface ConferenceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ConferenceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
