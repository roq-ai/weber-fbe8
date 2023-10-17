import { CollaborationInterface } from 'interfaces/collaboration';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  start_date?: any;
  end_date?: any;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  collaboration?: CollaborationInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    collaboration?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  organization_id?: string;
}
