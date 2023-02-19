<?php

$apiEndpoint = "https://graph.instagram.com/me/media";
$accessToken = getenv('INSTAGRAM_ACCESS_TOKEN');

$fields = "id,caption,media_type,media_url,thumbnail_url,caption,permalink";

$fullRequestUrl = "$apiEndpoint?fields=$fields&access_token=$accessToken";

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => $fullRequestUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

if ($response === false) {
    $error = curl_error($curl);
    curl_close($curl);
    die("cURL Error: $error");
}

$httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($httpCode >= 400) {
    $errorResponse = json_decode($response, true);
    $errorMessage = isset($errorResponse["error"]["message"]) ? $errorResponse['error']['message'] : 'Unknown error';
    curl_close($curl);
    die("API request had an error: $errorMessage");
}

curl_close($curl);
echo $response;
