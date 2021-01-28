<?
require_once (__DIR__.'/crest.php');

$result = CRest::call(
		'crm.lead.add',
		['FIELDS' => ['TITLE' => 'New lead', 'NAME' => 'John', 'LAST_NAME' => 'Smith', 'EMAIL' => ['0' => ['VALUE' => 'mail@example.com', 'VALUE_TYPE' => 'WORK', ], ], 'PHONE' => ['0' => ['VALUE' => '555888', 'VALUE_TYPE' => 'WORK', ], ], ], ]
	);

echo '<pre>';
	print_r($result);
echo '</pre>';