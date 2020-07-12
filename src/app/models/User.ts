import {Company} from './Company';
import {Address} from './Address';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
}
