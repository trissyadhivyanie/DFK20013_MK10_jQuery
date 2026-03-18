<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    if ($username == "" || $password == "") {
        echo "<h2>Error: Please fill in all fields</h2>";
    } else {

        // REDIRECT to success page
        header("Location: success.php?user=" . urlencode($username));
        exit();

    }

} else {
    echo "No data received";
}

?>