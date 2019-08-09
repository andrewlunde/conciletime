using my.bookshop as my from '../db/data-model';
using rescuetime as rt from '../db/rescuetime';
using conciletime as ct from '../db/conciletime';

service CatalogService {
  entity Books    @readonly as projection on my.Books;
  entity Authors  @readonly as projection on my.Authors;
  entity Orders @insertonly as projection on my.Orders;
  entity Slices as projection on rt.Slices;
  entity Slices_Duration @readonly as projection on rt.Slices_Duration;
  entity Visits as projection on ct.UUVisits;
}
