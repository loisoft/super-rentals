import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]) {
  if (communityPropertyTypes.contains(type)) {
    return 'Commnunity';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
