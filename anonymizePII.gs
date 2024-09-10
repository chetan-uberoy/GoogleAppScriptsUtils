{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red246\green247\blue249;\red46\green49\blue51;
\red24\green25\blue27;\red77\green80\blue85;\red186\green6\blue115;\red162\green0\blue16;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c12549\c12941\c14118;\cssrgb\c37255\c38824\c40784;\cssrgb\c78824\c15294\c52549;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;
}
\margl1440\margr1440\vieww32140\viewh16140\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 anonymizePIIFromCSV\cf4 \strokec4 (\cf5 \strokec5 csvFileName\cf4 \strokec4 , \cf5 \strokec5 folderName\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf6 \strokec6 // Access the CSV file in Google Drive by name\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 files\cf4 \strokec4  = \cf7 \strokec7 DriveApp\cf4 \strokec4 .\cf5 \strokec5 getFilesByName\cf4 \strokec4 (\cf5 \strokec5 csvFileName\cf4 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (!\cf5 \strokec5 files\cf4 \strokec4 .\cf5 \strokec5 hasNext\cf4 \strokec4 ()) \{\cb1 \
\cb3     \cf7 \strokec7 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf8 \strokec8 "File not found: "\cf4 \strokec4  + \cf5 \strokec5 csvFileName\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 return\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 file\cf4 \strokec4  = \cf5 \strokec5 files\cf4 \strokec4 .\cf5 \strokec5 next\cf4 \strokec4 ();\cb1 \
\cb3   \cb1 \
\cb3   \cf6 \strokec6 // Read the contents of the file\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 csvData\cf4 \strokec4  = \cf7 \strokec7 Utilities\cf4 \strokec4 .\cf5 \strokec5 parseCsv\cf4 \strokec4 (\cf5 \strokec5 file\cf4 \strokec4 .\cf5 \strokec5 getBlob\cf4 \strokec4 ().\cf5 \strokec5 getDataAsString\cf4 \strokec4 ());\cb1 \
\
\cb3   \cf6 \strokec6 // Define the column indices (assuming 1st column is A, 2nd is B, etc.)\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 mrnIndex\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ;         \cf6 \strokec6 // Column A (0-based index)\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 firstNameIndex\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ;   \cf6 \strokec6 // Column B\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 lastNameIndex\cf4 \strokec4  = \cf9 \strokec9 2\cf4 \strokec4 ;    \cf6 \strokec6 // Column C\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 dobIndex\cf4 \strokec4  = \cf9 \strokec9 4\cf4 \strokec4 ;         \cf6 \strokec6 // Column D\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 phoneNumberIndex\cf4 \strokec4  = \cf9 \strokec9 5\cf4 \strokec4 ; \cf6 \strokec6 // Column E\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 dischargeDate\cf4 \strokec4  = \cf9 \strokec9 9\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf6 \strokec6 // List of 50 unique random first names, including middle names and titles\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 firstNames\cf4 \strokec4  = [\cb1 \
\cb3     \cf8 \strokec8 'John'\cf4 \strokec4 , \cf8 \strokec8 'Michael'\cf4 \strokec4 , \cf8 \strokec8 'Emily'\cf4 \strokec4 , \cf8 \strokec8 'Chris'\cf4 \strokec4 , \cf8 \strokec8 'Laura'\cf4 \strokec4 , \cf8 \strokec8 'David'\cf4 \strokec4 , \cf8 \strokec8 'Sarah'\cf4 \strokec4 , \cf8 \strokec8 'James'\cf4 \strokec4 , \cf8 \strokec8 'Robert'\cf4 \strokec4 , \cf8 \strokec8 'William'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Richard'\cf4 \strokec4 , \cf8 \strokec8 'Joseph'\cf4 \strokec4 , \cf8 \strokec8 'Thomas'\cf4 \strokec4 , \cf8 \strokec8 'Charles'\cf4 \strokec4 , \cf8 \strokec8 'Daniel'\cf4 \strokec4 , \cf8 \strokec8 'Matthew'\cf4 \strokec4 , \cf8 \strokec8 'Anthony'\cf4 \strokec4 , \cf8 \strokec8 'Mark'\cf4 \strokec4 , \cf8 \strokec8 'Donald'\cf4 \strokec4 , \cf8 \strokec8 'Steven'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Paul'\cf4 \strokec4 , \cf8 \strokec8 'Andrew'\cf4 \strokec4 , \cf8 \strokec8 'Joshua'\cf4 \strokec4 , \cf8 \strokec8 'Kenneth'\cf4 \strokec4 , \cf8 \strokec8 'Kevin'\cf4 \strokec4 , \cf8 \strokec8 'Brian'\cf4 \strokec4 , \cf8 \strokec8 'George'\cf4 \strokec4 , \cf8 \strokec8 'Edward'\cf4 \strokec4 , \cf8 \strokec8 'Ronald'\cf4 \strokec4 , \cf8 \strokec8 'Timothy'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Jason'\cf4 \strokec4 , \cf8 \strokec8 'Jeffrey'\cf4 \strokec4 , \cf8 \strokec8 'Ryan'\cf4 \strokec4 , \cf8 \strokec8 'Jacob'\cf4 \strokec4 , \cf8 \strokec8 'Gary'\cf4 \strokec4 , \cf8 \strokec8 'Nicholas'\cf4 \strokec4 , \cf8 \strokec8 'Eric'\cf4 \strokec4 , \cf8 \strokec8 'Jonathan'\cf4 \strokec4 , \cf8 \strokec8 'Larry'\cf4 \strokec4 , \cf8 \strokec8 'Justin'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Benjamin'\cf4 \strokec4 , \cf8 \strokec8 'Frank'\cf4 \strokec4 , \cf8 \strokec8 'Patrick'\cf4 \strokec4 , \cf8 \strokec8 'Raymond'\cf4 \strokec4 , \cf8 \strokec8 'Jack'\cf4 \strokec4 , \cf8 \strokec8 'Dennis'\cf4 \strokec4 , \cf8 \strokec8 'Jerry'\cf4 \strokec4 , \cf8 \strokec8 'Tyler'\cf4 \strokec4 , \cf8 \strokec8 'Henry'\cf4 \strokec4 , \cf8 \strokec8 'Aaron'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'John Jr.'\cf4 \strokec4 , \cf8 \strokec8 'Michael Sr.'\cf4 \strokec4 , \cf8 \strokec8 'David Jr.'\cf4 \strokec4 , \cf8 \strokec8 'Chris M.'\cf4 \strokec4 , \cf8 \strokec8 'Sarah A.'\cf4 \strokec4 , \cf8 \strokec8 'James T.'\cf4 \strokec4 , \cf8 \strokec8 'Robert L.'\cf4 \strokec4 , \cf8 \strokec8 'Laura S.'\cf4 \cb1 \strokec4 \
\cb3   ];\cb1 \
\
\cb3   \cf6 \strokec6 // List of 50 unique randmom last names, including some hyphenated ones\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 lastNames\cf4 \strokec4  = [\cb1 \
\cb3     \cf8 \strokec8 'Smith'\cf4 \strokec4 , \cf8 \strokec8 'Johnson'\cf4 \strokec4 , \cf8 \strokec8 'Williams'\cf4 \strokec4 , \cf8 \strokec8 'Brown'\cf4 \strokec4 , \cf8 \strokec8 'Jones'\cf4 \strokec4 , \cf8 \strokec8 'Garcia'\cf4 \strokec4 , \cf8 \strokec8 'Miller'\cf4 \strokec4 , \cf8 \strokec8 'Davis'\cf4 \strokec4 , \cf8 \strokec8 'Rodriguez'\cf4 \strokec4 , \cf8 \strokec8 'Martinez'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Hernandez'\cf4 \strokec4 , \cf8 \strokec8 'Lopez'\cf4 \strokec4 , \cf8 \strokec8 'Gonzalez'\cf4 \strokec4 , \cf8 \strokec8 'Wilson'\cf4 \strokec4 , \cf8 \strokec8 'Anderson'\cf4 \strokec4 , \cf8 \strokec8 'Taylor'\cf4 \strokec4 , \cf8 \strokec8 'Moore'\cf4 \strokec4 , \cf8 \strokec8 'Jackson'\cf4 \strokec4 , \cf8 \strokec8 'Martin'\cf4 \strokec4 , \cf8 \strokec8 'Lee'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Perez'\cf4 \strokec4 , \cf8 \strokec8 'Thompson'\cf4 \strokec4 , \cf8 \strokec8 'White'\cf4 \strokec4 , \cf8 \strokec8 'Harris'\cf4 \strokec4 , \cf8 \strokec8 'Sanchez'\cf4 \strokec4 , \cf8 \strokec8 'Clark'\cf4 \strokec4 , \cf8 \strokec8 'Ramirez'\cf4 \strokec4 , \cf8 \strokec8 'Lewis'\cf4 \strokec4 , \cf8 \strokec8 'Robinson'\cf4 \strokec4 , \cf8 \strokec8 'Walker'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Allen'\cf4 \strokec4 , \cf8 \strokec8 'King'\cf4 \strokec4 , \cf8 \strokec8 'Wright'\cf4 \strokec4 , \cf8 \strokec8 'Scott'\cf4 \strokec4 , \cf8 \strokec8 'Torres'\cf4 \strokec4 , \cf8 \strokec8 'Nguyen'\cf4 \strokec4 , \cf8 \strokec8 'Hill'\cf4 \strokec4 , \cf8 \strokec8 'Flores'\cf4 \strokec4 , \cf8 \strokec8 'Green'\cf4 \strokec4 , \cf8 \strokec8 'Adams'\cf4 \strokec4 ,\cb1 \
\cb3     \cf8 \strokec8 'Rodriguez-Garcia'\cf4 \strokec4 , \cf8 \strokec8 'Martinez-Lopez'\cf4 \strokec4 , \cf8 \strokec8 'Smith-Jones'\cf4 \strokec4 , \cf8 \strokec8 'Johnson-Williams'\cf4 \strokec4 , \cf8 \strokec8 'Brown-Taylor'\cf4 \strokec4 , \cf8 \strokec8 'Wilson-Anderson'\cf4 \strokec4 , \cb1 \
\cb3     \cf8 \strokec8 'Davis-Miller'\cf4 \strokec4 , \cf8 \strokec8 'Moore-Jackson'\cf4 \strokec4 , \cf8 \strokec8 'Lee-Martin'\cf4 \strokec4 , \cf8 \strokec8 'Clark-Ramirez'\cf4 \cb1 \strokec4 \
\cb3   ];\cb1 \
\
\cb3   \cf6 \strokec6 // Function to generate a random valid date\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 getRandomDate\cf4 \strokec4 () \{\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 year\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 40\cf4 \strokec4 ) + \cf9 \strokec9 1980\cf4 \strokec4 ; \cf6 \strokec6 // Random year between 1980 and 2020\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 month\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 12\cf4 \strokec4 ) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // Random month between 1 and 12\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 day\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf6 \strokec6 // Generate a valid day based on the month\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 switch\cf4 \strokec4  (\cf5 \strokec5 month\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 4\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 6\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 9\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 11\cf4 \strokec4 :\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 30\cf4 \strokec4 ) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // Months with 30 days\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 break\cf4 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 2\cf4 \strokec4 :\cb1 \
\cb3         \cf6 \strokec6 // Leap year check for February\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 leapYear\cf4 \strokec4  = (\cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 4\cf4 \strokec4  === \cf9 \strokec9 0\cf4 \strokec4  && \cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 100\cf4 \strokec4  !== \cf9 \strokec9 0\cf4 \strokec4 ) || (\cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 400\cf4 \strokec4  === \cf9 \strokec9 0\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * (\cf5 \strokec5 leapYear\cf4 \strokec4  ? \cf9 \strokec9 29\cf4 \strokec4  : \cf9 \strokec9 28\cf4 \strokec4 )) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // February has 28 or 29 days\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 break\cf4 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 default\cf4 \strokec4 :\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 31\cf4 \strokec4 ) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // Months with 31 days\cf4 \cb1 \strokec4 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 formattedMonth\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + \cf5 \strokec5 month\cf4 \strokec4 ).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 formattedDay\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + \cf5 \strokec5 day\cf4 \strokec4 ).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf8 \strokec8 `\cf4 \strokec4 $\{\cf5 \strokec5 year\cf4 \strokec4 \}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf5 \strokec5 formattedMonth\cf4 \strokec4 \}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf5 \strokec5 formattedDay\cf4 \strokec4 \}\cf8 \strokec8 `\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 getRandomDateForPreviousMonth\cf4 \strokec4 () \{\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 today\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf7 \strokec7 Date\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 year\cf4 \strokec4  = \cf5 \strokec5 today\cf4 \strokec4 .\cf5 \strokec5 getFullYear\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 month\cf4 \strokec4  = \cf5 \strokec5 today\cf4 \strokec4 .\cf5 \strokec5 getMonth\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 day\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf6 \strokec6 // Generate a valid day based on the month\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 switch\cf4 \strokec4  (\cf5 \strokec5 month\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 4\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 6\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 9\cf4 \strokec4 : \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 11\cf4 \strokec4 :\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 30\cf4 \strokec4 ) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // Months with 30 days\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 break\cf4 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 case\cf4 \strokec4  \cf9 \strokec9 2\cf4 \strokec4 :\cb1 \
\cb3         \cf6 \strokec6 // Leap year check for February\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 leapYear\cf4 \strokec4  = (\cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 4\cf4 \strokec4  === \cf9 \strokec9 0\cf4 \strokec4  && \cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 100\cf4 \strokec4  !== \cf9 \strokec9 0\cf4 \strokec4 ) || (\cf5 \strokec5 year\cf4 \strokec4  % \cf9 \strokec9 400\cf4 \strokec4  === \cf9 \strokec9 0\cf4 \strokec4 );\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * (\cf5 \strokec5 leapYear\cf4 \strokec4  ? \cf9 \strokec9 29\cf4 \strokec4  : \cf9 \strokec9 28\cf4 \strokec4 )) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // February has 28 or 29 days\cf4 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 break\cf4 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 default\cf4 \strokec4 :\cb1 \
\cb3         \cf5 \strokec5 day\cf4 \strokec4  = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 31\cf4 \strokec4 ) + \cf9 \strokec9 1\cf4 \strokec4 ; \cf6 \strokec6 // Months with 31 days\cf4 \cb1 \strokec4 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 formattedMonth\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + \cf5 \strokec5 month\cf4 \strokec4 ).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 formattedDay\cf4 \strokec4  = (\cf8 \strokec8 '0'\cf4 \strokec4  + \cf5 \strokec5 day\cf4 \strokec4 ).\cf5 \strokec5 slice\cf4 \strokec4 (-\cf9 \strokec9 2\cf4 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 return\cf4 \strokec4  \cf8 \strokec8 `\cf4 \strokec4 $\{\cf5 \strokec5 formattedMonth\cf4 \strokec4 \}\cf8 \strokec8 /\cf4 \strokec4 $\{\cf5 \strokec5 formattedDay\cf4 \strokec4 \}\cf8 \strokec8 /\cf4 \strokec4 $\{\cf5 \strokec5 year\cf4 \strokec4 \}\cf8 \strokec8 `\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf6 \strokec6 // Loop through each row (starting from row 2 to skip header)\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 i\cf4 \strokec4  = \cf9 \strokec9 1\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4  < \cf5 \strokec5 csvData\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf6 \strokec6 // Anonymize MRN (replace with random number)\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 mrnIndex\cf4 \strokec4 ] = \cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 1000000000\cf4 \strokec4 );\cb1 \
\
\cb3     \cf6 \strokec6 // Generate random names for first name and last name\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 randomFirstName\cf4 \strokec4  = \cf5 \strokec5 firstNames\cf4 \strokec4 [\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf5 \strokec5 firstNames\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 )];\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 randomLastName\cf4 \strokec4  = \cf5 \strokec5 lastNames\cf4 \strokec4 [\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf5 \strokec5 lastNames\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 )];\cb1 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 firstNameIndex\cf4 \strokec4 ] = \cf5 \strokec5 randomFirstName\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 lastNameIndex\cf4 \strokec4 ] = \cf5 \strokec5 randomLastName\cf4 \strokec4 ;\cb1 \
\
\cb3     \cf6 \strokec6 // Anonymize DOB with a valid date\cf4 \cb1 \strokec4 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 dobIndex\cf4 \strokec4 ] = \cf5 \strokec5 getRandomDate\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 dischargeDate\cf4 \strokec4 ] = \cf5 \strokec5 getRandomDateForPreviousMonth\cf4 \strokec4 ();\cb1 \
\
\cb3     \cf6 \strokec6 // Anonymize phone number (replace with format xxx-xxx-xxxx)\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 randomPhone\cf4 \strokec4  = \cf8 \strokec8 `\cf4 \strokec4 $\{\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 900\cf4 \strokec4  + \cf9 \strokec9 100\cf4 \strokec4 )\}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 900\cf4 \strokec4  + \cf9 \strokec9 100\cf4 \strokec4 )\}\cf8 \strokec8 -\cf4 \strokec4 $\{\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 floor\cf4 \strokec4 (\cf7 \strokec7 Math\cf4 \strokec4 .\cf5 \strokec5 random\cf4 \strokec4 () * \cf9 \strokec9 9000\cf4 \strokec4  + \cf9 \strokec9 1000\cf4 \strokec4 )\}\cf8 \strokec8 `\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 csvData\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 phoneNumberIndex\cf4 \strokec4 ] = \cf5 \strokec5 randomPhone\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf6 \strokec6 // Convert the data back to CSV format\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 anonymizedCsv\cf4 \strokec4  = \cf5 \strokec5 csvData\cf4 \strokec4 .\cf5 \strokec5 map\cf4 \strokec4 (\cf5 \strokec5 row\cf4 \strokec4  => \cf5 \strokec5 row\cf4 \strokec4 .\cf5 \strokec5 join\cf4 \strokec4 (\cf8 \strokec8 ','\cf4 \strokec4 )).\cf5 \strokec5 join\cf4 \strokec4 (\cf8 \strokec8 '\\n'\cf4 \strokec4 );\cb1 \
\
\cb3   \cf6 \strokec6 // Save the anonymized data to a new CSV file in Google Drive\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 // Find or create the folder\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 folder\cf4 \strokec4  = \cf5 \strokec5 getOrCreateFolder\cf4 \strokec4 (\cf5 \strokec5 folderName\cf4 \strokec4 );\cb1 \
\
\cb3   \cf6 \strokec6 // Create the CSV file in the specified folder\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 newFile\cf4 \strokec4  = \cf5 \strokec5 folder\cf4 \strokec4 .\cf5 \strokec5 createFile\cf4 \strokec4 (\cf8 \strokec8 'Anonymized_file.csv'\cf4 \strokec4  + \cf5 \strokec5 csvFileName\cf4 \strokec4 , \cf5 \strokec5 anonymizedCsv\cf4 \strokec4 );\cb1 \
\cb3   \cf7 \strokec7 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf8 \strokec8 'Anonymized file created: '\cf4 \strokec4  + \cf5 \strokec5 newFile\cf4 \strokec4 .\cf5 \strokec5 getUrl\cf4 \strokec4 ());\cb1 \
\cb3 \}\cb1 \
\
}