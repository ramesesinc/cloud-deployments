
alter table gcash_log add (
  `txndate` datetime NULL,
  `txntype` varchar(32) NULL,
  `info` longtext 
)
; 

