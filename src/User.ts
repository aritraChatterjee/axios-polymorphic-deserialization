import { JsonClassType, JsonProperty, JsonSubTypes } from 'jackson-js';
import { JsonTypeInfo, JsonTypeInfoAs, JsonTypeInfoId } from 'jackson-js/dist/decorators/JsonTypeInfo';
import Individual from './Individual';
import Organization from './Organization';

@JsonTypeInfo({
  use: JsonTypeInfoId.NAME,
  include: JsonTypeInfoAs.PROPERTY,
  property: 'userType'
})
@JsonSubTypes({
  types: [
    { class: () => Individual, name: 'IND' },
    { class: () => Organization, name: 'ORG' }
  ]
})
export default class User {
  userCode: string;

  @JsonProperty()
  @JsonClassType({ type: () => [String] })
  userType: string;
}
