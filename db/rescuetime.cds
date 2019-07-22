namespace rescuetime;

using { cuid } from '@sap/cds/common';
using { managed } from '@sap/cds/common';
using { temporal } from '@sap/cds/common';

entity Slices : cuid, managed, temporal {
  account   : String;
  application   : String;
  document   : String;
}

define view SlicesDuration as SELECT from Slices {
  ID,
  validFrom as SliceTime,
  application,
  document
}
