
alter table paymentorder add checkouttype varchar(25)
;
alter table paymentorder_paid add checkouttype varchar(25)
;
alter table paymentorder_cancelled add checkouttype varchar(25)
;