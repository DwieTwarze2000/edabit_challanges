<?php
//  Create a function to return the amount of potatoes there are in a string. 
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2

function potatoes($str) {
    return substr_count($str, "potatoe");
}

?>