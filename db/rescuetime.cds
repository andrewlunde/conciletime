namespace rescuetime;

entity Slices {
  key ID  : UUID;
  account   : String;
  application   : String;
  document   : String;
  startTime  : DateTime;
  endTime  : DateTime;
}