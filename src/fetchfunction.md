# Protokoll Mittwoch 04.08.21
## Topics

- fetch() funktion
- React


## fetch() funktion

- Die Fetch-API bietet eine JavaScript-Schnittstelle für den Zugriff auf und
  die Manipulation von Teilen der HTTP-Pipeline. z. B. Anfragen und Antworten.
- Ressourcen werden asynchron über das Netzwerk abgerufen.

        fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));

- Als Rückgabewert erhält man ein Promise (ähnlich zu Optional: kann da sein, oder nicht)
- Wenn das Promise vorhanden ist, handelt es sich um eine HTTP-Antwort und nicht um ein JSON Objekt.
- Um den JSON-Textinhalt aus der Antwort zu extrahieren,
  verwenden wir die Methode `.json()`.




## React
- React ist eine JavaScript-Bibliothek zum Erstellen von user interfaces

- Neues Projekt aufsetzen:
  ``npx create-react-app my-app``
- `cd my-app`
- `npm run start`

- index.js gilt als Einstiegspunkt, und ruft App.js auf und gibt den Inhalt in
  das mit `id="root"` gekennzeichnete html Dokument (index.html) aus.


        ReactDOM.render(
          <React.StrictMode>
          <App />
          </React.StrictMode>,
          document.getElementById('root')
        );

- Die Bestandteile der App werden in Komponenten unterteilt und mit
  import/export genutzt, wo die benötigt werden.

- Jeder Datei kann nur ein "default" export Komponente haben.
- Alles was importiert sein sollte, muss in "src" Verzeichnis oder einem
  Unterordner liegen.

- Beispiel für Übergabeparameter über props


      export default function Header (props) {
      return <header className="header">
          <img className="header__image"
               src="https://rickandmortyapi.com/icons/icon-512x512.png"
               alt="Rick and Morty"/>
          <h1 className="header__title">{props.title}</h1>
      </header>
      }


- Die Attribute der JSX Elemente werden von React innerhalb des props Objektes
  in die Funktion übergeben


        function App() {
    const characters = characterResponse.results
    
    return <div>
    <Header title="Character Gallery"/>
    <CharacterCard character={characters[0]} />
    <CharacterCard character={characters[1]} />
      </div>
    }

#### Tipp für killing angehängte Processes

     lsof -i :portnumber (z.B.:3000)
     kill -9 PID (durch id ersetzen, die durch den ersten Befehl angezeigt wird)


#### BEM (BLOCK ELEMENT MODIFIER)

- Namenskonvention für CSS Klassen Namen

- Benennung: containerName__elementName

      className = "header__image"
      className = "header__title"