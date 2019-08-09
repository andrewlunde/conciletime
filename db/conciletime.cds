namespace conciletime;

using { cuid } from '@sap/cds/common';
using { managed } from '@sap/cds/common';
using { temporal } from '@sap/cds/common';

entity UUVisits : cuid, managed, temporal {
  uuguid   : String;
  expires   : String;
}
