namespace rescuetime;

using { cuid } from '@sap/cds/common';
using { tracked } from '@sap/cds/common';
using { temporal } from '@sap/cds/common';

entity Slices : cuid, tracked, temporal {
  account   : String;
  application   : String;
  document   : String;
}