alter table payment_partner add requirecheckout int null 
;

ALTER TABLE paymentorder add checkoutid varchar(255);
ALTER TABLE paymentorder_cancelled add checkoutid varchar(255);
ALTER TABLE paymentorder_paid add checkoutid varchar(255);


alter table paymentorder modify paymentrefid varchar(50) null ;
alter table paymentorder change paymentrefid _paymentrefid varchar(50) null ;

alter table paymentorder_paid modify paymentrefid varchar(50) null ;
alter table paymentorder_paid change paymentrefid _paymentrefid varchar(50) null ;

alter table paymentorder_cancelled modify paymentrefid varchar(50) null ;
alter table paymentorder_cancelled change paymentrefid _paymentrefid varchar(50) null ;
