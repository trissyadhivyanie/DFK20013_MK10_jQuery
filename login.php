<?php

if (isset($_POST['username']) && isset($_POST['password'])) {

    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    if ($username == "" || $password == "") {
        echo "Error: Please fill in all fields.";
    } else {
        echo "Login Successful <br>";
        echo "Welcome " . $username;
    }

} else {
    echo "No data received.";
}

?>