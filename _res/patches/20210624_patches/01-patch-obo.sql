
alter table obo_permit_requirement add (
    `allowed` varchar(255) NULL, 
    `disallowed` varchar(255) NULL
)
;


CREATE TABLE `obo_requirement_list` ( 
   `objid` varchar(50) NOT NULL, 
   `orgcode` varchar(10) NULL, 
   `apptype` varchar(50) NULL, 
   `text` text NULL,
   CONSTRAINT `pk_obo_requirement_list` PRIMARY KEY (`objid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
; 


alter table obo_requirement_type add (
    `allowed` varchar(255) NULL, 
    `disallowed` varchar(255) NULL
)
;