# manga reading

## what i would like for it to do
- pokazywać listę mang które czytałem
- gdy odwiedzam mangę z linka, niech aplikacja zapisuje ze tego dnia ją odwiedziłem
- chcę abym mógł:
  - edytować link
  - zmniejszać/zwiększać aktualny odcinek
  - dodawac nowy tytul
  - zmieniac x
  - aby strona pamietala te wszystie rzeczy, niezaleznie od urzadzenia na ktorym sie znajduje - komorka, inny komputer niz moj ...
  - zapisywac aktualne tytuly z ich postepem
  - moc wgrac tytuly na zas 
  - 

## zmieniam projekt react-mongodb-express flashcards :D
to dobry pomysl, ze zmianami jest tez troche pracy wiec dobrze sie mi tak uczyc, niz pisac wszystko od nowa.
Zrobie tak wiecej razy od teraz. :) kod ktory zobacze od kogos, nie ma co sie martwic ze to moze byc nie tak jak sie pisze, bo to iluzja - perfekcjonizmu. 

### Co zmienilem do tej pory i jak to zrobilem
Uzylem tego samego id ktore uzywane jest w document (wpis w tabeli) w mongo

zmienilem kod
Dodalem funkcje updateDeck na podstawie funkcji deleteDeck"
 1. w deklaracji funkcji deleteDeck użyto metody `findByIdAndDelete` obiektu Schema `Deck`
 2. znalazłem metodę `findByIdAndUpdate` dla obiektu Schema.
 	- potrzebuje ona drugiego parametru, obiektu ze z uaktualnionymi danymi np. { title: 'abc'} (jesli schema bylo {title: string, decks: string[]})
