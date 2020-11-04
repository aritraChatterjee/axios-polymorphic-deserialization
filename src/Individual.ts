import { JsonTypeName } from 'jackson-js';
import User from './User';

@JsonTypeName({ value: 'IND' })
export default class Individual extends User {
  name: string;
  residentialAddress: string;
}
