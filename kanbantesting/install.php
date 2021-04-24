<?php
/*
https://miro.com/oauth/authorize/?response_type=code&client_id=3074457348136685529&redirect_uri=https%3A%2F%2Fmiroplugins.devisive.de%2Fkanbantesting%2Finstall.php

*/
$code = $_GET["code"];
$redirect_url = "https://miroplugins.devisive.de/kanbantesting/install.php";

$url = "https://api.miro.com/v1/oauth/token?grant_type=authorization_code&client_id=3074457348136685529&client_secret=noWKyLNXZkCiGk8xfhHAkS9kC9fKLvgy&code=%s&redirect_uri=%s";

$url = sprintf($url, $code, $redirect_url);
//echo "<p>$url</p>";

$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);


curl_close($curl);
//echo "<pre>";
//var_dump($result);
//echo "</pre>";

echo "Installation Attempt for Kanban Metrics done";
