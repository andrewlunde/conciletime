namespace rescuetime;

entity Slice : managed {
  key ID  : UUID;
  account   : String;
  application   : String;
  document   : String;
  startTime  : DateTime;
  endTime  : DateTime;
}