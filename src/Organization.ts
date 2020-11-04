import { JsonTypeName } from 'jackson-js';
import User from './User';

@JsonTypeName({ value: 'ORG' })
export default class Organization extends User {
  orgCode: string;
  businessName: string;
  officeAddress: string;
}
