namespace rescuetime;

using { temporal } from '@sap/cds/common';

entity Slices : temporal{
  key ID  : UUID;
  account   : String;
  application   : String;
  document   : String;
}