<?php
header("Content-Type:application/json;charset=utf8");
require("init.php");
//$result=[];
////@$date=$REQUEST["date"];
$output=[
 "count"=>0,
 "pageSize"=>16,
 "pageCount"=>0,
 "pageNo"=>0,
 "data"=>[]
];
@$pno=$_REQUEST["pno"];
@$sub_id=$_REQUEST["sub_id"];
if(!$sub_id)
$sub_id=1;
if(!$pno)
$pno=0;
$output["pageNo"]=($pno+1);
$sql="select * from detail where sub_id='$sub_id'";
$output["count"]=count(sql_execute($sql));
$output["pageCount"]=ceil($output["count"]/$output["pageSize"]);
$sql=$sql." limit ".($pno*$output["pageSize"]).",".$output["pageSize"];
 $result=sql_execute($sql);
 $output["data"]=$result;
echo json_encode($output);



