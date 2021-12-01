<?php
// Create a function that returns true if a string contains any spaces.
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true

function hasSpaces($str) {
    if (strpos($str, ' ') !== false) {
        return True;
    }
}


?>
