namespace conciletime;

using { cuid } from '@sap/cds/common';
using { managed } from '@sap/cds/common';
using { temporal } from '@sap/cds/common';

entity UUVisits : cuid {
  uuguid   : String;
  expires   : String;
}
