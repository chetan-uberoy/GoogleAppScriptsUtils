{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red246\green247\blue249;\red46\green49\blue51;
\red24\green25\blue27;\red77\green80\blue85;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
\red97\green3\blue173;}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c12549\c12941\c14118;\cssrgb\c37255\c38824\c40784;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
\cssrgb\c46275\c15294\c73333;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 convertAndWriteToCSV\cf4 \strokec4 (\cf5 \strokec5 fileName\cf4 \strokec4 , \cf5 \strokec5 csvFileName\cf4 \strokec4 , \cf5 \strokec5 folderName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 try\cf4 \strokec4  \{\cb1 \
\cb3     \cf6 \strokec6 // Get all files with the given name\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 files\cf4 \strokec4  = \cf7 \strokec7 DriveApp\cf4 \strokec4 .\cf5 \strokec5 getFilesByName\cf4 \strokec4 (\cf5 \strokec5 fileName\cf4 \strokec4 );\cb1 \
\
\cb3     \cf6 \strokec6 // Check if any files were found\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 files\cf4 \strokec4 .\cf5 \strokec5 hasNext\cf4 \strokec4 ()) \{\cb1 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 file\cf4 \strokec4  = \cf5 \strokec5 files\cf4 \strokec4 .\cf5 \strokec5 next\cf4 \strokec4 (); \cf6 \strokec6 // Get the first file that matches the name\cf4 \cb1 \strokec4 \
\
\cb3       \cf6 \strokec6 // Convert the file to Google Docs format using the Advanced Drive Service\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 docFile\cf4 \strokec4  = \cf7 \strokec7 Drive\cf4 \strokec4 .\cf7 \strokec7 Files\cf4 \strokec4 .\cf5 \strokec5 copy\cf4 \strokec4 (\{\}, \cf5 \strokec5 file\cf4 \strokec4 .\cf5 \strokec5 getId\cf4 \strokec4 (), \{\cf5 \strokec5 mimeType\cf4 \strokec4 : \cf8 \strokec8 'application/vnd.google-apps.document'\cf4 \strokec4 \});\cb1 \
\
\cb3       \cf6 \strokec6 // Open the Google Docs file\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 doc\cf4 \strokec4  = \cf7 \strokec7 DocumentApp\cf4 \strokec4 .\cf5 \strokec5 openById\cf4 \strokec4 (\cf5 \strokec5 docFile\cf4 \strokec4 .\cf5 \strokec5 id\cf4 \strokec4 );\cb1 \
\
\cb3       \cf6 \strokec6 // Get the content of the document\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 body\cf4 \strokec4  = \cf5 \strokec5 doc\cf4 \strokec4 .\cf5 \strokec5 getBody\cf4 \strokec4 ();\cb1 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 text\cf4 \strokec4  = \cf5 \strokec5 body\cf4 \strokec4 .\cf5 \strokec5 getText\cf4 \strokec4 ();\cb1 \
\
\cb3       \cf6 \strokec6 // Split the text into lines\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 lines\cf4 \strokec4  = \cf5 \strokec5 text\cf4 \strokec4 .\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 '\\n'\cf4 \strokec4 );\cb1 \
\
\cb3       \cf6 \strokec6 // Define the CSV headers, including the new columns\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 headers\cf4 \strokec4  = [\cb1 \
\cb3         \cf8 \strokec8 "mrn"\cf4 \strokec4 , \cf8 \strokec8 "last_name"\cf4 \strokec4 , \cf8 \strokec8 "first_name"\cf4 \strokec4 , \cf8 \strokec8 "date_of_birth"\cf4 \strokec4 , \cf8 \strokec8 "gender"\cf4 \strokec4 , \cb1 \
\cb3         \cf8 \strokec8 "phone_number"\cf4 \strokec4 , \cf8 \strokec8 "provider_name"\cf4 \strokec4 , \cf8 \strokec8 "upcoming_procedure_type"\cf4 \strokec4 , \cf8 \strokec8 "upcoming_procedure_date"\cf4 \strokec4 , \cf8 \strokec8 "upcoming_procedure_arrival_location"\cf4 \strokec4 , \cf8 \strokec8 "upcoming_procedure_prep"\cf4 \strokec4 , \cf8 \strokec8 "upcoming_procedure_arrival_buffer"\cf4 \strokec4 , \cf8 \strokec8 "state"\cf4 \strokec4 , \cf8 \strokec8 "condition_codes"\cf4 \cb1 \strokec4 \
\cb3       ];\cb1 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 // Create an array to hold CSV rows\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 csvRows\cf4 \strokec4  = [];\cb1 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 // Add headers as the first row\cf4 \cb1 \strokec4 \
\cb3       \cf5 \strokec5 csvRows\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 (\cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 join\cf4 \strokec4 (\cf8 \strokec8 ","\cf4 \strokec4 ));\cb1 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 // Loop through the lines and group them into rows of 9\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 i\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4  < \cf5 \strokec5 lines\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4  += \cf9 \strokec9 8\cf4 \strokec4 ) \{\cb1 \
\
\cb3         \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 7\cf4 \strokec4  < \cf5 \strokec5 lines\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ) \{ \cf6 \strokec6 // Ensure there are at least 8 lines remaining\cf4 \cb1 \strokec4 \
\cb3           \cb1 \
\cb3           \cf6 \strokec6 // Extract and format each field\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 mrnPattern\cf4 \strokec4  = \cf10 \cb3 \strokec10 /^[a-zA-Z]*\\d+[a-zA-Z]*$/\cf4 \cb3 \strokec4 ;\cb1 \
\cb3           \cf2 \strokec2 while\cf4 \strokec4  (!\cf5 \strokec5 mrnPattern\cf4 \strokec4 .\cf5 \strokec5 test\cf4 \strokec4 (\cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ].\cf5 \strokec5 trim\cf4 \strokec4 ()) || \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ].\cf5 \strokec5 trim\cf4 \strokec4 () == \cf8 \strokec8 ""\cf4 \strokec4 )\cb1 \
\cb3               \cf5 \strokec5 i\cf4 \strokec4 ++;\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 mrn\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ];\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 fullLastName\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 1\cf4 \strokec4 ].\cf5 \strokec5 trim\cf4 \strokec4 ().\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 " "\cf4 \strokec4 );\cb1 \
\cb3           \cf5 \strokec5 lastName\cf4 \strokec4  = \cf5 \strokec5 fullLastName\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ];\cb1 \
\
\
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 fullFirstName\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 2\cf4 \strokec4 ].\cf5 \strokec5 trim\cf4 \strokec4 ().\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 " "\cf4 \strokec4 );\cb1 \
\cb3           \cf5 \strokec5 firstName\cf4 \strokec4  = \cf5 \strokec5 fullFirstName\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ];\cb1 \
\
\cb3           \cf6 \strokec6 // Format date_of_birth to YYYY-MM-DD\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 dob\cf4 \strokec4  = \cf5 \strokec5 formatDate\cf4 \strokec4 (\cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 3\cf4 \strokec4 ]);\cb1 \
\
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 genderFull\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 4\cf4 \strokec4 ];\cb1 \
\cb3           \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 genderFull\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 () == \cf8 \strokec8 "Male"\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf5 \strokec5 gender\cf4 \strokec4  = \cf8 \strokec8 "M"\cf4 \strokec4 ;\cb1 \
\cb3           \} \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 genderFull\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 () == \cf8 \strokec8 "Female"\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf5 \strokec5 gender\cf4 \strokec4  = \cf8 \strokec8 "F"\cf4 \strokec4 ;\cb1 \
\cb3           \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3             \cf5 \strokec5 gender\cf4 \strokec4  = \cf8 \strokec8 "X"\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\
\cb3           \cf6 \strokec6 // Clean the phone_number to keep only numeric characters\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 phoneNumber\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 5\cf4 \strokec4 ].\cf5 \strokec5 replace\cf4 \strokec4 (\cf10 \cb3 \strokec10 /\\D/\cf2 \cb3 \strokec2 g\cf4 \strokec4 , \cf8 \strokec8 ""\cf4 \strokec4 );\cb1 \
\
\cb3           \cf6 \strokec6 // Split physician_name into multiple fields\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 physicianName\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 6\cf4 \strokec4 ];\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \{ \cf5 \strokec5 providerName\cf4 \strokec4 , \cf5 \strokec5 procedureType\cf4 \strokec4 , \cf5 \strokec5 procedureDate\cf4 \strokec4 , \cf5 \strokec5 procedureSite\cf4 \strokec4 , \cf5 \strokec5 arrivalBuffer\cf4 \strokec4  \} = \cf5 \strokec5 splitPhysicianName\cf4 \strokec4 (\cf5 \strokec5 physicianName\cf4 \strokec4 );\cb1 \
\
\cb3           \cf6 \strokec6 // Check if procedure_prep line exists and is not blank\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedurePrepRaw\cf4 \strokec4  = \cf5 \strokec5 lines\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 +\cf9 \strokec9 7\cf4 \strokec4 ];\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 splitIndex\cf4 \strokec4  = \cf5 \strokec5 procedurePrepRaw\cf4 \strokec4 .\cf5 \strokec5 search\cf4 \strokec4 (\cf10 \cb3 \strokec10 /Suprep|Golytely|Gavilyte|Nulytely/\cf2 \cb3 \strokec2 i\cf4 \strokec4 );\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedurePrep\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 includeRow\cf4 \strokec4  = \cf2 \strokec2 true\cf4 \strokec4 ;\cb1 \
\cb3           \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 splitIndex\cf4 \strokec4  !== -\cf9 \strokec9 1\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf5 \strokec5 procedurePrep\cf4 \strokec4  = (\cf5 \strokec5 i\cf4 \strokec4  + \cf9 \strokec9 7\cf4 \strokec4  < \cf5 \strokec5 lines\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4  && \cf5 \strokec5 procedurePrepRaw\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 () !== \cf8 \strokec8 ""\cf4 \strokec4 ) ? \cf5 \strokec5 procedurePrepRaw\cf4 \strokec4  : \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3           \} \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 mrnPattern\cf4 \strokec4 .\cf5 \strokec5 test\cf4 \strokec4 (\cf5 \strokec5 procedurePrepRaw\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 ())) \{ \cf6 \strokec6 // This means we have skipped ahead one row more when procedure_prep is blank\cf4 \cb1 \strokec4 \
\cb3             \cf5 \strokec5 i\cf4 \strokec4  = \cf5 \strokec5 i\cf4 \strokec4 -\cf9 \strokec9 1\cf4 \strokec4 ;\cb1 \
\cb3           \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3             \cf5 \strokec5 includeRow\cf4 \strokec4  = \cf2 \strokec2 false\cf4 \strokec4 ;\cb1 \
\cb3           \}\cb1 \
\cb3           \cf6 \strokec6 // Combine into a single CSV row\cf4 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 row\cf4 \strokec4  = [\cb1 \
\cb3             \cf5 \strokec5 mrn\cf4 \strokec4 , \cf5 \strokec5 lastName\cf4 \strokec4 , \cf5 \strokec5 firstName\cf4 \strokec4 , \cf5 \strokec5 dob\cf4 \strokec4 , \cf5 \strokec5 gender\cf4 \strokec4 , \cb1 \
\cb3             \cf5 \strokec5 phoneNumber\cf4 \strokec4 , \cf5 \strokec5 providerName\cf4 \strokec4 , \cf5 \strokec5 procedureType\cf4 \strokec4 , \cf5 \strokec5 procedureDate\cf4 \strokec4 , \cf5 \strokec5 procedureSite\cf4 \strokec4 , \cf5 \strokec5 procedurePrep\cf4 \strokec4 , \cf5 \strokec5 arrivalBuffer\cf4 \strokec4 , \cf8 \strokec8 "CA"\cf4 \strokec4 , \cf8 \strokec8 "45378"\cf4 \cb1 \strokec4 \
\cb3           ];\cb1 \
\cb3           \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 includeRow\cf4 \strokec4 )\cb1 \
\cb3             \cf5 \strokec5 csvRows\cf4 \strokec4 .\cf5 \strokec5 push\cf4 \strokec4 (\cf5 \strokec5 row\cf4 \strokec4 .\cf5 \strokec5 join\cf4 \strokec4 (\cf8 \strokec8 ","\cf4 \strokec4 )); \cf6 \strokec6 // Join row elements with commas\cf4 \cb1 \strokec4 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3       \cb1 \
\cb3       \cf6 \strokec6 // Join all rows with a newline to create the CSV content\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 csvContent\cf4 \strokec4  = \cf5 \strokec5 csvRows\cf4 \strokec4 .\cf5 \strokec5 join\cf4 \strokec4 (\cf8 \strokec8 "\\n"\cf4 \strokec4 );\cb1 \
\
\cb3       \cf6 \strokec6 // Find or create the folder\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 folder\cf4 \strokec4  = \cf5 \strokec5 getOrCreateFolder\cf4 \strokec4 (\cf5 \strokec5 folderName\cf4 \strokec4 );\cb1 \
\
\cb3       \cf6 \strokec6 // Create the CSV file in the specified folder\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 csvFile\cf4 \strokec4  = \cf5 \strokec5 folder\cf4 \strokec4 .\cf5 \strokec5 createFile\cf4 \strokec4 (\cf5 \strokec5 csvFileName\cf4 \strokec4  + \cf8 \strokec8 ".csv"\cf4 \strokec4 , \cf5 \strokec5 csvContent\cf4 \strokec4 , \cf7 \strokec7 MimeType\cf4 \strokec4 .\cf7 \strokec7 PLAIN_TEXT\cf4 \strokec4 );\cb1 \
\
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf8 \strokec8 "CSV file created: "\cf4 \strokec4  + \cf5 \strokec5 csvFile\cf4 \strokec4 .\cf5 \strokec5 getUrl\cf4 \strokec4 ());\cb1 \
\
\cb3     \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf7 \strokec7 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf8 \strokec8 "No files found with the name: "\cf4 \strokec4  + \cf5 \strokec5 fileName\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\
\cb3   \} \cf2 \strokec2 catch\cf4 \strokec4  (\cf5 \strokec5 e\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf8 \strokec8 "Error: "\cf4 \strokec4  + \cf5 \strokec5 e\cf4 \strokec4 .\cf5 \strokec5 toString\cf4 \strokec4 ());\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 // Helper function to format the date to YYYY-MM-DD\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 formatDate\cf4 \strokec4 (\cf5 \strokec5 dateStr\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 date\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 (\cf5 \strokec5 dateStr\cf4 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 isNaN\cf4 \strokec4 (\cf5 \strokec5 date\cf4 \strokec4 .\cf5 \strokec5 getTime\cf4 \strokec4 ())) \{\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 year\cf4 \strokec4  = \cf5 \strokec5 date\cf4 \strokec4 .\cf5 \strokec5 getFullYear\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 month\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + (\cf5 \strokec5 date\cf4 \strokec4 .\cf5 \strokec5 getMonth\cf4 \strokec4 () + \cf9 \strokec9 1\cf4 \strokec4 )).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 day\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + \cf5 \strokec5 date\cf4 \strokec4 .\cf5 \strokec5 getDate\cf4 \strokec4 ()).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf8 \strokec8 `\cf4 \strokec4 $\{\cf5 \strokec5 year\cf4 \strokec4 \}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf5 \strokec5 month\cf4 \strokec4 \}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf5 \strokec5 day\cf4 \strokec4 \}\cf8 \strokec8 `\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 dateStr\cf4 \strokec4 ; \cf6 \strokec6 // Return the original string if it's not a valid date\cf4 \cb1 \strokec4 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 // Helper function to split physician_name into provider_name, procedure_type, procedure_date, and procedure_site\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 splitPhysicianName\cf4 \strokec4 (\cf5 \strokec5 physicianName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 providerName\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedureType\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedureDate\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedureSiteCode\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedureSite\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 procedureCode\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 arrivalBuffer\cf4 \strokec4  = \cf8 \strokec8 ""\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf6 \strokec6 // Split by COLO or EGD\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 splitIndex\cf4 \strokec4  = \cf5 \strokec5 physicianName\cf4 \strokec4 .\cf5 \strokec5 search\cf4 \strokec4 (\cf10 \cb3 \strokec10 /COLO|EGD/\cf2 \cb3 \strokec2 i\cf4 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 splitIndex\cf4 \strokec4  !== -\cf9 \strokec9 1\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 providerFullName\cf4 \strokec4  = \cf5 \strokec5 physicianName\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf9 \strokec9 0\cf4 \strokec4 , \cf5 \strokec5 splitIndex\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ().\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 " "\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 providerName\cf4 \strokec4  = \cf8 \strokec8 "Dr. "\cf4 \strokec4  + \cf5 \strokec5 providerFullName\cf4 \strokec4 [\cf5 \strokec5 providerFullName\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 -\cf9 \strokec9 1\cf4 \strokec4 ];\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 remainingStr\cf4 \strokec4  = \cf5 \strokec5 physicianName\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf5 \strokec5 splitIndex\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf6 \strokec6 // Extract procedure type\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 dateMatch\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 match\cf4 \strokec4 (\cf10 \cb3 \strokec10 /\\d\{1,2\}\\/\\d\{1,2\}\\/\\d\{2,4\}/\cf4 \cb3 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 dateMatch\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 procedureCode\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf9 \strokec9 0\cf4 \strokec4 , \cf5 \strokec5 dateMatch\cf4 \strokec4 .\cf5 \strokec5 index\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 procedureCode\cf4 \strokec4 .\cf5 \strokec5 search\cf4 \strokec4 (\cf10 \cb3 \strokec10 /COLO/\cf2 \cb3 \strokec2 i\cf4 \strokec4 ) !== -\cf9 \strokec9 1\cf4 \strokec4  && \cf5 \strokec5 procedureCode\cf4 \strokec4 .\cf5 \strokec5 search\cf4 \strokec4 (\cf10 \cb3 \strokec10 /EGD/\cf2 \cb3 \strokec2 i\cf4 \strokec4 ) !== -\cf9 \strokec9 1\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 procedureType\cf4 \strokec4  = \cf8 \strokec8 "colonoscopy and endoscopy"\cf4 \strokec4 ;\cb1 \
\cb3       \} \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 procedureCode\cf4 \strokec4 .\cf5 \strokec5 search\cf4 \strokec4 (\cf10 \cb3 \strokec10 /EGD/\cf2 \cb3 \strokec2 i\cf4 \strokec4 ) !== -\cf9 \strokec9 1\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf5 \strokec5 procedureType\cf4 \strokec4  = \cf8 \strokec8 "endoscopy"\cf4 \strokec4 ;\cb1 \
\cb3       \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3         \cf5 \strokec5 procedureType\cf4 \strokec4  = \cf8 \strokec8 "colonoscopy"\cf4 \strokec4 ;\cb1 \
\
\cb3       \}\cb1 \
\cb3       \cf5 \strokec5 remainingStr\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf5 \strokec5 dateMatch\cf4 \strokec4 .\cf5 \strokec5 index\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\cb1 \
\
\cb3       \cf6 \strokec6 // Extract procedure date and site\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 timeMatch\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 match\cf4 \strokec4 (\cf10 \cb3 \strokec10 /\\b(AM|PM)\\b/\cf2 \cb3 \strokec2 i\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 timeMatch\cf4 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 fullProcDate\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf9 \strokec9 0\cf4 \strokec4 , \cf5 \strokec5 timeMatch\cf4 \strokec4 .\cf5 \strokec5 index\cf4 \strokec4  + \cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ().\cf5 \strokec5 split\cf4 \strokec4 (\cf8 \strokec8 " "\cf4 \strokec4 ); \cf6 \strokec6 // Include AM/PM\cf4 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 // Add an @ in the space\cf4 \cb1 \strokec4 \
\cb3         \cf5 \strokec5 procedureDate\cf4 \strokec4  = \cf5 \strokec5 fullProcDate\cf4 \strokec4 [\cf9 \strokec9 0\cf4 \strokec4 ] + \cf8 \strokec8 " @ "\cf4 \strokec4  + \cf5 \strokec5 fullProcDate\cf4 \strokec4 [\cf9 \strokec9 1\cf4 \strokec4 ] + \cf8 \strokec8 " "\cf4 \strokec4  + \cf5 \strokec5 fullProcDate\cf4 \strokec4 [\cf9 \strokec9 2\cf4 \strokec4 ];\cb1 \
\cb3         \cf5 \strokec5 procedureSiteCode\cf4 \strokec4  = \cf5 \strokec5 remainingStr\cf4 \strokec4 .\cf5 \strokec5 substring\cf4 \strokec4 (\cf5 \strokec5 timeMatch\cf4 \strokec4 .\cf5 \strokec5 index\cf4 \strokec4  + \cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 trim\cf4 \strokec4 ();\cb1 \
\cb3         \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 procedureSiteCode\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 () == \cf8 \strokec8 "ASC"\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf5 \strokec5 procedureSite\cf4 \strokec4  = \cf8 \strokec8 "Advanced Surgery Center"\cf4 \strokec4 ;\cb1 \
\cb3             \cf5 \strokec5 arrivalBuffer\cf4 \strokec4  = \cf8 \strokec8 "1 hour"\cf4 \strokec4 ;\cb1 \
\cb3         \} \cf2 \strokec2 else\cf4 \strokec4  \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 procedureSiteCode\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 () == \cf8 \strokec8 "MSC"\cf4 \strokec4 ) \{\cb1 \
\cb3             \cf5 \strokec5 procedureSite\cf4 \strokec4  = \cf8 \strokec8 "Montepelier Surgery Center"\cf4 \strokec4 ;\cb1 \
\cb3             \cf5 \strokec5 arrivalBuffer\cf4 \strokec4  = \cf8 \strokec8 "30 minutes"\cf4 \strokec4 ;\cb1 \
\cb3         \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3             \cf5 \strokec5 procedureSite\cf4 \strokec4  = \cf8 \strokec8 "Los Altos Surgery Center"\cf4 \strokec4 ;\cb1 \
\cb3             \cf5 \strokec5 arrivalBuffer\cf4 \strokec4  = \cf8 \strokec8 "1 hour"\cf4 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 providerName\cf4 \strokec4  = \cf5 \strokec5 physicianName\cf4 \strokec4 .\cf5 \strokec5 trim\cf4 \strokec4 ();\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 return\cf4 \strokec4  \{\cb1 \
\cb3     \cf5 \strokec5 providerName\cf4 \strokec4 : \cf5 \strokec5 providerName\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 procedureType\cf4 \strokec4 : \cf5 \strokec5 procedureType\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 procedureDate\cf4 \strokec4 : \cf5 \strokec5 procedureDate\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 procedureSite\cf4 \strokec4 : \cf5 \strokec5 procedureSite\cf4 \strokec4 ,\cb1 \
\cb3     \cf5 \strokec5 arrivalBuffer\cf4 \strokec4 : \cf5 \strokec5 arrivalBuffer\cf4 \cb1 \strokec4 \
\cb3   \};\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 // Helper function to get or create a folder by name\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 getOrCreateFolder\cf4 \strokec4 (\cf5 \strokec5 folderName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 folders\cf4 \strokec4  = \cf7 \strokec7 DriveApp\cf4 \strokec4 .\cf5 \strokec5 getFoldersByName\cf4 \strokec4 (\cf5 \strokec5 folderName\cf4 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 folders\cf4 \strokec4 .\cf5 \strokec5 hasNext\cf4 \strokec4 ()) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 folders\cf4 \strokec4 .\cf5 \strokec5 next\cf4 \strokec4 (); \cf6 \strokec6 // Return the first folder found\cf4 \cb1 \strokec4 \
\cb3   \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 DriveApp\cf4 \strokec4 .\cf5 \strokec5 createFolder\cf4 \strokec4 (\cf5 \strokec5 folderName\cf4 \strokec4 ); \cf6 \strokec6 // Create and return a new folder\cf4 \cb1 \strokec4 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
}