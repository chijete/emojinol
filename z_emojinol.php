<?php

// $mode
// 1: espaรฑol -> emojinol
// 0: emojinol -> espaรฑol
function emojinol($text, $mode=1){
  $dictionary = [
    'a' => '๐',
    'b' => '๐',
    'c' => '๐',
    'd' => '๐คฃ',
    'e' => '๐',
    'f' => '๐',
    'g' => '๐',
    'h' => '๐',
    'i' => '๐',
    'j' => '๐',
    'k' => '๐',
    'l' => '๐',
    'm' => '๐',
    'n' => '๐',
    'รฑ' => '๐',
    'o' => '๐ฅฐ',
    'p' => '๐',
    'q' => '๐',
    'r' => '๐',
    's' => '๐',
    't' => '๐ค',
    'u' => '๐คฉ',
    'v' => '๐ค',
    'w' => '๐คจ',
    'x' => '๐',
    'y' => '๐',
    'z' => '๐ถ',

    'A' => '๐',
    'B' => '๐ฃ',
    'C' => '๐ฅ',
    'D' => '๐ฎ',
    'E' => '๐ค',
    'F' => '๐ฏ',
    'G' => '๐ช',
    'H' => '๐ซ',
    'I' => '๐ฅฑ',
    'J' => '๐ด',
    'K' => '๐',
    'L' => '๐',
    'M' => '๐',
    'N' => '๐',
    'ร' => '๐คค',
    'O' => '๐',
    'P' => '๐',
    'Q' => '๐',
    'R' => '๐',
    'S' => '๐',
    'T' => '๐ค',
    'U' => '๐ฒ',
    'V' => '๐',
    'W' => '๐',
    'X' => '๐',
    'Y' => '๐',
    'Z' => '๐ค',

    'รก' => '๐ข',
    'รฉ' => '๐ญ',
    'รญ' => '๐ฆ',
    'รณ' => '๐จ',
    'รบ' => '๐ฉ',
    'ร' => '๐คฏ',
    'ร' => '๐ฌ',
    'ร' => '๐ฐ',
    'ร' => '๐ฑ',
    'ร' => '๐ฅต',

    'รค' => '๐ฅถ',
    'รซ' => '๐ณ',
    'รฏ' => '๐คช',
    'รถ' => '๐ต',
    'รผ' => '๐ฅด',
    'ร' => '๐ ',
    'ร' => '๐ก',
    'ร' => '๐คฌ',
    'ร' => '๐ท',
    'ร' => '๐ค',

    ',' => '๐ช',
    '.' => '๐ฆถ',
    ';' => '๐ค',
    ':' => 'โ',
    'ยฟ' => '๐',
    '?' => '๐',
    'ยก' => '๐',
    '!' => '๐',
    '(' => '๐',
    ')' => '๐',
    '[' => '๐ค',
    ']' => '๐ค',
    '"' => '๐',
    '-' => 'โ',
    '_' => '๐',
    '/' => '๐',
    '*' => '๐ค',
    '+' => '๐',
    '=' => '๐',
    '#' => '๐',
    '$' => '๐ค',
    '%' => '๐ค',
    '&' => '๐ค',
    '|' => '๐ฆต',
    'ยฐ' => '๐',
    'ยฌ' => '๐',
    "'" => 'โ',
    '{' => '๐',
    '}' => '๐คฒ',
    '@' => '๐',
    '\\' => '๐ฅ',
    '~' => '๐',
    '<' => '๐',
    '>' => '๐',

    '0' => '๐ฑ',
    '1' => '๐บ',
    '2' => '๐ธ',
    '3' => '๐น',
    '4' => '๐ป',
    '5' => '๐ผ',
    '6' => '๐ฝ',
    '7' => '๐',
    '8' => '๐ฟ',
    '9' => '๐พ',
  ];
  if ($mode == 1) {
    foreach ($dictionary as $esp => $emj) {
      $text = str_replace($esp, $emj, $text);
    }
  } else {
    foreach ($dictionary as $esp => $emj) {
      $text = str_replace($emj, $esp, $text);
    }
  }
  return $text;
}

$esp_string = 'Hola mundo! _____ Esto es una patata รณnline. 45+45=90; los patos gordos online de la vida y EL AMOR. {es} (como) [PATO].';
echo $esp_string;
echo "\n";
$emj_string = emojinol($esp_string, 1);
echo $emj_string;
echo "\n";
$esp_string_transl = emojinol($emj_string, 0);
echo $esp_string_transl;

?>