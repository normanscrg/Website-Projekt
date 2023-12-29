# WEBPROGRAMMIERUNG_SE_WI22A3

Projekt: MEME Generator!

Dieses Projekt dient als Abschlussarbeit der Vorlesung Web Programmierung.
Die Website stellt einen vereinfachten Meme Generator dar. Mithilfe der Meme-Generator API und der GIPHY API können hier entweder GIFS nacheinander erstellt und untereinander gelistet werden (GIF Finder), oder Memes in verschiedenen Genres (API abruf abhängig von Subreddit) erstellt werden.

Frameworks wie Bootstrap wurden verwendet. 
Code wurde weitaus kommentiert. 
Es existieren 6 veschiedene Seiten:
Home, About, GIF Finder und die Meme Genres: History Memes, Gym Memes, Random Memes.
Das Layout wurde Responsive gehalten.

Datein:
index.html --> Startseite mit InfoText über Bootstrap Karussel + Auflistung der Top Meme Kategorien
about.html --> Info Texte über die beiden genutzen APIs
giffinder.html --> erster API Abruf über die GIPHY API, zum erstellen von GIFs. Suchbegriff in die Suchleiste eingeben. Dannach auf GO! klicken und ein eigabebasiertes GIF wird angezeigt.
HistoryMemes.html, GymMemes.html, RandomMemes.html --> zweiter API abruf der auf mit dem ausgewählten Genre zusammenhängt, hierbei wird lediglich in den verschiedenen Datein der Subreddit (siehe main.js) geändert. Durch Klicken auf Generate Meme wird ein Meme erstellt und angezeigt.

main.js --> beinhaltet die verschiednen API aufrufe 
style.css --> beinhaltet die Style asspekte, sowie Änderungen von Bootstrap Klassen

Images --> beinhaltet alle verwendeten Bilder der Website



Info:
Beim Generieren eines Bildes durch die Meme-Generator-API kann es zu einer fehlerhaften Anzeige kommen, da die API gelegentlich auch Kurzvideos abruft, die auf der Website nicht korrekt dargestellt werden können.




MEME-Generator API: https://github.com/D3vd/Meme_Api
GIPHY API: https://developers.giphy.com/docs/api/



Author: Norman Scheurig