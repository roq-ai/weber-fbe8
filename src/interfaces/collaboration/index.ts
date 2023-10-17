import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface CollaborationInterface {
  id?: string;
  collaborator_id: string;
  project_id: string;
  role?: string;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {};
}

export interface CollaborationGetQueryInterface extends GetQueryInterface {
  id?: string;
  collaborator_id?: string;
  project_id?: string;
  role?: string;
}
