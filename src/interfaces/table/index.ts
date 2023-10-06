import { RestaurantInterface } from 'interfaces/restaurant';
import { ReservationInterface } from 'interfaces/reservation';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  restaurant_id: string;
  table_number: number;
  capacity: number;
  location: string;
  availability?: boolean;
  reservation_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  reservation?: ReservationInterface;
  _count?: {};
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  location?: string;
  reservation_id?: string;
}
