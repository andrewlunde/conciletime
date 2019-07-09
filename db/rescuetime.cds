namespace rescuetime;

using { temporal } from '@sap/cds/common';

entity Slices : cuid, tracked, temporal {
  account   : String;
  application   : String;
  document   : String;
}