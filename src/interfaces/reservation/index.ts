import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  table_number: number;
  reservation_time: any;
  number_of_people: number;
  special_request?: string;
  created_at?: any;
  updated_at?: any;
  table?: TableInterface[];
  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {
    table?: number;
  };
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;
  special_request?: string;
}