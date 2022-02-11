<?php
header('Content-Type: application/json; charset=utf-8'); // creo un documento json
include './cors.php'; // abilito il cross origin

// domande e scelte Answer
$data = [
    [
        'titolo' => ' Question  1?',
        'risp' => [
        'Answer 01',
        'Answer 02',
        'Answer 03',
        'Answer 04',
        ]                    
    ],
    [
       'titolo' => 'Question 2?',
        'risp' => [
        'Answer 1',
        'Answer 2',
        'Answer 3',
        'Answer 4',
        ],       
    ],
    [
        'titolo' => 'Question 3?',
         'risp' => [
         'Answer 1',
         'Answer 2',
         'Answer 3',
         'Answer 4',
         ],       
     ],
    'verifica'=>"001010000010" //soluzione che invio alla fine
];

$i = ($_GET['val']);
$ext = (strlen($i));
$len = strlen(($data['verifica']));

if ($ext >= $len){
    
    echo json_encode($data['verifica']);
}
else{    

    echo json_encode($data[$ext/4]);

}
    


