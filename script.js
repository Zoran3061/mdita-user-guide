
// Sidebar toggle button
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let isMobile = window.matchMedia("(max-width: 768px)").matches;  // Check if it's mobile

// Toggle the sidebar visibility based on the mode (mobile vs desktop)
btn.onclick = function() {
    sidebar.classList.toggle('active');  // This works for both modes
};

// Set a flag to check if the initial content has been loaded
let isInitialContentLoaded = false;

// Function to reset content (called when a link is clicked)
function resetContent() {
    const contentDiv = document.getElementById('content');
    
    // If the initial content is already loaded, don't insert it again
    if (!isInitialContentLoaded) {
        // Add initial content only on the first load
        const initialContent = document.createElement('p');
        initialContent.id = 'initial-content';
        initialContent.textContent = 'mDita Editora'; // Initial content
        contentDiv.appendChild(initialContent);
        
        // Mark the initial content as loaded
        isInitialContentLoaded = true;
    }
    contentDiv.innerHTML = '';

    // Now set the new content
    contentDiv.innerHTML = `
        <h1>Minimalna specifikacija računara</h1>
        <p>Za instalaciju i korišćenje mDita Editora minimalna potrebna specifikacija računara je:</p>
            <ul>    
                <li>CPU: Intel® Core™2 Duo Processor E4300 (2M Cache, 1.80 GHz, 800 MHz FSB)</li>
                <li>RAM: 4 gigabyte (GB) RAM</li>
                <li>Minimalna rezolucija ekrana: 1280x768</li>
                <li>Operativni sistem: Windows 10 operativni sistem ili noviji.</li>
                <li>Net Framework 4.5</li>
                <li><u style='color:red;'><b style='color:red;'> Obavezna internet konekcija</b></u></li>
            </ul> 
    `;
}

// Function to reset the content and heading to initial state
function resetContent() {
    console.log("Content reset triggered");
    
    // Reset the content in the #content div
    document.getElementById('content').innerHTML = `
        <p>Za instalaciju i korišćenje mDita Editora minimalna potrebna specifikacija računara je:</p>
        <ul>    
            <li>CPU: Intel® Core™2 Duo Processor E4300 (2M Cache, 1.80 GHz, 800 MHz FSB)</li>
            <li>RAM: 4 gigabyte (GB) RAM</li>
            <li>Minimalna rezolucija ekrana: 1280x768</li>
            <li>Operativni sistem: Windows 10 operativni sistem ili noviji.</li>
            <li>Net Framework 4.5</li>
            <li><u style='color:red;'><b style='color:red;'> Obavezna internet konekcija</b></u></li>
        </ul>
    `;
    
    // Reset the heading to its initial value
    document.getElementById('main-heading').textContent = "Minimalna specifikacija računara";
}

// Event listener for clicking on the logo or university name
document.getElementById('logo').addEventListener('click', resetContent);
document.getElementById('univerzitet').addEventListener('click', resetContent);

// Select all images with the class 'zoom'
const images = document.querySelectorAll('img.zoom');

// Add a click event listener to each image
images.forEach(image => {
    image.addEventListener('click', function() {
        // Toggle the zoomed class to zoom in and out
        this.classList.toggle('zoomed');
    });
});
// Select all images with the class 'zoom'
const images2 = document.querySelectorAll('img.zoom');

// Variables for touch events
let initialDistance = 0; // Distance between two touch points
let scale = 1; // Initial scale

// Event listener for touchstart (when two fingers touch the screen)
images2.forEach(image => {
    image.addEventListener('touchstart', function(event) {
        // If two fingers are used
        if (event.touches.length === 2) {
            // Calculate initial touch distance
            initialDistance = getTouchDistance(event);
        }
    });

    // Event listener for touchmove (when fingers move)
    image.addEventListener('touchmove', function(event) {
        if (event.touches.length === 2) {
            // Calculate the new touch distance
            const currentDistance = getTouchDistance(event);
            
            // Calculate the scale based on the distance between the two fingers
            scale *= currentDistance / initialDistance;
            scale = Math.min(Math.max(1, scale), 3); // Limit scale to between 1 and 3
            
            // Apply scale to the image
            this.style.transform = `scale(${scale})`;

            // Update the initial distance for the next move
            initialDistance = currentDistance;
            event.preventDefault(); // Prevent default behavior (like scrolling)
        }
    });

    // Event listener for touchend (when fingers are lifted)
    image.addEventListener('touchend', function(event) {
        // Reset the initial distance when the touch ends
        initialDistance = 0;
    });
});

// Function to calculate distance between two touch points
function getTouchDistance(event) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const xDistance = touch2.pageX - touch1.pageX;
    const yDistance = touch2.pageY - touch1.pageY;
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance); // Distance formula
}
// Hide the additional links initially when the page loads
document.addEventListener("DOMContentLoaded", function() {
    var additionalLinks = document.getElementById('additional-links');
    additionalLinks.style.display = 'none'; // Ensure they are hidden initially
});
document.addEventListener("DOMContentLoaded", function() {
    var additionalLinks2 = document.getElementById('additional-links2');
    additionalLinks2.style.display = 'none'; // Ensure they are hidden initially
});

// Handle click event for "Korisničko uputstvo"
document.getElementById('korisnicko-uputstvo').addEventListener('click', function() {
    var additionalLinks = document.getElementById('additional-links');
    
    // Toggle visibility of the additional links
    if (additionalLinks.style.display === 'none' || additionalLinks.style.display === '') {
        additionalLinks.style.display = 'block';
    } else {
        additionalLinks.style.display = 'none';
    }
});
// Handle click event for "Dodatne aktivnosti"
document.getElementById('dodatne-aktivnosti').addEventListener('click', function() {
    var additionalLinks2 = document.getElementById('additional-links2');
    
    // Toggle visibility of the additional links
    if (additionalLinks2.style.display === 'none' || additionalLinks2.style.display === '') {
        additionalLinks2.style.display = 'block';
    } else {
        additionalLinks2.style.display = 'none';
    }
});

        // Handle sidebar link clicks to display content
        const navLinks = document.querySelectorAll('.nav-link');
        // Select all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

// Loop through the links and add an event listener to each
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent page reload
                
                // Get the content from the 'data-content' attribute
                const content = this.getAttribute('data-content');

                // Update the main content area based on the link clicked
                 if (content === "Uputstvo za instalaciju aplikacije") {
                    document.getElementById('main-heading').textContent = "Uputstvo za instalaciju aplikacije";
                    document.getElementById('content').innerHTML = `
                        <p>Primer instalacije je obavljen na Windows 10 operativnom sistemu.<br></br></p>
                        <p>Pokretanje instalacije vršite se klikom na mdita-setup.msi fajl koji je preuzet sa linka.<br></br></p>
                        <p>Klikom na dugme “Install” započinje se instalacija. Informacija koju Windows 10 operativni sistem prikazuje jeste obaveštenje da je potrebno čekirati svesnost korisnika na rizik koji donosi instalacija aplikacije. Ovaj korak se može a i ne mora javiti na računaru zavisno od korisničkih podešavanja na računaru. (slika 2.1)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.1.jpg" alt="Slika 2.1" class="zoom">
                            <figcaption><i>Slika 2.1 Upozorenje od strane operativnog sistema</i></figcaption>
                        </figure>
                        <p><br></br>Potrebno je da štiklirati opciju “ I understand the risk and want to run this app.” Nakon toga se prikazuje dugme “Run anyway” (slika 2.2) koje služi za prelazak na sledeći korak instalacije.<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.2.jpg" alt="Slika 2.2" class="zoom">
                            <figcaption><i>Slika 2.2 Čekiranje potrebne opcije</i></figcaption>
                        </figure>
                        <p><br></br>Treći korak je prolazak kroz wizard koji pomaže u instalaciji aplikacije. U ovom koraku, “Welcome to the mDita Editor” potrebno je da kliknute na dugme “Next”. (slika 2.3)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.3.jpg" alt="Slika 2.3" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.3 Treći korak instalacije</i></figcaption>
                        </figure>
                        <p><br></br>Četvrti korak je da odaberete lokacije za instalaciju aplikacije (instalacionog foldera). Aplikacija će napraviti folder na C particiji diska u okviru koga će smestiti sve potrebne fajlove za pokretanje i rad aplikacije. Klikom na dugme “Browse…” moguće je da izmenite lokaciju za instalaciju aplikacije. Nakon podešavanja lokacije potrebno je da kliknute dugme “Next” i preći na peti korak. (slika 2.4)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.4.jpg" alt="Slika 2.4" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.4 Četvrti korak instalacije - odabir lokacije za instalaciju</i></figcaption>
                        </figure>
                        <p><br></br>Na sledećem ekranu potrebno je da čekirate opciju za offline LaTex preview(Slika 2.5).<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.5.jpg" alt="Slika 2.5" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.5 Peti korak instalacije - čekiranje opcije LaTex preview</i></figcaption>
                        </figure>
                        <p><br></br>Šesti korak podrazumeva da odobrite početka instalacije. Klikom na “Install” prihvatate uslove instalacije i startuje proces. (slika 2.6)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.6.jpg" alt="Slika 2.6" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.6 Šesti korak instalacije - odobravanje instalacije</i></figcaption>
                        </figure>
                        <p><br></br>Sedmi korak prikazuje instalaciju i proces instalacije. Kada je status linija ispunjena do kraja proces instalacije je završen. (slika 2.7)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.7.jpg" alt="Slika 2.7" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.7 Sedmi korak instalacije - status instalacije</i></figcaption>
                        </figure>
                        <p><br></br>Poslednji, sedmi korak predstavlja završetak instalacije gde je klikom na dugme “Finish” završavate instalaciju aplikacije i možete je pokrenuti. (slika 2.8)<br></br></p>
                        <figure>
                            <img src="Slike/Slika2.8.jpg" alt="Slika 2.8" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 2.8 Osmi korak instalacije - završetak instalacije</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Odabir File opcije iz menija") {
                    document.getElementById('main-heading').textContent = "Odabir File opcije iz menija";
                    document.getElementById('content').innerHTML = `
                        <p>Pre nego što se učita lekcija, ili kreira nova lekcija, dugmići su deaktivirani.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.1.0.jpg" alt="Slika 3.1.0" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.1.0 Pokrenut mDita Editor<br></br></i></figcaption>
                        </figure>
                            <p>Nakon pokretanja aplikacije sa leve strane ima "File" stavku u meniju koja Vam je na raspolaganju. Klikom na "File" otvara se padajući meni sa sledećim opcijama:</p>
                        <ul>
                            <li>New project</li>
                            <li>Open mDita project</li>
                            <li>Save mDita project</li>
                            <li>Export project</li>
                            <li>Export with branching</li>
                            <li>Edit project</li>
                            <li>Import dita files</li>
                            <li>Import dita objects</li>
                            <li>Merge projects</li>
                            <li>Preview HTML<br></br></li>
                        </ul>
                        <figure>
                            <img src="Slike/Slika3.1.1.jpg" alt="Slika 3.1.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.1.1 "File" stavka menija</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Kreiranje novog projekta") {
                    document.getElementById('main-heading').textContent = "Kreiranje novog projekta";
                    document.getElementById('content').innerHTML = `
                        <p>Klikom na "New project" otvara Vam se dijalog za odabir foldera gde će se nalaziti projekat (slika 3.1.1). Odabirom Desktop lokacije aplikacija će automatski kreirati folder sa šifrom predmeta na Desktopu a koja će biti definisana u narednom koraku. Potrebno je samo da odabrete desktop i da kliknute na "OK". (slika 3.2.1)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.2.1.jpg" alt="Slika 3.2.1" width="500" height="500" class="zoom">
                            <figcaption><i>Slika 3.2.1 Odabir lokacije novog projekta<br></br></i></figcaption>
                        </figure>
                            <p>Nakon odabira lokacije na kojoj će Vam se nalaziti projekat u sledećoj formi koja se otvara potrebno je popuniti obavezna polja za lekciju koja se kreira u okviru projekta (slika 3.2.2):</p>
                        <ul>
                            <li>Šifra predmeta</li>
                            <li>Broj lekcije</li>
                            <li>Naslov lekcije</li>
                            <li>Školska godina</li>
                            <li>Autor</li>
                        </ul>
                        <figure>
                            <img src="Slike/Slika3.2.2.jpg" alt="Slika 3.2.2" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.2.2 Kreiranje novog projekta<br></br></i></figcaption>
                        </figure>
                        <p>Kada su obavezni podaci uneti na formi prikazanoj na slici 3.2.2, opcijom "Create project" završava se proces kreiranja novog projekta. U editoru se sa leve strane pojavljuju separator slajd za uvod sa jednom sekcijom i separator slajd za zaključak sa jednom sekcijom. (slika 3.3.1) Pored ovih slajdova koji se automatski dodaju u nov projekat potrebno je da dodate i objekte učenja o čemu će kasnije biti rečeno u ovom dokumentu.<br></br></p>
                        <p>Na slici 3.2.3 prikazan je odabir šifre predmeta koji se pamti automatski na osnovu vašeg unosa. Ukoliko imate više predmeta za koje kreirate nastavni materijal, ovo može biti olakšica da kroz “istoriju unosa” odaberete šifru predmeta za lekciju.</p>
                        <figure>
                            <img src="Slike/Slika3.2.3.jpg" alt="Slika 3.2.3" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.2.3 Odabir šifre predmeta na osnovu prethodnih unosa<br></br></i></figcaption>
                        </figure>
                        <p>Takođe, kao i za šifru predmeta i unos u autor polju se pamti pa ne morate kucati u svakoj lekciji ime autora već možete odabrati ili iskoristiti poslednje što ste uneli.</p>
                    `;
                }else if (content === "Otvaranje postojećeg projekta") {
                    document.getElementById('main-heading').textContent = "Otvaranje postojećeg projekta";
                    document.getElementById('content').innerHTML = `
                        <figure>
                            <img src="Slike/Slika3.3.1.jpg" alt="Slika 3.3.1" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.3.1 Uvod i zaključak slajdovi<br></br></i></figcaption>
                        </figure>
                            <p>Druga stavka u "File" meniju je Open mDita project gde ukoliko imate već kreiran projekat kroz mDita editor možete izvršiti odabir i otvaranje istog. Dobijate formu "Browse" gde je potrebno odabrati folder a zatim i fajl projekta za otvaranje. Nije moguće da koristite i otvarate druge fajlove ili projekte već samo projekat napravljen i sačuvan kroz mDita editor.</p>
                        <figure>
                            <img src="Slike/Slika3.3.2.jpg" alt="Slika 3.3.2" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.3.2 Opcija otvaranja novog mDita projekta</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Čuvanje projekta lokalno") {
                    document.getElementById('main-heading').textContent = "Čuvanje projekta lokalno";
                    document.getElementById('content').innerHTML = `
                            <p>U svakom trenutku možete da sačuvate rad na lekciji koristeći opciju "Save project" pri čemu se sve izmene čuvaju u odabranom folderu projekta i lekcije.(slika 3.4.1) Pritom se u folderu lekcije koji je kreiran u odabranom folderu projekta (SE322 folder u okviru koga se nalazi folder L01 ukoliko se radi o prvoj lekciji) nalaze XML fajlovi za objekte iz lekcije.</p>
                        <figure>
                            <img src="Slike/Slika3.4.1.jpg" alt="Slika 3.4.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.4.1 Opcija "Save content mDita project"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Čuvanje projekta") {
                    document.getElementById('main-heading').textContent = "Čuvanje projekta";
                    document.getElementById('content').innerHTML = `
                            <p>Nakon kreiranja lekcije, odabirom opcije “Save zip file” projekat će biti sačuvan i zipovan u folder koji je spreman za slanje i objavljivanje (slika 3.5.1).</p>
                        <figure>
                            <img src="Slike/Slika3.5.1.jpg" alt="Slika 3.5.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.5.1 Opcija "Export project"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Eksportovanje sa grananjem (Export with branching)") {
                    document.getElementById('main-heading').textContent = "Eksportovanje sa grananjem (Export with branching)";
                    document.getElementById('content').innerHTML = `
                        <p>Iz postojeće linearne putanje u lekciji moguće je kreirati nelinearnu putanju tako što editor automatski iz linearne putanje vrši prebacivanje objekata učenja u LAMS aktivnos „Optional activity“. Na taj način kreiraju se dve putanje iste lekcije, jedna linearna a druga nelinearna. Prednost nelinearne putanje je što student može vršiti odabir objekata učenja kroz koje želi da prođe dok kroz linearnu putanju mora proći kroz sve objekte učenja u lekciji.</p>
                        <figure>
                            <img src="Slike/Slika3.5.2.jpg" alt="Slika 3.5.2" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.5.2 Opcija "Export with branching"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Izmene informacija o projeku") {
                    document.getElementById('main-heading').textContent = "Izmene informacija o projeku";
                    document.getElementById('content').innerHTML = `
                        <p>Sledeća stavka u "File" padajućem meniju odnosi se na izmene infomacija o projektu i lekciji. (slika 3.7.1) Klikom na opciju “Edit project” otvara se prozor u kome se mogu promeniti podaci o lekciji. U ovom delu možete izmeniti sve informacije koje je definisano prilikom kreiranja lekcije i projekta; šifra predmeta, broj lekcije, naziv lekcije, školsku godinu ili naziv autora (slika 3. 7.2).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.7.1.jpg" alt="Slika 3.7.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.7.1 Opcija "Edit project data"<br></br></i></figcaption>
                        </figure>
                            <p>Informacije koje je moguće izmeniti su:</p>
                        <ul>
                            <li>Šifra predmeta</li>
                            <li>Broj lekcije</li>
                            <li>Naslov lekcije</li>
                            <li>Školska godina</li>
                            <li>Autor</li>
                        <figure>
                            <img src="Slike/Slika3.7.2.jpg" alt="Slika 3.7.2" width="500" height="400" class="zoom">
                            <figcaption><i>Slika 3.7.2 Izmena informacija o projektu i lekciji</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Unos postojećih DITA fajlova") {
                    document.getElementById('main-heading').textContent = "Unos postojećih DITA fajlova";
                    document.getElementById('content').innerHTML = `
                        <p>Pre korišćenja opcije „Import DITA files“ potrebno je preuzeti nastavne materijale za predmet.<br></br></p>
                        <p>Nastavni materijali su zapakovani u datoteke (.zip). Datoteke je potrebno raspakovati u folder na računaru. Nakon raspakivanja u folder na računaru, moguće je importovati fajlove odabrane lekcije u editor korišćenjem opcije “Import DITA files”.<br></br></p>
                        <p>Opcija "Import DITA files" služi za unos DITA fajlova koji su kreirani kroz mDita editor ili QDita aplikaciju a na raspolaganju su autoru kurseva. (slika 3.8.1) Na ovaj način autor kursa može uneti objekte učenja iz drugih lekcija ili lekcija drugih profesora bilo da se radi prošlogodišnjim materijalma ili lekcijama kreiranim za potrebe budućeg semestra.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.8.1.jpg" alt="Slika 3.8.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.8.1 Opcija "Import DITA files"<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.8.2.jpg" alt="Slika 3.8.2" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.8.2 Opcija "Import DITA files" - selektovanje fajlova</i></figcaption>
                        </figure>
                        <p>Kreirajte novu lekciju u okviru mDita editora. Kada je lekcija kreirana i postoje samo prazni uvod i zaključak prelazi se na sledeći korak. Odaberirom opcije “Import DITA files” i dobijete dijalog za odabir fajlova. Potrebno je pronaći folder gde su raspakovani nastavni materijali, odabratite folder lekcije a zatim samo DITA fajlove u okviru foldera (kao na slici 3. 8.2). Klikom na dugme “Open” fajlovi se automatski unose u mDita editor.</p>
                    `;
                }else if (content === "Unos jednog DITA objekta") {
                    document.getElementById('main-heading').textContent = "Unos jednog DITA objekta";
                    document.getElementById('content').innerHTML = `
                        <p>Opcija "Import one DITA object" služi za unos samo jednog objekta učenja u postojeću lekciju. Razlika između ove opcije i opcije "Import DITA files" je u tome što korišćenjem "Import one DITA object" unosite samo jedan objekat u lekciju koji može uzeti iz neke druge lekcije ili od drugog autora. (slika 3.9.1)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.9.1.jpg" alt="Slika 3.9.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.9.1 Opcija "Import one DITA object"<br></br></i></figcaption>
                        </figure>
                        <p>Kada odaberete opciju “Import DITA object” sa slike 3.9.1 otvara se forma kao na slici 3.9.2. Potrebno je da odaberete folder lekcije iz koje želite da ubacite objekat učenja.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.9.2.jpg" alt="Slika 3.9.2" width="500" height="500" class="zoom">
                            <figcaption><i>Slika 3.9.2 Primer odabira objekta učenja<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira foldera, dobijate listu svih objekata učenja sa njihovim nazivima kao na slici 3.9.3.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.9.3.jpg" alt="Slika 3.9.3" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.9.3 Primer odabira objekta za ubacivanje<br></br></i></figcaption>
                        </figure>
                        <p>Možete odabrati objekat iz liste i klikom na dugme ok izvršiti ubacivanje objekta u lekciju.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.9.4.jpg" alt="Slika 3.9.4" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.9.4 Primer unosa jednog objekta učenja<br></br></i></figcaption>
                        </figure>
                        <p>Primer jednog unetog objekta učenja dat je na slici 3.9.4. Unet je objekat učenja koji se automatski postavlja na svoje mesto u lekciji. Korišenjem opcije "Import one DITA Object" objekat učenja se postavlja na poslednje mesto u lekciji.</p>
                    `;
                }else if (content === "Preview HTML") {
                    document.getElementById('main-heading').textContent = "Preview HTML";
                    document.getElementById('content').innerHTML = `
                        <p>Na slici 3.10.1 prikazan je odabir opcije “Preview HTML” nakon čega se pokreće kreiranje prikaza lekcije u vidu HTML strane. Nakon toga, otvara se prozor kao na slici 3.10.2 gde se prikazuje proces kreiranja prikaza lekcije.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.10.1.jpg" alt="Slika 3.10.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.10.1 Korišćenje opcije "Preview HTML"<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.10.2.jpg" alt="Slika 3.10.2" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.10.2 Proces kreiranja prikaza lekcije nakon selektovanja opcije "Preview HTML"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon toga editor automatski otvara prikaz lekcije u podrazumevanom pretraživaču na računaru.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.10.3.jpg" alt="Slika 3.10.3" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.10.3 Prikaz lekcije u veb pretraživaču korisnika</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Update version") {
                    document.getElementById('main-heading').textContent = "Update version";
                    document.getElementById('content').innerHTML = `
                        <p>Na slici 3.11.1 prikazano je korišćenje opcije “Update version”. Nakon odabira ove opcije, pojaviće se prozor koji je prikazan na slici 3.11.2.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.11.1.jpg" alt="Slika 3.11.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.11.1 Korišćenje opcije "Update version"<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.11.2.jpg" alt="Slika 3.11.2" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.11.2 Prikaz informacija o novoj verziji programa<br></br></i></figcaption>
                        </figure>
                        <p>Ukoliko već koristite najnoviju verziju programa videćete poruku “Vi već koristite najnoviju verziju programa”. Ukoliko nemate najnoviju verziju u polju “Izmene” videćete koje sve izmene sadrži nova verzija u odnosu na staru. Klikom na dugme “Donwload” koje se nalazi u donjem levom uglu prozora započinje se preuzimanje nove verzije programa.</p>
                    `;
                }else if (content === "Merge projects") {
                    document.getElementById('main-heading').textContent = "Merge projects";
                    document.getElementById('content').innerHTML = `
                        <p>Povezivanje dva različita projekta (lekcije) kreirane mDita editoru moguće je kroz opciju “Merge projects”. (slika 3.12.1) Uslov za korišćenje ove funkcije je da su lekcije kreirane u mDita editoru. U toku rada sa jednom lekcijom možete odabrati opciju “Merge projects” i odabrati drugu lekciju i izvršiti povezivanje. Objekti učenja iz druge lekcije biće automatski dodati na kraj prve lekcije. Ukoliko druga lekcija ima više objekata od maksimuma koji je dozvoljen u prvoj lekciji (14 objekata učenja), prvoj lekciji biće dodati samo objekti učenja do dozvoljenog broja (14 objekata učenja). Ostali objekti neće biti dodati.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.12.1.jpg" alt="Slika 3.12.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.12.1 Korišćenje opcije "Merge projects"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.12.2 prikazana je forma koja se dobija nakon klika na opciju “Merge projects”. U okviru svog računara tražite project.mdita fajl lekcije koju hoćete da povežete sa lekcijom koja je otvorena u editoru. Nakon odabira fajla klikom na dugme “Open” lekcija se povezuje sa lekcijom u editoru.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.12.2.jpg" alt="Slika 3.12.2" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.12.2 Korišćenje opcije "Merge projects"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Unos Microsoft Word i PDF dokumenta i statistika lekcije") {
                    document.getElementById('main-heading').textContent = "Unos Microsoft Word i PDF dokumenta i statistika lekcije";
                    document.getElementById('content').innerHTML = `
                        <strong>Unos Microsoft Word i PDF dokumenta i statistika lekcije</strong>
                        <p>mDita editor poseduje funkcionalnost ubacivanje Microsoft Word dokumenta (doc, docx) ili PDF dokumenta u editor nakon čega je moguće preuzeti tekst ili slike iz istog. Potrebno je odabrati u desnom uglu editora opciju "Open" prikazanu na slici 3.13.1 i sa računara selektovati dokument iz koga je potrebno preuzeti tekst ili slike.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.13.1.jpg" alt="Slika 3.13.1" width="250" height="500" class="zoom">
                            <figcaption><i>Slika 3.13.1 Unos Word ili PDF dokumenta<br></br></i></figcaption>
                        </figure>
                        <p>Editor će obraditi fajl i prikazati izdvojene pasuse teksta i slike koje je moguće jednim klikom ubaciti na odabranu sekciju u editoru. Pre odabira teksta ili slike potrebno je selektovati sekciju u kojoj je potrebno uneti odabrani tekst ili sliku. Odaberom teksta (slika 3.13.2) izvršite čekiranje sa leve strane paragrafa i klikom na “Add text” izvršite unos u sekciju.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.13.2.jpg" alt="Slika 3.13.2" width="250" height="500" class="zoom">
                            <figcaption><i>Slika 3.13.2 Odabir teksta iz unetog Word dokumenta</i></figcaption>
                        </figure>
                        <p>Postupak je identičan i za slike preuzete iz dokumenta. (slika 3.13.3).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.13.3.jpg" alt="Slika 3.13.3" width="250" height="500" class="zoom">
                            <figcaption><i>Slika 3.13.3 Odabir slike iz unetog Word dokumenta</i></figcaption>
                        </figure>
                        <p>Statistika u okviru mDita editora omogućava pregled sledećih parametara lekcije:<br></br></p>
                        <ul>
                            <li>Broj reči u okviru lekcije (računajući i objekte učenja vežbi i domaćih zadataka)</li>
                            <li>Broj objekata učenja</li>
                            <li>Broj objekata i podobjekata učenja</li>
                            <li>Broj sekcija u okviru objekata učenja</li>
                            <li>Broj audio fajlova</li>
                            <li>Broj slika u lekciji (računa i slike unete u galeriju)</li>
                            <li>Broj video fajlova</li>
                            <li>Broj Q/A aktivnosti</li>
                            <li>Broj Forum aktivnosti</li>
                            <li>Broj Multiple Choice aktivnosti</li>
                            <li>Broj Submit files aktivnosti</li>
                            <li>Broj Shared resources aktivnosti</li>
                            <li>Broj Assessment aktivnosti</li>
                            <li>Broj Chat aktivnosti</li>
                            <li>Broj Javagrader aktivnosti</li>
                            <li>Broj Notebook aktivnosti</li>
                            <li>Broj Noticeboard aktivnosti</li>
                        </ul>
                        <p>Prilikom kreiranja lekcije potrebno je da sačuvate lekciju i nakon toga će se pojaviti statistika po opisanim parametrima. (slika 3.13.4)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.13.4.jpg" alt="Slika 3.13.4" width="250" height="500" class="zoom">
                            <figcaption><i>Slika 3.13.4 Prikaz statistike u jednoj lekciji</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Dodatne aktivnosti (Aditional Activities)") {
                    document.getElementById('main-heading').textContent = "Dodatne aktivnosti (Aditional Activities)";
                    document.getElementById('content').innerHTML = `
                        <p>Opcija dodatne aktivnosti služe za postavljanje aktivnosti u okviru lekcije. Aktivnosti koje su na raspolaganju su:</p>
                        <ul>
                            <li>Q&A – Questions and answers</li>
                            <li>Forum – Aktivnost forum u okviru lekcije</li>
                            <li>Multiple Choice – Pitanja sa višestrukim odgovorima</li>
                            <li>Submit files – slanje fajlova kroz aktivnost</li>
                            <li>Share resources – postavljanje fajlova za preuzimanje u okviru lekcije</li>
                            <li>Assessment – test sa više pitanja različitog tipa u okviru lekcije</li>
                        </ul>
                        <p>Potrebno je odabrati objekat nakon koga želite da postavite dodatnu aktivnost i kliknuti na dugme „Aditional Activities“.  (slika 3.14.1)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.1.jpg" alt="Slika 3.14.1" width="900" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.1 Odabir opcije "Aditional Activities"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon ovog koraka dobijate formu kao na slici 3.14.2.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.2.jpg" alt="Slika 3.14.2" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.2 Opcija "Aditional Activities"<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na objekat (separator slajd objekta učenja) pa zatim na opciju “Aditional Activities” vršite odabir objekata učenja nakon koga će biti postavljena aktivnost. Takođe, moguće je odabrati opciju “Aditional Activities” bez odabira objekta učenja gde ćete moći da odaberete u padajućoj listi (slika 3.14.3) nakon kog objekta će biti postavljena dodatna aktivnost.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.3.jpg" alt="Slika 3.14.3" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.3 Opcija "Aditional Activities" - Odabir objekta u lekciji<br></br></i></figcaption>
                        </figure>
                        <p>Ostavljena je mogućnost da nakon odabira objekta učenja pa opcijom “Aditional activities” možete iz padajuće liste odabrati neki drugi objekat i u nakon njega postaviti dodatne aktivnosti. Kada odaberete objekat nakon koga će biti postavljena dodatna aktivnost ime objekta se nalazi u delu “Choose object”, kao na slici 3.14.4.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.4.jpg" alt="Slika 3.14.4" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.4 Ocija "Aditional Activities" - Prikaz selektovanog objekta iz padajuće liste<br></br></i></figcaption>
                        </figure>
                        <p>Kada je odabran objekat, dugmićima koji se nalaze na donjoj polovini forme (slika 3.14.4) dodajete aktivnosti (Q&A, Forum, Multiple Choice, Submit files, Share Resources, Assessment).<br></br></p>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Q&A'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Q&A'";
                    document.getElementById('content').innerHTML = `
                        <figure>
                            <img src="Slike/Slika3.14.1.1.jpg" alt="Slika 3.14.1.1." width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.1.1. Opcija "Aditional Activities" - Dugme za kreiranje aktivnosti Q&A<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na Q&A dugme dobijate formu sa slike 3.14.1.2. Polja koja su obavezna za popunjavanje prilikom dodavanja Q&A aktivnosti su:</p>
                        <ul>
                            <li>Naslov pitanja (popuniti naslov pitanja, primer: “Pitanje 1”)</li>
                            <li>Instrukcije (popuniti instrukcije koje će biti vidljive studentu kada pristupi aktivnosti, primer: “Potrebno je uneti odgovor na postavljeno pitanje”, “Na osnovu primera iz predavanja odgovoriti na postavljeno pitanje”)</li>
                            <li>Tekst pitanja (popuniti tekst pitanja, primer: “Šta se predstavlja korisničkim zahtevima?”)</li>
                        </ul>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.14.1.2.jpg" alt="Slika 3.14.1.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.1.2 Forma "Aditional Activities - Add Q&A"<br></br></i></figcaption>
                        </figure>
                        <p>Primer popunjene forme za Q&A dat je na slici 3.12.1.3.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.1.3.jpg" alt="Slika 3.14.1.3" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.1.3 Opcija "Aditional Activities - Add Q/A - Popunjavanje forma"<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na “Save” dugme u donjem desnom uglu pamtite pitanje i vraćate se na prethodnu formu za dodavanje aktivnosti.<br></br></p>
                        <p>Klikom na dugme “Dodaj pitanje” dodaje se novo pitanje.</p>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Forum'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Forum'";
                    document.getElementById('content').innerHTML = `
                        <p>Odabirom “Add Forum” dugmeta sa slike 3.14.1.1 dobija se forma za unos foruma.<br></br></p>
                        <p>Na slici 3.14.2.1 prikazana je forma za unos foruma. Polja koja su obavezna za popunjavanje prilikom dodavanja forum aktivnosti su:</p>
                        <ul>
                            <li>Naziv: (popuniti naslov pitanja, primer: “Forum”)</li>
                            <li>Instrukcije (popuniti instrukcije koje će biti vidljive studentu kada pristupi aktivnosti, primer: “Za poene za zalaganje potrebno je odgovoriti na postavljenu temu u forumu”, “Na osnovu primera iz predavanja odgovoriti na diskusionom forumu u odgovarajućoj temi”)</li>
                            <li>Tema: (naziv teme u okviru foruma, primer: “Dizajn softvera”)</li>
                        </ul>
                        <p>Sadržaj: (tema foruma, primer : “Navesti razlike između dijagrama aktivnosti i mašine stanja. Diskutovati o različitim primerima dijagrama stanja”)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.2.1.jpg" alt="Slika 3.14.2.1" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.2.1 Ocpija "Aditional Activities - Add Forum"<br></br></i></figcaption>
                        </figure>
                        <p>Primer popunjene forme za aktivnost forum dat je na slici 3.14.2.2<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.2.2.jpg" alt="Slika 3.14.2.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.2.2 Ocpija "Aditional Activities - Add Forum - Popunjavanje forma"</i></figcaption>
                        </figure>
                        <p>Klikom na dugme “Save” u donjem desnom uglu forme za dodavanje foruma vraćate se kao i u sličaju dodavanja aktivnosti Q&A aktivnosti na početnu formu za dodavanje aktivnosti. (slika 3.14.2.3) U formi se sada nalaze dodatne aktivnosti u redosledu kojim su dodati nakon objekta, prvo ide aktivnost „Question and answers“ a zatim „Forum“. (slika 3.14.2.3)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.2.3.jpg" alt="Slika 3.14.3.3" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.3.3 Opcija "Aditional Activities - Dodate aktivnosti nakon objekta"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Multiple Choice'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Multiple Choice'";
                    document.getElementById('content').innerHTML = `
                        <figure>
                            <img src="Slike/Slika3.14.3.1.jpg" alt="Slika 3.14.3.1." width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.3.1. Opcija "Aditional Activities - Add Multiple Choice"<br></br></i></figcaption>
                        </figure>
                        <p>Dodavanje pitanja sa višestrukim odgovorima vrši se odabirom dugmeta „Add Multiple Choice“. (Slika 3.14.3.1) Nakon klika na dugme otvara se forma za unos pitanja u aktivnost. Polja koja su na raspolaganju su:</p>
                        <ul>
                            <li>Naslov (naslov pitanja)</li>
                            <li>Instrukcija (objašnjenje ili uputstvo koje se prikazuje studentu pre pitanja)</li>
                            <li>Pitanje ( tekst pitanja)</li>
                            <li>Odgovor (ponuđeni odgovor)</li>
                            <li>Odgovor (drugi ponuđeni odgovor jer aktivnost zahteva minimum dva odgovora na pitanje)</li>
                        </ul>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.14.3.2.jpg" alt="Slika 3.14.3.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.3.2 Opcija "Aditional Activities - Add Multiple Choice - Forma"<br></br></i></figcaption>
                        </figure>
                        <p>Moguće je uneti jedno ili više pitanja. Klikom na „Dodaj novo pitanje“ na formi se prikazuje novo polje za unos pitanja ispod postojećeg prvog pitanja. Pored unosa teksta pitanja možete odabrati dugme sa slikom zelenog plusa i dodati odgovor na kreirana pitanja. (slika 3.14.3.3)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.3.3.jpg" alt="Slika 3.14.3.3" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.3.3 Opcija "Aditional Activities - Add Multiple Choice - Dodavanje novog pitanja i odgovora na pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Sa desne strane pitanja nalaze se opcije za brisanje pitanja i promene redosleda unetih pitanja korišćenjem strelica gore i dole.<br></br></p>
                        <p>Klikom na “Save” dugme u donjem desnom uglu pamtite pitanje i vraćate se na prethodnu formu za dodavanje aktivnosti.</p>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Submit files'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Submit files'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Submit files” pokreće se otvaranjem opcije “Aditional activities” gde se u okviru forme odabere opcija “Add Submit Files”. (slika 3.14.4.1)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.4.1.jpg" alt="Slika 3.14.4.1" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.4.1 Ocpija "Aditional Activities - Add Submit Files"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon toga dobijate narednu formu sa slike 3.14.4.2. Na ovoj formi potrebno je popuniti naslov aktivnosti i instrukcije o načinu slanja fajla kroz aktivnost. Prilikom prikaza studentu prikazan je naslov i upisane instrukcije.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.4.2.jpg" alt="Slika 3.14.4.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.4.2 Opcija "Aditional Activities - Add Submit files . Popunjena forma"<br></br></i></figcaption>
                        </figure>
                        <p>Prikaz popunjene forme prikazan je na slici 3.14.4.2.<br></br></p>
                        <p>Klikom na “Save” dugme u donjem desnom uglu pamtite pitanje i vraćate se na prethodnu formu za dodavanje aktivnosti.</p>                        
                    `;
                }else if (content === "Dodavanje aktivnosti 'Shere recources'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Shere recources'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Share resourses” vrši se odabirom opcije “Add share resources” kao na slici 3.14.5.1.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.5.1.jpg" alt="Slika 3.14.5.1" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.5.1 Opcija "Aditional Activities - Add Share Resources"<br></br></i></figcaption>
                        </figure>
                        <p>Odabirom “Add Share Resources” otvara se forma sa slike 3.14.5.2. Potrebno je popuniti polja za naslov aktivnosti i instrukcije na koji način je potrebno preuzeti dodatne resurse. Sledeći deo forme odnosi se na naslov fajla koji se unosi kao dodatni resurs i URL sa dugmetom dobija forma za odabir fajla sa Vašeg računara. Moguće je uneti jedan ili više fajlova zavisno od Vaše potrebe. Sa desne strane naslova nalaze se opcije za brisanje fajla i promene redosleda unetih fajlova korišćenjem strelica gore i dole.<br></br></p>
                        <p>Klikom na “Save” dugme u donjem desnom uglu korisnik pamti pitanje i vraća se na prethodnu formu za dodavanje aktivnosti.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.5.2.jpg" alt="Slika 3.14.5.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.5.2 Opcija "Aditional Activities - Add Share resources - Popunjena forma"<br></br></i></figcaption>
                        </figure>
                        <p>Kada su dodate aktivnosti u okviru glavne forme za dodavanje aktivnosti imate sledeće opcije ovim redosledom:</p>
                        <ul>
                            <li>Brisanje aktivnosti (briše aktivnost iz liste i iz lekcije)</li>
                            <li>Pomeranje aktivnosti ka gore u listi (pomera aktivnost za jedno mesto ka gore)</li>
                            <li>Pomeranje aktivnosti ka dole u listi (pomera aktivnost za jedno mesto ka dole)</li>
                            <li>Pomeranje aktivnosti ka dole u listi (pomera aktivnost za jedno mesto ka dole)</li>
                            <li>Copy - Kopiranje unete aktivnosti (kopira selektovanu aktivnost)</li>
                            <li>Cut - unete aktivnosti (kopira selektovanu aktivnost i briše je sa liste)</li>
                            <li>Paste – Kopiranje unete aktivnosti (kopiranu vrednost unosi u odabranu listu)</li>
                        </ul>                        
                        <p>Možete odabrati drugi objekat iz padajuće liste i u okviru njega korišćenjem neke od opisanih opcija (Copy ili Cut) iskopirati već kreiranu aktivnost. Na taj način možete vršiti pomeranje aktivnosti po lekciji ili kopirati već kreirane aktivnosti na drugo mesto u lekciji.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.5.3.jpg" alt="Slika 3.14.3.2" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.3.2 Ocpija "Aditional Activities - Funkcija za modifikovanje kreiranih aktivnosti"</i></figcaption>
                        </figure>                    
                    `;
                }else if (content === "Dodavanje aktivnosti 'Assessment'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Assessment'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Assessment” vrši se kroz opciju “Aditional Activities”. Nakon toga potrebno je odabrati opciju prikazanu na slici 3.14.6.1 “Add Assessment”.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.1.jpg" alt="Slika 3.14.6.1" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.6.1 Opcija Ocpija "Assessment - dodavanje aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Sledeća forma koja se otvara je prikazana na slici 3.14.6.2. To je početna forma aktivnosti “Assessment”. U ovoj formi potrebno je uneti:</p>
                        <ul>
                            <li>Naslov – naslov aktivnosti</li>
                            <li>Instrukcije – objašnjenje aktivnosti i smernice za dalji rad za aktivnost “Assessment” koje će biti vidljivo studentu koji pristupi aktivnosti na LAMSu.</li>
                        </ul>                                                
                        <figure>
                            <img src="Slike/Slika3.14.6.2.jpg" alt="Slika 3.14.6.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.2 Opcija "Assessment - početna forma aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Primer popunjene početne forme prikazan je na slici 3.14.6.3. Popunjena su polja naslov i instrukcije. Nakon toga potrebno je odabrati “Broj pitanja iz banke” gde se unosi broj pitanja koji će biti prikazan studentu iz banke pitanja koja se kreira u ovoj aktivnosti. Banka pitanja se kreira tako što dodajete pitanja u banku a zatim odredite koliko pitanja će biti prikazano studentu u testu. Za potrebe ovog primera biće kreirana tri pitanja a studentu će biti prikazano samo jedno iz banke pitanja. To jedno pitanje sistem nasumično (random) izvlači iz kreirane banke pitanja.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.3.jpg" alt="Slika 3.14.6.3" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.3 Opcija "Assessment - odabir broja pitanja iz banke pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira broja pitanja iz banke pitanja na slici 3.14.6.3 sledeće podešavanje vezano je za broj poena koji će nositi tačan odgovor na pitanje u testu. Određivanje broja poena prikazano je na slici 3.14.6.4. Postavljeno je da vrednost tačnog odgovora bude 2 poena.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.4.jpg" alt="Slika 3.14.6.4" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.4 Opcija "Assessment - odabir broja poena za tačan odgovor na pitanje"<br></br></i></figcaption>
                        </figure>
                        <p>Naredni korak je odabir tipa pitanja. U aktivnosti “Assessment” moguće je dodati tri tipa pitanja:</p>                        
                        <ul>
                            <li><b>Multiple choice pitanje</b> sa samo jednim tačnim odgovorom</li>
                            <li><b>Multiple choice pitanje</b> sa više tačnih odgovora (dva ili više)</li>
                            <li><b>True/False</b> pitanje</li>
                        </ul>
                        <p>Na slici 3.14.6.5 prikazan je odabir tipa pitanja gde je odabran “Multiple choice” tip.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.5.jpg" alt="Slika 3.14.6.5" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.5 Opcija "Assessment - odabir tipa pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira tipa pitanja potrebno je odabrati “Dodaj pitanje”, kao na slici 3.14.6.6.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.6.jpg" alt="Slika 3.14.6.6" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.6 Opcija "Assessment - dodavanje novog pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira “Dodaj pitanje” dobijate formu za kreiranje pitanja. Potrebno je da popunite polja:</p>                        
                        <ul>
                            <li>Pitanje – naziv pitanja</li>
                            <li>Tekst – tekst pitanja</li>
                        </ul>
                        <p>Takođe, ukoliko želite da u pitanju odgovori budu različitog redosleda za svakog studenta potrebno je štiklirati “Slučajan redosled odgovora?”.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.7.jpg" alt="Slika 3.14.6.7" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.7 Opcija "Assessment - početnja forma za dodavanje novog pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.14.6.8 prikazana je popunjena forma za dodavanje pitanja u “Assessment” aktivnost. Popunjeno je pitanje, tekst pitanja i unet prvi odgovor na pitanje u polje “Odgovor”.<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.8.jpg" alt="Slika 3.14.6.8" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.8 Opcija "Assessment - popunjavanje forma za pitanje i dodavanje odgovora"<br></br></i></figcaption>
                        </figure>
                        <p>Dodavanje još jednog odgovora vrši se klikom na “Dodaj odgovor” (slika 3.14.6.8). Nakon toga se još jedno polje dodaje ispod prvog popunjenog odgovora gde možete uneti drugi odgovor na pitanje (slika 3.14.6.9).<br></br></p>                        
                        <figure>
                            <img src="Slike/Slika3.14.6.10.jpg" alt="Slika 3.14.6.10" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.10 Opcija "Assassesment - odabir slučajnog redosleda odgovora"<br></br></i></figcaption>
                        </figure>
                        <p>Štikliran je i “Slučajan redosled odgovora” na slici 3.14.6.10.<br></br></p>                        
                        <p>Poslednji korak kod dodavanja pitanja je klik na dugme “Save” nakon čega je pitanje uneto u banku pitanja ove aktivnosti. (slika 3.14.6.11)<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.11.jpg" alt="Slika 3.14.6.11" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.11 Opcija "Assessment - čuvanje kreiranog pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na dugme “Save” na formi prikazanoj na slici 3.14.6.11 vraćate se na glavnu formu aktivnosti “Assessment”.<br></br></p>                        
                        <p>Sledeći korak na ovom primeru je dodavanje novog pitanja. (slika 3.14.6.12)<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.12.jpg" alt="Slika 3.14.6.12" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.12 Opcija "Assessment - dodavanje drugog pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Potrebno je da odaberete tip pitanja (odabir tipa Multiple choice) i selektujete dugme “Dodaj pitanje”.<br></br></p>                        
                        <p>Otvara se forma za unos pitanja i potrebno je popuniti kao u prethodno objašnjenom primeru (slika 3.14.6.11). Razlika u ovom pitanju i prethodno objašnjenom primeru je štikliranje dva tačna odgovora kao primer pitanja sa višestrukim odgovorima. Štiklirane su kućice pored prvog i drugog odgovora na pitanje dok je treće pitanje ostavljeno kao netačno (slika 3.14.6.13).<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.13.jpg" alt="Slika 3.14.6.13" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.13 Opcija "Assessment - štikliranje dva tačna odgovora na pitanje"<br></br></i></figcaption>
                        </figure>
                        <p> Klikom na dugme “Save” (slika 3.14.6.13), pitanje se unosi u banku pitanja i nakon toga dolazite do početne forme aktivnosti “Assessment” gde su u listi sada vidljiva dva pitanja (slika 3.14.6.14).<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.14.jpg" alt="Slika 3.14.6.14" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.14 Opcija "Assessment - prikaz dodatnih pitanja u banci pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Potrebno je dodati još jedno pitanje u aktivnost “Assessment”. Vrši se odabir tipa pitanja “True/False” i selektovanje dugmeta “Dodaj pitanje”. (Slika 3.14.6.5)<br></br></p>                        
                        <p>Za ovaj tip pitanja (True/False) potrebno je uneti:</p>
                        <ul>
                            <li>Pitanje – naziv pitanja</li>
                            <li>Tekst – tekst pitanja i u padajućoj listi za “Tačan odgovor” odabrati da li je uneti odgovor na pitanje tačan ili netačan. (slika 3.14.6.15)</li>
                        </ul>   
                        <figure>
                            <img src="Slike/Slika3.14.6.15.jpg" alt="Slika 3.14.6.15" width="1000" height="450" class="zoom" class="zoom">
                            <figcaption><i>Slika 3.14.6.15 Opcija "Assessment - kreiranje pitanja tipa True/False"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira tačnog odgovora potrebno je kliknuti na dugme “Save” i ponovo se vratiti na početnu formu aktivnosti “Assessment” gde je sada prikazana lista od tri pitanja u banci pitanja (slika 3.14.6.16).<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.16.jpg" alt="Slika 3.14.6.16" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.6.16 Opcija "Assessment - prikaz kreiranih pitanja u banci pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Dodatne mogućnosti koje su na raspolaganju nakon dodavanja pitanja u banku je selektovanje pitanje i izmena pitanja. Na slici 3.14.6.17 prikazano je selektovanje trećeg pitanja (True/False) i zatim odabir opcije “Edit” (ikonica žuta olovka sa desne strane) gde je moguće izmeniti kompletno pitanje u banci pitanja.<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.17.jpg" alt="Slika 3.14.6.17" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.17 Opcija "Assessment - opcija izmena kreiranog pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Pored izmene pitanja moguće je obrisati pitanje iz banke pitanja klikom na dugme za brisanje (crveni x) prikazan na slici 3.14.6.18.<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.18.jpg" alt="Slika 3.14.6.18" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.18 Opcija "Assessment - selektovanje opcije za brisanje pitanja iz banke pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Ukoliko su kreirana pitanja u redu klikom na dugme “Save” vrši se čuvanje aktivnosti “Assessment” u okviru lekcije. (slika 3.14.6.19)<br></br></p>   
                        <figure>
                            <img src="Slike/Slika3.14.6.19.jpg" alt="Slika 3.14.6.19" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.19 Opcija "Assessment - čuvanje pitanja u okviru aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon klika na dugme “Save” prikazuje Vam se početna forma opcije “Aditional Activities” gde su prikazane kreirane aktivnosti vezane za odabrani objekat učenja. (slika 3.14.6.20)<br></br></p>   
                        <p>Dodavanje slike u pitanja se koristi dugme “Dodaj sliku” (slika 3.14.6.20)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.20.jpg" alt="Slika 3.14.6.20" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.20 Opcija "Dodaj sliku"<br></br></i></figcaption>
                        </figure>
                        <p>U okviru aktivnosti “Assessment” moguće je dodati mapu uma koja će pomoći studentima prilikom rada na testu za samostalnu proveru znanja. Mapa uma se dodaje štikliranjem opcije “Mind Map” kao na slici 3.14.6.21<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.21.jpg" alt="Slika 3.14.6.21" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.21 Dodavanje mape uma u okviru aktivnosti "Assessment"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon čekiranja dodavanje mape uma potrebno je dodati pitanja i odabrati dugme “Save” i sačuvati aktivnost “Assessment”.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.22.jpg" alt="Slika 3.14.6.22" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.6.22 Opcija "Assessment - prikaz liste kreiranih aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Dodavanje esejskog tipa pitanja u aktivnost “Assessment” vrši se odabirom pitanja “Essay” kao na slici 3.14.6.23.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.23.jpg" alt="Slika 3.14.6.23" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.23 Opcija "Assessment - dodavanje Essay tipa pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Kada je odabran tip pitanja “Essay” potrebno je kliknuti na dugme “Dodaj pitanje” kada se korisniku prikazuje forma kao na slici 3.14.6.24.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.24.jpg" alt="Slika 3.14.6.24" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.24 Opcija "Assessment - popunjavanje forme Essay tipa pitanja"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon popunjavanja forme potrebno je kliknuti na dugme “Save” i pitanje će se pojaviti u listi pitanja aktivnosti “Assessment”. (slika 3.14.6.25)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.6.25.jpg" alt="Slika 3.14.6.25" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.6.25 Opcija "Assessment - dodat tip pitanja Essay"<br></br></i></figcaption>
                        </figure>             
                    `;
                }else if (content === "Dodavanje aktivnosti 'Chat'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Chat'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Chat” vrši se odabirom opcije “Aditional Activities” gde se dobija forma sa slike 3.14.7.1. Potrebno je odabrati dugme “Add Chat”.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.7.1.jpg" alt="Slika 3.14.7.1." width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.7.1. Opcija "Chat - dodavanje aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira dodavanja aktivnosti “Chat” početna forma je prikazana na slici 3.14.7.2. Za ovu aktivnost potrebno je popuniti:</p>
                        <ul>
                            <li>Naslov – naslov aktivnosti</li>
                            <li>Instrukcije – uputstva za korišćenje aktivnosti “Chat”</li>
                        </ul>
                        <figure>
                            <img src="Slike/Slika3.14.7.2.jpg" alt="Slika 3.14.7.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.7.2 Opcija "Chat - početna forma aktivnosti"</i></figcaption>
                        </figure>
                        <p>Primer popunjene forme prikazan je na slici 3.12.7.3<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.7.3.jpg" alt="Slika 3.14.7.3" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.7.3 Opcija "Chat - primer popunjene forme"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon popunjavanja forme aktivnosti “Chat” potrebno je selektovati dugme “Save”. (slika 3.14.7.4)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.7.4.jpg" alt="Slika 3.14.7.4" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.7.4 Opcija "Chat - čuvanje aktivnosti"<br></br></i></figcaption>
                        </figure>
                        <p>Nakon klika na dugme “Save” prikazuje Vam se početna forma opcije “Aditional Activities” gde su prikazane kreirane aktivnosti vezane za odabrani objekat učenja.</p>
                        <figure>
                            <img src="Slike/Slika3.14.7.5.jpg" alt="Slika 3.14.7.5" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.7.5 Opcija "Chat - prikaz liste kreiranih aktivnosti"<br></br></i></figcaption>
                        </figure>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Nootbook'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Nootbook'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Noticeboard” vrši se odabirom opcije “Aditional Activities” gde se dobija forma u prethodnim poglavljima i u kojoj je potrebno odabrati “Add Noticeboard”.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.10.1.jpg" alt="Slika 3.14.10.1" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.10.1 Forma za dodavanje "Noticeboard" aktivnosti<br></br></i></figcaption>
                        </figure>
                        <p>Nakon klika na opciju “Add Noticeboard” otvara se forma sa slike 3.14.10.2 gde je potrebno uneti naslov aktivnosti a zatim i željeni tekst u polje za unos teksta. U okviru ove aktivnosti moguće je uneti tekst i uz pomoć integrisanog editora izvršiti njegove izmene i dorade.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.10.2.jpg" alt="Slika 3.14.10.2" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.14.20.2 Forma za dodavanje "Noticeboard" aktivnosti</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Dodavanje aktivnosti 'Image Gallery'") {
                    document.getElementById('main-heading').textContent = "Dodavanje aktivnosti 'Image Gallery'";
                    document.getElementById('content').innerHTML = `
                        <p>Dodavanje aktivnosti “Image Gallery” vrši se odabirom opcije “Aditional Activities” gde se dobija forma kao i u prethodnim poglavljima, u kojoj je potrebno odabrati “Add Image.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.11.1.jpg" alt="Slika 3.14.11.1" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.11.1 Forma za dodavanje "Image Gallery" aktivnosti<br></br></i></figcaption>
                        </figure>
                        <p>Nakon klika na	opciju “Add Image Gallery” otvara se forma sa slike 3.14.11.2 gde je potrebno uneti naslov aktivnosti a zatim i željene instrukcije u polju za unos instrukcija. Nakon toga se dodaju naslov i opis slike, i vrši se unos slike sa računara (klikom na dugme “Izaberi sliku”), nakon odabrane slike, njena putanja se može videti u okviru textbox-a ”url slike”. To znači da je slika uspešno postavljena u galeriju. Klikom na dugme “Dodaj novu sliku”, dodaje se nova forma za unos, sa nabrojanim komponentama (naslov i opis slike) koje je potrebno popuniti i ubaciti novu sliku.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.11.2.jpg" alt="Slika 3.14.11.2" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.11.2 Forma za unos neophodnih podataka "Image Gallery" aktivnosti</i></figcaption>
                        </figure>
                        <p>Klikom na dugme “Save”, aktivnost je sačuvana I prikazuje se u listi dodatnih aktivnosti, nakon čega se ista može izmeniti ili obrisati.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.14.11.3.jpg" alt="Slika 3.14.11.3" width="450" height="500" class="zoom">
                            <figcaption><i>Slika 3.14.11.3 Sačuvane aktivnosti "Galerija"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Osnovne funkcije mDita editora") {
                    document.getElementById('main-heading').textContent = "Osnovne funkcije mDita editora";
                    document.getElementById('content').innerHTML = `
                        <p>Prilikom dodavanja text box-a unutar sekcije (polje za unos teksta) moguće je kopirati tekst iz drugih dokumenata ili kucati tekst od početka.<br></br></p>
                        <p>Kada se korisnik odluči za kucanje teksta od početka moguće je kucati sve do kraja text box-a i slobodne površine na sekciji. Ukoliko ne postoji slobodnog mesta na sekciji da se text box proširi na dole nije moguće kucati tekst.<br></br></p>
                        <p>Kada korisnik iskopira tekst, iz drugog dokumenta ili resursa u text box, koji je veći od slobodne površine na sekciji tekst neće biti iskopiran i potrebno je smanjiti kopirani tekst iz resursa i pokušati ponovo.<br></br></p>
                        <p>Ukoliko korisnik želi da doda tekst u postojeći text box koji je popunjen do kraja slobodnog mesta u sekciji, potrebno je obrisati deo teksta na kraju text box-a a zatim dodati novi tekst na željeno mesto u text box-u.<br></br></p>
                        <p>Prilikom kucanja teksta u predviđenim text box-ovima ili kopiranja mDita editor će obeležiti nepravilno napisane reči ili pasuse korišćenjem funkcije “spell checker”. Funkcija se automatski pokreće u text box-ovima, nije je potrebno manuelno aktivirati.<br></br></p>
                        <p>Unos objekata učenja kroz mDita editor vrši se kroz opciju "Insert Object" (slika 3.15.1). Korisniku su kroz ovu funkciju na raspolaganju unos objekta ili unos podobjekta zavisno od potreba korisnika u samoj lekciji.<br></br></p>
                        <p>Korisnik se može kretati kroz objekte, podobjekte i slajdove unutar objekata korišćenjem tastature i strelica “gore” i “dole”.<br></br></p>
                        <p>Svaki kreirani objekat može postati podobjekat i obrnuto. Na ovaj način, korisnik desnim klikom na separator slajd objekta ili podobjekta može promeniti njegov oblik. Objekat učenja može postati podobjekat nekog objekat a podobjekat učenja može postati nezavisan objekat.<br></br></p>
                        <p>Kada se od podobjekta učenja kreira objekat učenja on se automatski dodaje na isto mesto gde se nalazio podobjekat učenja samo u formi objekta učenja. (slika 3.15.1)<br></br></p>
                        <p>Kada se od objekta učenja kreira podobjekat učenja korisnik dobija formu gde je potrebno izabrati u okviru kog objekta će ce nalaziti kreirani podobjekat. (slika 3.15.2<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.1.jpg" alt="Slika 3.15.1" width="500" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1 Desni klik na podobjekat i dabir opcije za prebacivanje u objekat<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.2.jpg" alt="Slika 3.15.2" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.2 Desni klik na podobjekat i odabir opcije za prebacivanje u objekat<br></br></i></figcaption>
                        </figure>
                        <p>Nakon odabira podobjekta i funkcije “Create object from subobject” dobijate formu sa slike 3.15.3 gde je potrebno odabrati objekat učenja u kome će se nalaziti kreirani podobjekat učenja.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.3.jpg" alt="Slika 3.15.3" width="599" height="500" class="zoom">
                            <figcaption><i>Slika3.15.3 Forma za odabir objekta u kome će se nalaziti kreirani podobjekat učenja</i></figcaption>
                        </figure>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.4.jpg" alt="Slika 3.15.4" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.4 Unos objekata i podobjekata</i></figcaption>
                        </figure>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.5.jpg" alt="Slika 3.15.5" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.5 Odabir layout-a sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Kada je kreiran objekat učenja on u sebi sadrži separator slajd i jednu sekciju. Dodavanje novih sekcija moguće je kroz opciju "Insert Section" gde je korisniku na raspolaganju:</p>                        
                        <ul>
                            <li>jednokolonska sekcija</li>
                            <li>dvokolonska sekcija</li>
                            <li>trokolonska sekcija</li>
                            <li>izgled 1-2 sekcija</li>
                            <li>izgled 2-1 sekcija</li>
                            <li>Galerija</li>
                        </ul>
                        <p>Pored standardnih sekcija moguće je odabrati i sekciju “Gallery” u okviru koje je moguće dodati više slika koje će se kasnije prikazati kao jedinstveni slajder sa slikama. (slika 3.15.6)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.6.jpg" alt="Slika 3.15.6" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.6 Odabir "Gallery" sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na Gallery u okviru opcije “Insert section” dobija se sekcija kao na slici 3.15.7. Klikom na dugme “Dodaj sliku” otvara se forma na slici 3.9.8 gde možete odabrati jednu sliku.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.7.jpg" alt="Slika 3.15.7" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.7 "Gallery" sekcija</i></figcaption>
                        </figure>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.8.jpg" alt="Slika 3.15.8" width="799" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.8 Forma za odabir slika za "Gallery" sekciju</i></figcaption>
                        </figure>
                        <p>Odabirom jedne slike dobijate formu prikazanu na slici 3.15.9 gde je potrebno uneti redni broj slike u galeriji. Primer: "-Slika1”. Klikom na dugme “Save Picture” slika se pamti u galeriji i prikazuje u sekciji.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.9.jpg" alt="Slika 3.15.9" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.9 Forma za unos naziva slike u "Gallery" sekciju<br></br></i></figcaption>
                        </figure>
                        <p>Kada odaberete “Save picture” na formi prikazanoj na slici 3.15.9 prikaz slike u sekciji vidljiv je na slici 3.15.10. Obavezna polja za svaku sliku su:</p>                        
                        <ul>
                            <li>Naziv slike (naziv slike je vidljiv studentima u prikazu lekcije)</li>
                            <li>Opis slike (opis slike je vidljiv u prikazu lekcije studentima ispod same slike) Kada je popunjen naziv i opis slike, moguće je odabrati sledeću sliku i uneti je u galeriju klikom na dugme “Dodaj sliku” i tako ponoviti proces.</li>
                        </ul>
                        <figure>
                            <img src="Slike/Slika3.15.10.jpg" alt="Slika 3.15.10" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.10 "Gallery sekcija" - Unos slike u galeriju</i></figcaption>
                        </figure>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.11.jpg" alt="Slika 3.15.11" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.11 Odabir različitog izgleda sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Autor kursa može promeniti izgled kreirane sekcije (layout) unutar objekta. Izgled sekcije takođe može biti promenjen iz početnog u neki od raspoloživih izgleda sekcije:</p>                        
                        <ul>
                            <li>jednokolonska sekcija</li>
                            <li>dvokolonska sekcija</li>
                            <li>trokolonska sekcija</li>
                            <li>izgled 1-2 sekcija</li>
                            <li>izgled 2-1 sekcija</li>
                            <li>Galerija</li>
                        </ul>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.12.jpg" alt="Slika 3.15.12" width="799" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.12 Unos slika u sekciju lekcije<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na "Image" otvara se prozor za odabir slike sa Vašeg računara. Kada odaberete sliku koju želite da unesete unutar sekcije klikom na dugme open vrši unos i pamćenje slike u sekciji. (slika 3.15.12) Zatim dobijate dijalog gde je potrebno uneti broj slike u sekciji a editor dodaje na tip aktivnosti koji je unet na separator slajdu odabranog objekta.<br></br></p>                        
                        <p>Pored opcije "Insert figure" slika se unutar sekcije može dodati jednostavnom "Drag and drop" opcijom gde treba da odaberete sliku iz bilo kog foldera na računaru, prevuče je mišem u sekciju u kojoj želi da se nalazi. Nakon prevlačenja slike u editor dobiće te polje za unos rednog broja slike u sekciji i klikom na dugme "Ok" slika će biti dodata u sekciju i u resources folder lekcije.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.13.jpg" alt="Slika 3.15.13" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.13 Unos programskog koda kroz odabir fajlova<br></br></i></figcaption>
                        </figure>
                        <p>Unos programskog koda unutar sekcije objekta moguće je izvršiti koristeći opciju "Insert Snippet". Unutar ove opcije postoje dve različite varijante unosa programskog koda:</p>                        
                        <ul>
                            <li>Unos programskog koda kroz fajl (Browse)</li>
                            <li>Unos programskog fajla kopiranjem (Insert Snippet by pasting)</li>
                        </ul> 
                        <p>Korišćenjem programskog koda kroz fajl u kome se nalazi kod koji želite da unese u sekciju. Funkcioniše tako što dobijate dijalog za odabir fajla sa računara. Odaberom fajla i aplikacija preuzme programski kod i postavi u okviru sekcije.(slika 3.15.13) U dijalogu za odabir fajla moguće je podesiti jezik programskog koda, postaviti broj linija koji će biti vidljiv u sekciji kao i da li je potrebno da postoje brojevi linija u sekciji. (slika 3.15.14). Klikom na dugme "Insert" programski kod se postavlja na odabrano mesto u sekciji.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.14.jpg" alt="Slika 3.15.14" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.14 Primer podešavanja opcija za unos programskog koda kroz fajl<br></br></i></figcaption>
                        </figure>
                        <p>Primer unetog programskog koda sa odabranim podešavanjem prikazan je na slici 3.15.15 Aplikacija je učitala programski kod iz odabranog fajla i postavila ga unutar sekcije uz definisana podešavanja (programski jezik, broj linija i prikaz rednog broja linije programskog koda).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.15.jpg" alt="Slika 3.15.15" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.15 Primer unetog programskog koda unutar sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Na raspolaganju Vam je i kopiranje programskog fajla opcijom "Paste". U tom slučaju obeležite programski kod sa nekog resursa (internet adresa, razvojno okruženje). (slika 3.15.16)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.16.jpg" alt="Slika 3.15.16" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.16 Uvod i zaključak slajdovi<br></br></i></figcaption>
                        </figure>
                        <p>Kopiranje programskog koda iz drugih resursa prikazano je na slici 3.15.17 Kao i kod unosa programskog koda kroz fajl tako i u ovde, potrebno je uneti broj linija programskog koda u prikazu i programski jezik.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.17.jpg" alt="Slika 3.15.17" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.17 Kopiranje programskog koda opcijom "Insert code by pasting"<br></br></i></figcaption>
                        </figure>
                        <p>Aplikacija je učitala iskopirani programski kod i postavila ga unutar sekcije uz definisana podešavanja (programski jezik, broj linija i prikaz rednog broja linije programskog koda). (slika 3.15.18).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.18.jpg" alt="Slika 3.15.18" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.18 Primer unetog programskog koda unutar sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Unos matematičkih formula omogućen je kroz "Insert Latex" opciju. Možete kucati formulu koristeći predviđen editor za Latex kreiran u okviru mDita editora (slika 3.15.19) Pored kucanja formule omogućeno je i kopiranje iz online editora za kucanje formula.U dijalogu za unos formula postoji opcija "Preview" koja služi za prikaz formule pre unosa u sekciju što služi autorima kursa za proveru validnosti formule i uklanjanja eventualnih grašaka. Nakon toga, klikom na opciju "Insert" formula se unosi u odabrano mesto u sekciji. Formula može naznačena van teksta (prvi primer na slici 3.15.20. , a može biti i u okviru reda teksta kao što je drugi primer na slici 3.15.20 ). Za naznačavanje formule van teksta koriste se dva znaka $$ na početku i kraju formule, dok se za formulu u redu sa tekstom koristi jedan znak $ na početku i kraju formule. Kroz editor i kartice koje se nalaze na vrhu u meniju možete odabrati znak ili simbol koji Vam je potreban. Kartice koje su na raspolaganju sa različitim simbolima su: Math, Arrow, Greek/Functions, Symbol, Logic i Format.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.19.jpg" alt="Slika 3.15.19" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.19 Unos Latex formule<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.20.jpg" alt="Slika 3.15.20" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.20 Prikaz Latex formule<br></br></i></figcaption>
                        </figure>
                        <p>Opcija za unos video materijala omogućena je kroz mDita editor. Postoje dva načina za unos video materijala, putem linka sa YouTube veb sajta ili direktno sa Vašeg računara. Ukoliko se odlučite za unos video snimka sa YouTube sajta potrebno je odabrati opciju "YouTube" u delu video i u dobijenom dijalogu iskopirati kompletnu adresu videa.<br></br></p>
                        <p>Snimka sa YouTube sajta (slika 3.15.21 I 3.15.22): https://www.youtube.com/watch?v=UzprPX82Nac<br></br></p>
                        <p>Klikom na dugme "OK" video materijal se pojavljuje u sekciji. (slika 3.15.23)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.21.jpg" alt="Slika 3.15.21" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.21 Odabir opcije za unos video materijala sa Youtube veb sajta<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.22.jpg" alt="Slika 3.15.22" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.22 Kopiranje linka video materijala sa YouTube sajta<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.23.jpg" alt="Slika 3.15.23" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.23 Sekcija sa video materijalom sa YouTube-a<br></br></i></figcaption>
                        </figure>
                        <p>Sličan proces dešava se prilikom unosa video materijala sa Vašega računara. Potrebno je odabrati opciju "Video" u delu multimedia i kroz dobijeni dijalog odabrati video fajl. Podržani video materijal je u mp4 formatu pa je moguće uneti samo fajlove ovog formata unutar sekcije. (slika 3.15.24)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.24.jpg" alt="Slika 3.15.24" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.24 Odabir video materijala sa računara korisnika<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.25.jpg" alt="Slika 3.15.25" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.25 Dodavanje audio materijala sa računara korisnika<br></br></i></figcaption>
                        </figure>
                        <p>Dodavanje audio materijala vrši se identično kao i video materijal. Potrebno je selektovati opciju “Audio” iz multimedia dela glavnog menija i odabrati audio fajl sa računara. Podržani format audio fajla je mp3. (slika 3.15.25)<br></br></p>
                        <p>Pored dodavanja fajla audio materijala, moguće je klikom na dugme “Record audio” sa slike 3.15.25 snimiti audio materijal korišćenjem mikrofona na računaru. Dobija se forma sa slike 3.15.26 gde se klikom na prvo dugme sa leve strane započinje snimanje audio materijala. Dugme u sredini služi za stopiranje snimanja a dugme sa desne strane služi za preslušavanje snimljenog materijala (komande su kao u standardnom alatu za preslušavanje i snimanje audio materijala).<br></br></p>
                        <p>Snimljeni audio materijal se klikom na dugme “Use recording” smešta na odabrani slajd u lekciji.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.26.jpg" alt="Slika 3.15.26" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.26 Snimanje audio materijala<br></br></i></figcaption>
                        </figure>
                        <p>Tekst u okviru sekcija moguće je obeležiti posebnim opcijama koje su već poznate autorima kurseva. Na autoru je da selektuje deo teksta u sekciji i klikom na opciju izvrši obeležavanje. Opcije koje su na raspolaganju su:</p>                        
                        <ul>
                            <li>Keyword</li>
                            <li>Term</li>
                            <li>Phrase</li>
                            <li>Highlight</li>
                            <li>Foreign word</li>
                            <li>Reserved word</li>
                        </ul> 
                        <p>Na autoru kursa je da odabere koji deo teksta će obeležiti navedenim opcijama. Tu je i opcija "Clear style" koja omogućava brisanje obeleženog teksta. Primer upotrebe navedenih obeležavanja teksta prikazan je na slici 3.15.27.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.27.jpg" alt="Slika 3.15.27" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.27 Upotreba opcija za obeležavanje teksta<br></br></i></figcaption>
                        </figure>
                        <p>Provera lekcije vrši se pri čuvanju lekcije (File pa opcija "Save project"). Ukoliko je sve u redu prikazuje Vam se poruka "Uspešno sačuvan projekat"a ukoliko postoji greška unutar lekcije (nije unet naziv slajda, nije uneta poenta slajda, klasifikacija ili neko drugo od obaveznih polja za unos) sa desne strane ekrana možete videti taksativno navedene sve greške koje je potrebno popraviti.(slika 3.15.28 i 3.15.29) Za svaku grešku dobijate informaciju u kojoj sekciji se nalazi (naziv sekcije) objektu u kome se nalazi (naziv objekta).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.28.jpg" alt="Slika 3.15.28" width="400" height="400" class="zoom">
                            <figcaption><i>Slika 3.15.28 Prikaz pronađenih grešaka u lekciji<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.29.jpg" alt="Slika 3.15.29" width="400" height="400" class="zoom">
                            <figcaption><i>Slika 3.15.29 Obaveštenje o uspešno sačuvanom projektu<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.30.jpg" alt="Slika 3.15.30" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.30 Opcija na desni klik miša u sekciji<br></br></i></figcaption>
                        </figure>
                        <p>Unutar sekcije moguće je vršiti izmene položaja svih elemenata sekcije. (slika 3.15.30) Možete desnim klikom miša na textbox, sliku ili video dobiti opcije:</p>                        
                        <ul>
                            <li>Delete (brisanje elementa)</li>
                            <li>Move up (pomeranje elementa ka gore)</li>
                            <li>Move down (pomeranje elementa ka dole)</li>
                            <li>Copy (kopiranje iz kolone sekcije u drugu kolonu ili sekciju)</li>
                            <li>Cut (brisanje elementa iz sekcije i pamćenje u memoriji uz mogućnost kasnijeg kopiranja)</li>
                            <li>Change Image (izmena slike u sekciji - važi samo za odabranu sliku u sekciji)</li>
                            <li>InsertDescription (unos opisa slike - važi samo za odabranu sliku u sekciji</li>
                        </ul>
                        <br></br>
                        <p>Kao što postoji mogućnost izmena položaja elemenata jedne sekcije u objektu, takođe je moguće menjati položaj sekcija i objekata. (slika 3.15.31) Desnim klikom na sekciju, objekat ili podobjekat sa leve strane opcije koje se prikazuju su:</p>                        
                        <ul>
                            <li>Delete (brisanje elementa)</li>
                            <li>Move up (pomeranje elementa ka gore)/li>
                            <li>Move down (pomeranje elementa ka dole)</li>
                            <li>Copy (kopiranje iz kolone sekcije u drugu kolonu ili sekciju)</li>
                            <li>Cut (brisanje elementa iz sekcije i pamćenje u memoriji uz mogućnost kasnijeg kopiranja)</li>
                            <li>Paste (unos kopiranog elementa)</li>
                            <li>Duplicate ( dupliranje elementa)</li>
                            <li>Add new section (unos nove sekcije ispod markirane sekcije)</li>
                        </ul>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.31.jpg" alt="Slika 3.15.31" width="300" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.31 Opcija na desni klik miša u prikazu objekta<br></br></i></figcaption>
                        </figure>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.15.32.jpg" alt="Slika 3.15.32" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.32 Mogućnosti za tekst<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.15.32 prikazane su osnovne funkcije koje korisnik može obavljati sa običnim tekstom unutar textbox-a. To su:</p>                        
                        <ul>
                            <li>B - Bold text</li>
                            <li>I - Italic text</li>
                            <li>U- Underline text-a</li>
                            <li>Bullet-i</li>
                            <li>Podliste</li>
                            <li>Numbering</li>
                            <li>Nastavak numeracije/liste</li>
                            <li>Dodavanje linka</li>
                            <li>Subscript</li>
                            <li>Superscript</li>
                            <li>Undo</li>
                            <li>Redo</li>
                        </ul>
                        <br></br>
                        <p>Posebna stilizacija za delove teksta obuhvata:</p>                        
                        <ul>
                            <li>Keyword</li>
                            <li>Term/li>
                            <li>Phrase</li>
                            <li>Highlight</li>
                            <li>Foreign word</li>
                            <li>Reserved word</li>
                            <li>Code</li>
                        </ul>
                        <br></br>
                        <p>Pored toga postoji I opcija “Clear style” koja uklanja stilizaciju sa označenog teksta. Koristeći opciju Undo (strelica na levo) i Redo (strelica na desno) možete se vratiti potez unazad ili vraćeni potez unazad ponovo vratiti na početno stanje. Ove opcije se odnose na bilo koju izmenu izvršeno u mDita editoru.<br></br></p>
                        <p>Drag and drop opcija – promena mesta elemenata unutar sekcije<br></br></p>
                        <p>U mDita editoru, za razliku od prethodnog kreiranja lekcija u Power Point-u, moguće je premeštati delove sekcija jednostavnim prevlačenjem na drugo mesto u sekciji, ispred ili ispod nekog drugog elementa. Svaki element sekcije, bilo da se radi o text box-u u kome se nalazi tekst, slici, isečku koda, video materijalu, ili bilo kom drugom elementu, moguće je pomeriti sa svog prvobitnog mesta jednostavnim selektovanjem željenog elementa.<br></br></p>
                        <p>U primeru na slici 3.15.33 prikazana je jedna sekcija objekta učenja. Klikom na sliku pojaviljuje se u gornjem desnom uglu opcija koja se koristi za prebacivanje slike na drugu lokaciju. Klikom miša na “plavi krst” moguće je prebaciti sliku na drugo mesto.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.33.jpg" alt="Slika 3.15.33" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.33 Selektovanje slike u okviru sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.15.34 prikazano je prebacivanje slike u drugu kolonu sekcije. Ovu funkcionalnost je moguće primeniti na svim elementima unutar sekcije objekta. Jedino ograničenje koje postoji je da na mestu na koje želite da prebacite odabrani element postoji dovoljno prostora do kraja slajda. Ukoliko prostor nije dovoljan da bi se element ubacio, potrebno je osloboditi prostor i ponoviti proces.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.34.jpg" alt="Slika 3.15.34" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.34 Prebacivanje slike u drugu kolonu sekcije<br></br></i></figcaption>
                        </figure>
                        <p>Opcija "Insert note" omogućava unos zabeleške u okviru sekcije. Zabeleška predstavlja kratak naglašen tekst koji je po početnim podešavanjima u editoru odvojen sivom bojom pozadine. Na taj način možete studentu naglasiti šta je najbitniji deo sekcije. Pored početne sive boje text box-a za zabelešku, desnim klikom miša na zabelešku moguće je izabrati i druge boje predstavljene na slici 3.15.35 Takođe je moguće i odabrati drugačiju boju teksta u samom text box-u zavisno od potreba korisnika. (slika 3.15.36)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.35.jpg" alt="Slika 3.15.35" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.35 Odabir boje pozadine zabeleške<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.36.jpg" alt="Slika 3.15.36" width="1000" height="450" class="zoom">
                            <figcaption><i>Slika 3.15.36 Odabir boje teksta u zabelešci</i></figcaption>
                        </figure> 
                                               
                    `;
                }else if (content === "Dodavanje liste (bullet liste i numerisane liste)") {
                    document.getElementById('main-heading').textContent = "Dodavanje liste (bullet liste i numerisane liste)";
                    document.getElementById('content').innerHTML = `
                        <p>Koristeci opciju bullet u bullet-u mozete napraviti listu unutar liste. Na slici 3.15.1.1 prikazano je korišćenje opcije bullet.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.1.1.jpg" alt="Slika 3.15.1.1" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1.1 Kreiranje neurešene liste<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.15.1.2 prikazano je korišćenje opcije bullet u bullet-u gde je moguće napraviti listu bulleta u okviru postojeće bullet liste.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.1.2.jpg" alt="Slika 3.15.1.2" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1.2 Kreiranje pod liste neuređene liste</i></figcaption>
                        </figure>
                        <p>Koristecu opciju “numerisana lista u numerisanoj listi” možete napraviti numerisanu listu unutar numerisane liste. Na slici 3.15.1.3 prikazan je proces kreiranja liste, potrebno je odabrati broj od koga lista počinje i kliknuti dugme “Nova lista”. Ukoliko je potrebno nastaviti listu iz prethodnog text boxa ili slajda potrebno je u polje uneti broj od koga se nastavlja lista i odabrati dugme “Nastavi listu”. U nastavku dokumenta su primeri kreiranja različitih lista nabrajanja.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.1.3.jpg" alt="Slika 3.15.1.3" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1.3 Kreiranje numerisane liste</i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.15.1.4.jpg" alt="Slika 3.15.1.4" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1.4 Kreiranje numerisane liste</i></figcaption>
                        </figure>
                        <p><b style='color:red;'>napomena:</b> Na slici 3.15.1.5 prikazano je kreiranje pod liste numerisane liste. U slučaju kreiranja pod liste unutar numerisane liste u pod listi stavke polaze od broja 1. Broj 1 iz pod liste biće prikazan u lekciji (u HTML i PDF verziji lekcije) kao 1.1 jer se nalazi ispod broja 1 u glavnoj numerisanoj listi a broj 2 u pod listi kao 1.2.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.1.5.jpg" alt="Slika 3.15.1.5" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.1.5 Kreiranje pod liste numerisane liste</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Proveravanje ispravnosti linkova") {
                    document.getElementById('main-heading').textContent = "Proveravanje ispravnosti linkova";
                    document.getElementById('content').innerHTML = `
                        <p>Otvaranjem lekcije mDita editor automatski vrši proveru linkova koji se nalaze unutar lekcije. Prilikom proveravanja linkova morate da imate internet konekciju na računaru. Proveravaju se:<br></br></p>
                        <ul>
                            <li>Youtube linkovi koji su uneti u sekciju kroz opciju “Youtube”</li>
                            <li>Youtube linkovi koji su uneti kao link u okviru text box-a sekcije/li>
                            <li>Linkovi ka veb sajtovima koji su dodati u okviru text box-a</li>
                            <li>Linkovi koji su uneti na određeni deo teksta unutar sekcije</li>
                        </ul>
                        <p>U toku provere mogu se prikazati tri različite poruke u delu predviđenom za prikaz grešaka unutar editora. Prvi slučaj je poruka kada editor vrši proveru linkova (prilikom otvaranja lekcije). Prikazuje Vam se poruka prikazana na slici 3.15.2.1, kako bi znali da je u toku provera linkova u lekciji. Za to vreme možete raditi na slajdovima unutar lekcije ali nije poželjno zatvaranje editora jer u tom slučaju linkovi neće biti provereni. Kada se završi provera linkova, poruka se uklanja (obično traje do 5 sekundi).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.2.1.jpg" alt="Slika 3.15.2.1" width="280" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.2.1 Poruka da je proveravanje linkova u toku<br></br></i></figcaption>
                        </figure>
                        <p>Drugi tip poruke koja se može pojaviti je da je link neispravan (slika 3.15.2.2). Možete kliknuti na poruku koja će Vas automatski odvesti do slajda u kome se neispravni link nalazi i može izvršiti izmenu linka. Editor će prikazati sve linkove u lekciji koji su neispravni (na kojima ne postoji sadržaj, linkove za koje je potrebno vreme učitavanja duže od 10 sekundi i linkove koji nemaju sertifikat i prepoznati su kao nesigurni).<br></br></p>
                        <p><b style='color:red;'>napomena:</b> Svaki neispravni link prijavljen od strane editora potrebno je proveriti (kopiranjem linka u pretraživač i otvaranjem) i ukoliko link radi (ukoliko se posle dužeg vremena učita ili je moguće otvoriti link bez sertifikata) i procenite da treba da ostane u lekciji, link može ostati a lekcija može biti sačuvana i pored prikaza da greška postoji u linku. Linkove koji nemaju sadržaj treba obrisati i zameniti ih validnim linkovima.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.2.2.jpg" alt="Slika 3.15.2.2" width="280" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.2.2 Poruka da je link neispravan<br></br></i></figcaption>
                        </figure>
                        <p>Treći tip poruke koja se može pojaviti je da nemate internet konekciju i da linkovi lekcije ne mogu biti provereni.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.15.2.3.jpg" alt="Slika 3.15.2.3" width="280" height="500" class="zoom">
                            <figcaption><i>Slika 3.15.2.3 Poruka da je link neispravan</i></figcaption>
                        </figure>
                    `;
                }else if (content === "LAMS Designer") {
                    document.getElementById('main-heading').textContent = "LAMS Designer";
                    document.getElementById('content').innerHTML = `
                        <p>Klikom na „LAMS Designer“ karticu otvara se deo editora u kome se nalaze funkcije slične „Author“ delu u LAMS-u. Na raspolaganju su Vam funkcije prikazane na slici 3.17.1.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.1.jpg" alt="Slika 3.17.1" width="1000" height="200" class="zoom">
                            <figcaption><i>Slika 3.17.1 Glani meni "LAMS designer-a"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.17.2 prikazan je kompletan izgled strane dizajnera. Sa leve strane nalaze se objeki učenja i dodatne aktivnosti. Objekti učenja predstavljeni su početnim separator slajdovima.<br></br></p>
                        <p>Dodatne aktivnosti koje se nalaze u lekciji predstavljeni su slajdovima sa ljubičastom bojom i znakom LAMS aktivnosti. U centralnom delu dizajnera nalazi se radna površina na kojoj je moguće manipulisati objektima učenja i dodatnim aktivnostima.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.2.jpg" alt="Slika 3.17.2" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.2 Početni interfejs "LAMS designer-a"<br></br></i></figcaption>
                        </figure>
                        <p>Objekti učenja i dodatne aktivnosti se prebacuju na radnu površinu selektovanjem opcije „Move“ a zatim selektovanjem objekta ili dodatne aktivnosti sa leve strane i prevlačenjem na radnu površinu. (slika 3.17.3)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.3.jpg" alt="Slika 3.17.3" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.3 Prevljačenje objekata učenja i dodatnih aktivnosti na radnu površinu korišćenjem "Move" funkcije<br></br></i></figcaption>
                        </figure>
                        <p>Upravljanje dodatnim aktivnostima se vrši kao i u editor delu, klikom na „Open editor“ dugme. Na slici 3.17.4 prikazan je prozor za dodavanje dodatnih aktivnosti koji je detaljno objašnjen u 3.8 poglavlju ovog dokumenta.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.4.jpg" alt="Slika 3.17.4" width="400" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.4 Selektovanje i kreiranje dodatnih aktivnosti kroz editor<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na dugme „Insert“ sa slike 3.17.5 moguće je ubaciti dodatne LAMS aktivnosti bez otvaranja novih prozora u dizajneru. Aktivnosti koje su na raspolaganju korisniku su:<br></br></p>
                        <ul>
                            <li>Assessment</li>
                            <li>Chat</li>
                            <li>Forum</li>
                            <li>Multiple Choice</li>
                            <li>Question & Answer</li>
                            <li>Share Resources</li>
                            <li>Submit Files</li>
                        <figure>
                            <img src="Slike/Slika3.17.5.jpg" alt="Slika 3.17.5" width="700" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.5 Opcija "Insert"<br></br></i></figcaption>
                        </figure>
                        <p>Opcija „Connect“ omogućava povezivanje objekata učenja i dodatnih aktivnosti na radnoj površini. Potrebno je selektovati „Connect“ opciju i odabrati objekat učenja ili dodatnu aktivnost na radnoj površini, kliknuti na nju i kliknuti na drugi objekat učenja ili dodatnu aktivnost sa kojim želite da napravi vezu. Nakon toga, iscrtava se veza između objekata učenja na radnoj površini i objekti su povezani. Kasnije, klikom na kreiranu vezu moguće je izvršiti brisanje i ponovno povezivanje.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.6.jpg" alt="Slika 3.17.6" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.6 Opcija "Conncet"<br></br></i></figcaption>
                        </figure>
                        <p>Primer povezivanja objekata učenja na radnoj površini priakazan je na slici 3.17.7.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.7.jpg" alt="Slika 3.17.7" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.7 Proces povezivanja objekata učenja na radnoj površini korišćenjem opcije "Connect"<br></br></i></figcaption>
                        </figure>
                        <p>Opcija „Auto arrange“ se koristi za sortiranje objekata učenja i dodatnih aktivnosti na radnoj površini. (slika 3.17.8) Možete odabirom načina sortiranja izvršiti grupisanje svih stavki na radnoj površini shodno odabranoj opciji.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.8.jpg" alt="Slika 3.17.8" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.8 Opcija "Auto arrange"<br></br></i></figcaption>
                        </figure>
                        <p>Možete ukloniti sve stavke sa radne površine korišćenjem opcije „Clear“ prikazanoj na slici 3.17.9. Na ovaj način brišete sve sa radne površine dok objekti učenja i dodatne aktivnosti ostaju u lekciji. Nakon klika „Clear“ dobijate formu u kojoj je još jednom potrebno potvrditi brisanje svih stavki sa radne površine. Kada potvrdite da želite da očisti platno, sve stavke nestaju sa radne površine.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.9.jpg" alt="Slika 3.17.9" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.9 Opcija "Clear"<br></br></i></figcaption>
                        </figure>
                        <p>Poslednja opcija u meniju je „Center“. Koristi se ukoliko je potrebno da se vratite sa bilo kog dela radne površine na deo gde se nalaze objekti i dodatne aktivnosti. (slika 3.17.10)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.10.jpg" alt="Slika 3.17.10" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.10 Opcija "Center"<br></br></i></figcaption>
                        </figure>
                        <p>Osnovne opcije prikazane su u nastavku. Nakon prevlačenja objekata učenja i dodatnih aktivnosti sa leve strane na radnu površinu imate mogućnost da ukloni objekte koji se nalaze na radnoj površini iz menija sa leve strane. Čekiranjem opcija „Show added objects“ i „Show added activities“ možete prikazati objekte i dodatne aktivnosti sa radne površine u meniju sa leve strane. (slika 3.17.11)<br></br></p>
                        <p>Dečekiranjem navedenih opcija u meniju sa leve strane se ne prikazuju objekti učenja i dodatne aktivnosti koje se nalaze na radnoj površini.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.11.jpg" alt="Slika 3.17.11" width="1000" height="200" class="zoom">
                            <figcaption><i>Slika 3.17.11 Opcija "Center"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.17.12 prikazane su opcije za prikazivanje grida na radnoj površini. Čekiranjem i dečekiranjem „Show grid“ opcije grid se prikazuje na radnoj površini (iscrtane tačkice).<br></br></p>
                        <p>Opcija „Snap to grid“ koja se takođe nalazi na slici 3.17.12 omogućava da vršite izmene pozicije objekata učenja i dodatnih aktivnosti na radnoj površini samo na osnovu grida (tačaka). U ovom slučaju položaj objekata učenja je moguće menjati samo shodno rasporedu tačaka na radnoj površini.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.12.jpg" alt="Slika 3.17.12" width="1000" height="200" class="zoom">
                            <figcaption><i>Slika 3.17.12 Opcija "Center"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici 3.17.13 prikazane su opcije za povećenje grid-a i zumiranja radne površine ukoliko Vam je to potrebno za rad.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.13.jpg" alt="Slika 3.17.13" width="1000" height="200" class="zoom">
                            <figcaption><i>Slika 3.17.13 Opcija "Center"<br></br></i></figcaption>
                        </figure>
                        <p>Moguće je kreirati aktivnost "Gate" koja u okviru LAMS-a služi za zaustavljanje studenta ukoliko nije ispunio postavljeni uslov. Unosite ulazne parametre za aktivnost "Gate", a uslov može biti tačan odgovor na postavljeno pitanje, aktivnost u okviru teme na forumu, broj osvojenih poena na testu. Ukoliko želite da koristite aktivnost "Gate" morate u okviru procesa učenja ispred navedene aktivnosti imati aktivnosti koje mogu davati ulazni parametar u aktivnost "Gate" (multiple choice aktivnost, Q&A, Forum) (slika 3.17.14) a na slici 3.17.15 prikazana je popunjena aktivnost „Gate“.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.14.jpg" alt="Slika 3.17.14" width="599" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.14 Aktivnost "Gate" i opcija za podešavanje<br></br></i></figcaption>
                        </figure>
                        <figure>
                            <img src="Slike/Slika3.17.15.jpg" alt="Slika 3.17.15" width="400" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.15 Primer popunjavanja aktivnosti "Gate"<br></br></i></figcaption>
                        </figure>
                        <p>Aktivnost "Optional activity" služi da studentu omogući biranje putanje kroz proces učenja. Vi kao profesor, možete u navedenoj aktivnosti napraviti različite puteve u lekciji i student shodno svom znanju može odabrati put kojim želi da se kreće ili aktivnost kojoj želi da pristupi.<br></br></p>
                        <p>Aktivnost “Branch” (grananje) služi za kreiranje različitih putanja u okviru procesa učenja. Možete kreirati različite putanje u navedenoj aktivnosti gde će student moći da bira kojom putanjom želi da se kreće. Pored proizvoljnog odabira putanje od strane studenta, moguće je kreirati uslove na osnovu kojih student automatski dobija jednu od raspoloživih putanja. Ti uslovi su LAMS aktivnosti (pitanja i odgovori, forum, test) gde na osnovu rezultata studenta (broj tačnih odgovora, učestvovanje u diskusiji na forumu) sistem sam određuje putanju u aktivnosti “Branch”. Vi kao profesor, treba samo da postavite uslove za svako grananje odnosno putanju. Aktivnost “Branch” se dodaje kroz LAMS Designer i u tom slučaju dobijate aktivnosti kao na slici 3.17.16.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.16.jpg" alt="Slika 3.17.16" width="1200" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.16 Primer dodavanja aktivnosti "Branch"<br></br></i></figcaption>
                        </figure>
                        <p>Na slici prikazano je dodavanje aktivnosti „Branch“ sa leve strane zelena kocka sa grananjem predstavlja početak aktivnosti a crvena kocka predstavlja kraj aktivnosti. Pre svega potrebno je povezati unetu aktivnost sa prethodnim procesom učenja. (slika 3.17.17)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.17.jpg" alt="Slika 3.17.17" width="1200" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.17 Povezivanje aktivnosti "Branch" sa procesom učenja<br></br></i></figcaption>
                        </figure>
                        <p>Nakon što je aktivnost „Branch“ povezana sa procesom učenja potrebno je dodati objekte učenja ili aktivnosti između početne zelene kocke i crvene kocke.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.18.jpg" alt="Slika 3.17.18" width="1000" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.18 Popunjavanje aktivnosti "Branch"<br></br></i></figcaption>
                        </figure>
                        <p>Kada su dodate putanje u aktivnosti „Branch“ (slika 3.17.18), potrebno je podesiti uslove na osnovu kojih će studenti dobiti odgovarajuću putanju. Kao što je navedeno uslovi se postavljaju na osnovu rezultata u aktivnostima koje se nalaze pre aktivnosti „Branch“ (Forum, pitanja i odgovori).<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.19.jpg" alt="Slika 3.17.19" width="400" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.19 Odabir ulaznog parametra aktivnosti "Branch"<br></br></i></figcaption>
                        </figure>
                        <p>Kada je odabrana aktivnost iz koje će biti uzet ulazni parametar u aktivnost „Branch“ (Forum gde se proverava broj postova studenta). Ukoliko je broj postova studenta na forumu 1 student dobija putanju br. 1 u aktivnosti „Branch“. Takođe, potrebno je popuniti i uslov za putanju br.2 po istom postupku. Uslovi se moraju razlikovati za različite putanje.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.17.20.jpg" alt="Slika 3.17.20" width="400" height="500" class="zoom">
                            <figcaption><i>Slika 3.17.20 Odabir ulaznog parametra "Branch"</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Otvaranje prethodno otvorenih lekcija") {
                    document.getElementById('main-heading').textContent = "Otvaranje prethodno otvorenih lekcija";
                    document.getElementById('content').innerHTML = `
                        <p>Klikom na opciju „File“, sa leve strane prikazuje se prozor sa nedavno otvorenim lekcijama:<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.18.1.jpg" alt="Slika 3.18.1" width="550" height="500" class="zoom">
                            <figcaption><i>Slika 3.18.1 Nedavno tvorene lekcije</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Upotreba spellcheck funkcije") {
                    document.getElementById('main-heading').textContent = "Upotreba spellcheck funkcije";
                    document.getElementById('content').innerHTML = `
                        <p>Nova komponenta ima aktivni spellcheck koji konstantno radi. Pokreće se tako što se levim klikom miša klikne bilo gde u okviru TextBox-a na slajdu, te se nakon toga sve nepravilno napisane reči u okviru Textbox-a podvuku crvenom bojom. Desnim klikom bilo gde u okviru TextBox-a otvara se novi web meni koji nam daje standardne web opcije prikazane na sledećoj slici (Slika 3.19.1). Potrebno je izabrati jezik u meniju i spellcheck će biti pokrenut.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.19.1.jpg" alt="Slika 3.19.1" width="799" height="500" class="zoom">
                            <figcaption><i>Slika 3.19.1 Opcija u okviru menija<br></br></i></figcaption>
                        </figure>
                        <p>Klikom na reč koja je podvučena crvenom bojom, otvara se meni gde je ponuđena reč koja je ispravna i koju je moguće odabrati. (Slika 3.19.2)<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.19.2.jpg" alt="Slika 3.19.2" width="799" height="500" class="zoom">
                            <figcaption><i>Slika 3.19.2 Odabir pravilno napisanih reči</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Mdita meni") {
                    document.getElementById('main-heading').textContent = "Mdita meni";
                    document.getElementById('content').innerHTML = `
                        <p>Budući da sada postoje dva menija vezana za TextBox, ukoliko je potrebno pristupiti starom meniju radi manipulisanja mdita kontrole (pomeranje položaja TextBox-a na slajdu, kopiranje, brisanje), potrebno je desnim klikom miša kliknuti direktno na ikonicu u gornjem desnom uglu koja služi za pomeranje TextBox-a (Slika 3.19.3). Ikonica će postati vidljiva kada je miš postavljen na TextBox.<br></br></p>
                        <figure>
                            <img src="Slike/Slika3.19.3.jpg" alt="Slika 3.19.3" width="799" height="500" class="zoom">
                            <figcaption><i>Slika 3.19.3 Prikaz menija desnim klikom na ikonicu u gornjem desnom uglu TextBox-a</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Dodatne napomene") {
                    document.getElementById('main-heading').textContent = "Dodatne napomene";
                    document.getElementById('content').innerHTML = `
                        <p>Ukoliko se pri čuvanju identifikuje problem sa šifrom predmeta ili školskom godinom, dovoljno je kliknuti “Update project” kada se pojavi forma I greška će automatski biti ispravljena. Ukoliko se javi greška pri učitavanju lekcije, lekciju ne čuvati, ugasiti editor, zipovati folder I poslati na popravku. <br></br></p>
                        <figure>
                            <img src="Slike/Slika3.20.1.jpg" alt="Slika 3.20.1" width="599" height="200" class="zoom">
                            <figcaption><i>Slika 3.20.1 Prikaz obaveštenja da se javila greška</i></figcaption>
                        </figure>
                    `;
                }else if (content === "Separator (OU) slajd") {
                    document.getElementById('main-heading').textContent = "Separator (OU) slajd";
                    document.getElementById('content').innerHTML = `
                        <p>Na separator (OU) slajdu je potrebno uneti je potrebno uneti tražene metapodatke. Obavezna polja koja je potrebno popuniti: <i> Naslov objekta učenja, Tip aktivnosti, Nivo, Trajanje i Ključne reči.</i><br></br></p>
                        <p>Po pitanju unosa ostalih podataka Tok rada je sledeći:</p>
                        <ul>
                            <li>Prvo birate fakultet</li>
                            <li>Na osnovu izabranog fakulteta dobijate korpuse/BOK</li>
                            <li>Na osnovu izabranog korpusa/BOK-a dobijate domene/poddomene (FIT) ili knowledge area (FAM/FDU)</li>
                            <li>Na osnovu izabranog domena ili knowledge area listaju se ishodi učenja (FIT) ili knowledge unit (FAM)</li>
                            <li>Na osnovu izabranog domena ili knowledge area listaju se kompetencije (FIT)</li>
                            <li>Na osnovu izabranih knowledge unit listaju se knowledge topics.</li>
                        </ul>
                        <p>Možete izabrati 1 ili vise ishoda učenja/ knowledge unit, kompetencija I knowledge topic. Imajte u vidu da zavisno od fakulteta, za neka polja ne postoje informacije. <br></br></p>
                        <p>Za nivo možete odabrati jednu od sledeće 4 opcije: bez nivoa, nivo 1, 2 i 3.<br></br></p>
                        <p>Tip aktivnosti - možete izabrati jednu od sledećih opcija:</p>
                        <ul>
                            <li>Predavanje</li>
                            <li>Predavanje: koncept</li>
                            <li>Predavanje: video</li>
                            <li>Predavanje: primer</li>
                            <li>Vežbe</li>
                            <li>Vežbe: pokazni primer</li>
                            <li>Vežbe: pokazni primer - zadatak za samostalni rad</li>
                            <li>Vežbe: individualne vežbe</li>
                            <li>Zadatak za vežbu kod kuće</li>
                            <li>Projekat</li>
                            <li>Seminarski rad</li>
                            <li>Studija slučaja</li>
                        </ul>
                        <br></br>
                        <figure>
                            <img src="Slike/Slika3.21.1.jpg" alt="Slika 3.21.1" width="598" height="500" class="zoom">
                            <figcaption><i>Slika 3.21.1 Separator slajd<br></br></i></figcaption>
                        </figure>
                    `;
                }
        // Close the sidebar only on mobile (if sidebar is open)
        if (isMobile) {
            sidebar.classList.remove('active');
        }
    });
});

// To handle resizing and adjust the behavior when switching between mobile and desktop
window.addEventListener('resize', function() {
    isMobile = window.matchMedia("(max-width: 768px)").matches; // Update mode when resizing

    // If switching from mobile to desktop, make sure sidebar doesn't close automatically
    if (!isMobile && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active'); // Close sidebar if on desktop, manually controlled
    }
});ssssss