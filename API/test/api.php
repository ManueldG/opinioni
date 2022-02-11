<?php
header('Content-Type: application/json; charset=utf-8'); // creo un documento json
include './cors.php'; // abilito il cross origin

// domande e scelte
$data = [
    [
        'titolo' => ' domanda 1?',
        'risp' => [
        'risp 01',
        'risp 02',
        'risp 03',
        'risp 04',
        ]                    
    ],
    [
       'titolo' => 'domanda 2?',
        'risp' => [
        'risp 1',
        'risp 2',
        'risp 3',
        'risp 4',
        ],       
    ],
    [
        'titolo' => 'domanda 3?',
         'risp' => [
         'risp 1',
         'risp 2',
         'risp 3',
         'risp 4',
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
    


