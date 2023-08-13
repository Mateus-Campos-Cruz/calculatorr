<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $expression = $_POST["expression"];
    $result = eval("return $expression;");
    echo $result;
}
?>
