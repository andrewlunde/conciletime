namespace conciletime;

using { cuid } from '@sap/cds/common';
using { managed } from '@sap/cds/common';
using { temporal } from '@sap/cds/common';

entity UUVisits : cuid {
  uuguid	: UUID;
  expiresOn	: DateTime;
  createdAt	: DateTime @cds.on.insert: $now;
}
