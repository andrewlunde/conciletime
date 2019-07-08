namespace rescuetime;

entity Slice {
  key ID  : UUID;
  account   : String;
  application   : String;
  document   : String;
  startTime  : DateTime;
  endTime  : DateTime;
}