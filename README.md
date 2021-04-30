# inlamning-backend-johannesA
Inlamingsuppgift SmartHOMEAPI

För att använda dom olika requests i Insomnia/Postman, använd följande kommandon. 


AC Bedroom sätt igång, 25 är önskad temperatur, on är på.  - http://localhost:3000/airco/25?state=on

AC Bedroom stänga av, http://localhost:3000/airco/25?state=off

Blind Living Room rulla ner, http://localhost:3000/blinder?state=down

Blind Living Room rulla upp, http://localhost:3000/blinder?state=up

Lamporna använder vi följande, http://localhost:3000/lights/bedroom?state=on

Här ändrar man bara bedroom, till önskad lampa du vill sätta igång. 

För att stänga av lampan, http://localhost:3000/lights/bedroom?state=off

Vill du prova Christmas funktionen, använd http://localhost:3000/lights/christmas?state=on

Stäng av med, http://localhost:3000/lights/christmas?state=off

Camera Front Door, sätt igång med, http://localhost:3000/camera?state=on

Stäng av med, http://localhost:3000/camera?state=off


Vacuum BB-8, sätt igång med, http://localhost:3000/vacuum?state=on

Stäng av med, http://localhost:3000/vacuum?state=off

Speaker Living Room, sätt igång med,http://localhost:3000/speakers/SPE1/stream?state=on

Stäng av med, http://localhost:3000/speakers/SPE1/stream?state=off
