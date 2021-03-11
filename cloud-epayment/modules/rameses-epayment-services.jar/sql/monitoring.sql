[getPartners]
select distinct partnerid as id
from payment_partner_option

[getTxnCounts]
select 
	pp.orgcode,
	p.paypartnerid,
	count(*) as txncount
from paymentorder_paid pp 
inner join payment p on pp.objid = p.paymentrefid
where p.txndate >= $P{fromdate} and p.txndate < $P{todate}
group by pp.orgcode, paypartnerid

[findYearRange]
select 
	min(year(txndate)) as minyear, 
	max(year(txndate)) as maxyear 
from paymentorder_paid

