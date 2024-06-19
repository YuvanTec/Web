import Header from './header';
import Footer from './footer';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <Header />
      </div>

      <div className="flex flex-col items-center p-6 min-w-[320px] min-h-[100vh] m-0">
        <div className="max-w-2xl w-full text-left">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p className="mb-6">
            <span className="font-semibold">Instituto Tecnológico de Estudios Superiores Monterrey (ITESM)</span><br />
            Monterrey, N.L<br />
            B.S. in Computer Science<br />
            August 2021 - June 2025<br />
            Relevant Coursework:
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Programming of Data Structures and Fundamental Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Implementation of the Internet of Things</li>
              <li>Construction of Software and Decision Making</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <p className="mb-6">
            <span className="font-semibold">Nokia Telecommunication</span><br />
            Remote Telecom Intern<br />
            July 2020 – August 2020<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Managed global communication systems at Nokia, ensuring seamless worldwide operations.</li>
              <li>Initiated innovative online telecom training, resulting in cost savings and improved network efficiency.</li>
              <li>Collaborated with cross-functional teams to enhance international communication and operational excellence.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mb-2">Major Projects</h2>
          <p className="mb-6">
            <span className="font-semibold">IoT based Air Conditioner Regulator</span><br />
            August 2022 – November 2022<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Optimized air conditioning systems through energy-saving sensor technologies.</li>
              <li>Designed and implemented a robust API system transferring real-time sensor data to a MySQL database.</li>
              <li>Implemented sensor-based conditions and visualized data through an IoT dashboard.</li>
            </ul>
          </p>

          <p className="mb-6">
            <span className="font-semibold">Educational Quiz Maker Web Application</span><br />
            April 2023 – June 2023<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Orchestrated the end-to-end development of an educational web application.</li>
              <li>Implemented a database connection using C# and ASP.NET for seamless data management.</li>
              <li>Designed a structured SQL database schema for secure storage of student performance data.</li>
            </ul>
          </p>

          <p className="mb-6">
            <span className="font-semibold">Multi-Agent Simulation Project</span><br />
            August 2023 – September 2023<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Developed a multi-agent simulation using Python's Mesa framework.</li>
              <li>Designed visual representations using Unity and collected data into a JSON file.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mb-2">Leadership</h2>
          <p className="mb-6">
            <span className="font-semibold">President, Computer Science in Technology Alumni Society</span><br />
            Present<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Organized conferences and workshops for students.</li>
              <li>Conducted CV building and interview skills workshops benefiting over 2000+ students.</li>
            </ul>
          </p>

          <p className="mb-6">
            <span className="font-semibold">Ambassador, Instituto Tecnológico de Estudios Superiores Monterrey (ITESM)</span><br />
            Present<br />
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>Represented the institute as an ambassador in Monterrey.</li>
              <li>Provided campus tours and addressed visitor queries.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <h3 className="text-xl font-medium mb-2">Programming Languages</h3>
          <p className="mb-6">
            Proficiency: C++, Python<br />
            Intermediate: Java, C#<br />
            Basic: JavaScript, Racket, Go, R, Matlab
          </p>

          <h3 className="text-xl font-medium mb-2">Technologies</h3>
          <p className="mb-6">
            HTML, CSS, Bootstrap<br />
            ASP.NET CORE, SQL<br />
            Github, Unity, Figma
          </p>

          <h3 className="text-xl font-medium mb-2">Languages</h3>
          <p>
            Kannada, Tamil, Hindi (Native)<br />
            English, Spanish (C2)<br />
            German (B2)
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Footer />
      </div>

    </>
  );
}

export default App;
