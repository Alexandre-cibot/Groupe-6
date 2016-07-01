<?php
include("geoipcity.inc");
include("geoipregionvars.php");

$gi = geoip_open(("/home/alexandrar/www/maestro/geoloc/GeoLiteCity.dat"),GEOIP_STANDARD);

$record = geoip_record_by_addr($gi,$_SERVER['REMOTE_ADDR']);


$town = $record->city;

geoip_close($gi);
