import { Link } from "wouter";
import "../styles/GettingStarted.css";

function GettingStarted() {
  return (
    <main>
      <header>
        <h1>Pre-requisites before starting</h1>
        <h2>Step 1 — What you need before starting</h2>
        <h3>Make sure you have these tools installed on your computer:</h3>
        <ul>
          <li>
            <a href="https://git-scm.com/install/windows">
              <span>Git</span> — to download the project
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en/download">
              <span>Node.js (LTS)</span> — to run the frontend and scripts
            </a>
          </li>
        </ul>
        <small>
          💡 If you already use Node and Git, you can continue to the next step.
        </small>
      </header>

      <section>
        <article>
          <h2>Step 2 — Clone the repository</h2>
          <h3>You’ll first need a local copy of the project.</h3>
          <ul>
            <li>Open a terminal (Command Prompt, PowerShell, or Terminal)</li>
            <li>Run the following command:</li>
            <li>
              git clone https://github.com/FerOuvina/Github-LinkedIn-Publisher
            </li>
            <li>This will download the project files to your computer.</li>
          </ul>
        </article>

        <article>
          <h2>Step 3 — Enter the project folder</h2>
          <ul>
            <li>
              Once the repository is cloned, move into the project directory:
            </li>
            <li>cd Github-LinkedIn-Publisher</li>
            <li>Inside, you’ll find the frontend and backend folders.</li>
          </ul>
        </article>

        <article>
          <h2>Step 4 — Go to the frontend</h2>
          <ul>
            <li>Navigate to the frontend directory:</li>
            <li>cd frontend/github-linkedin-post</li>
            <li>This is where the web application lives.</li>
          </ul>
        </article>

        <article>
          <h2>Step 5 — Install dependencies</h2>
          <ul>
            <li>Before running the app, install all required packages:</li>
            <li>npm install</li>
            <li>This may take a few moments the first time.</li>
            <li>
              <blockquote>
                📦 This step downloads everything the frontend needs to work.
              </blockquote>
            </li>
          </ul>
        </article>

        <article>
          <h2>Step 6 — Start the development server</h2>
          <ul>
            <li>Now you’re ready to run the project locally:</li>
            <li>npm run dev</li>
            <li>
              Once the command finishes, you’ll see a local URL in the terminal
              (usually):
            </li>
            <li>http://localhost:5173</li>
            <li>Open it in your browser to see the app running.</li>
          </ul>
        </article>

        <article>
          <h2>You’re all set 🎉</h2>
          <p>The frontend is now running on your local machine.</p>
          <p>You can start exploring the app or move on to backend setup.</p>
        </article>
      </section>

      <footer>
        <Link href="/">Previous step</Link>
        <Link href="/">Continue</Link>
      </footer>
    </main>
  );
}

export default GettingStarted;
