// elements
const a = document.getElementById("syllabus");
const b = document.getElementById("demoClass");
const c = document.getElementById("placementInfo");
const cnt = document.getElementById("webdevlopmentCardBody");

function clearActive() {
  a.classList.remove("active");
  b.classList.remove("active");
  c.classList.remove("active");
}

a.addEventListener("click", () => {
  cnt.innerHTML = `
    <h5>
      <div class="card-body" id="webdevlopmentCardBody">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Computer Hardwares
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>Digital Logic Design – Study of logic gates, combinational and sequential circuits.</li>
                  <li>Computer Organization – Understanding system components like ALU, memory, and instruction execution.</li>
                  <li>Computer Architecture – Deep dive into CPU design, pipelining, memory hierarchy, and instruction sets.</li>
                  <li>Microprocessors and Microcontrollers – Study of Intel 8085, 8086, 8051, and other processors/controllers.</li>
                  <li>Embedded Systems – Integration of software and hardware in real-time applications like IoT devices.</li>
                  <li>Electronics Devices and Circuits – Basics of semiconductors, diodes, transistors, and amplifier circuits.</li>
                  <li>Assembly Language Programming – Low-level programming using processor instruction sets.</li>
                  <li>VLSI Design – Introduction to designing integrated circuits and chip-level hardware.</li>
                  <li>Communication Systems – Study of signal transmission, modulation, and digital communication.</li>
                  <li>Power Electronics – Understanding of circuits that control and convert electrical power efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Computer Softwares
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>Programming Languages - Study of languages like C, C++, Java, Python, etc. Focuses on syntax, semantics, and coding logic.</li>
                  <li>Data Structures and Algorithms (DSA) - Efficient data organization and problem-solving techniques including stacks, queues, trees, graphs, sorting, and searching.</li>
                  <li>Operating Systems - Explains how software interacts with hardware, covering processes, memory management, and file systems.</li>
                  <li>Database Management Systems (DBMS) - Design, use, and management of databases. Learn SQL, normalization, indexing, and transactions.</li>
                  <li>Software Engineering - Covers software development life cycle (SDLC), Agile and Waterfall models, project management, and testing.</li>
                  <li>Computer Networks - Study of network protocols, OSI model, IP addressing, and network security basics.</li>
                  <li>Web Development - Covers front-end (HTML, CSS, JS) and back-end (Node.js, PHP, databases), building dynamic websites and apps.</li>
                  <li>Object-Oriented Programming (OOP) - Principles like encapsulation, inheritance, polymorphism using Java or C++.</li>
                  <li>Mobile App Development - Creating Android/iOS apps using tools like Android Studio, Flutter, or Swift.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                data-mdb-collapse-init
                class="accordion-button collapsed"
                type="button"
                data-mdb-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Core Subjects
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-mdb-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>Programming Fundamentals - Introduction to logic building and programming using languages like C or Python.</li>
                  <li>Data Structures and Algorithms - Efficient data organization and problem-solving methods.</li>
                  <li>Computer Networks - How computers communicate including protocols and network layers.</li>
                  <li>Operating Systems - Process management, memory allocation, and file systems.</li>
                  <li>Database Management Systems (DBMS) - Design, development, and management of databases using SQL and relational models.</li>
                  <li>Software Engineering - Principles of SDLC, Agile models, and project management.</li>
                  <li>Object-Oriented Programming (OOP) - Classes, inheritance, polymorphism using Java or C++.</li>
                  <li>Theory of Computation - Automata, grammars, and the mathematical foundation of computation.</li>
                  <li>Computer Architecture - Internal working of computers including CPU, memory, and instruction cycles.</li>
                  <li>Web Technologies - Basics of HTML, CSS, JavaScript, and dynamic website development.</li>
                  <li>Artificial Intelligence & Machine Learning - Introduction to intelligent systems and learning algorithms.</li>
                  <li>Cybersecurity - Protecting software systems from threats and ensuring secure data flow.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </h5>
  `;
  clearActive();
  a.classList.add("active");
});

b.addEventListener("click", () => {
  cnt.innerHTML = `
    <h5>
      <div class="card text-center">
        <div class="card-header">Upcoming Program</div>
        <div class="card-body">
          <p class="card-title">Join us On upcoming Monday (09-05-25)</p>
          <button
            type="button"
            class="btn btn-link btn-rounded btn-sm fw-bold"
            data-mdb-ripple-color="dark"
          >
            https://zoom.us/j/1234567890?pwd=ABCdEfGhIjKlMnOpQrStUvWxYz
          </button>
          <a href="#" class="btn btn-primary" data-mdb-ripple-init>Join Now !</a>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </h5>
  `;
  clearActive();
  b.classList.add("active");
});

c.addEventListener("click", () => {
  cnt.innerHTML = `
    <p>
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Position</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style="width: 45px; height: 45px"
                  class="rounded-circle"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">Aarav Mehra</p>
                  <p class="text-muted mb-0">aarav.m@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Software engineer</p>
              <p class="text-muted mb-0">IT department</p>
            </td>
            <td>Senior</td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded">
                20LPA
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  class="rounded-circle"
                  alt=""
                  style="width: 45px; height: 45px"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">AR Ray</p>
                  <p class="text-muted mb-0">ar.ray@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Consultant</p>
              <p class="text-muted mb-0">Finance</p>
            </td>
            <td>Junior</td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                17.5LPA
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                  class="rounded-circle"
                  alt=""
                  style="width: 45px; height: 45px"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">Kate Hunington</p>
                  <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">Designer</p>
              <p class="text-muted mb-0">UI/UX</p>
            </td>
            <td>Senior</td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                15LPA
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </p>
  `;
  clearActive();
  c.classList.add("active");
});

a.click();
