import '../styles/Home.css'

function Home() {
  return (
    <main>
      <header>
        <h1>🚀 GitHub → LinkedIn Automation Dashboard</h1>
        <h2>
          Automate professional LinkedIn posts based on your GitHub activity.
        </h2>
        <h3>
          This app analyzes your recent GitHub commits, generates a concise
          summary using AI, and publishes it to LinkedIn — all under your
          control.
        </h3>
      </header>

      <section>
        <article>
          <h2>🧠 How it works</h2>
          <ul>
            <li>You provide your own API credentials (GitHub, LinkedIn, AI)</li>
            <li>The app analyzes your recent GitHub commits</li>
            <li>An AI model generates a professional LinkedIn-ready summary</li>
            <li>You can preview, post manually, or automate daily posting</li>
          </ul>
        </article>

        <article>
          <h2>🔐 Your data, your control</h2>
          <ul>
            <li>
              This app is <em>self-hosted</em>
            </li>
            <li>Your credentials are stored locally</li>
            <li>
              Nothing is sent to third-party servers (except the APIs you
              explicitly use)
            </li>
            <li>You can review every post before publishing</li>
          </ul>
        </article>
        <article>
          <h2>👨‍💻 Who this is for</h2>
          <ul>
            <li>Developers who want to stay visible on LinkedIn</li>
            <li>Engineers building in public</li>
            <li>Anyone who prefers automation without sacrificing control</li>
          </ul>
        </article>

        <article>
          <h2>⚠️ Important notes</h2>
          <ul>
            <li>This app is not affiliated with LinkedIn</li>
            <li>You must provide your own API credentials</li>
            <li>
              You are responsible for complying with LinkedIn’s terms of service
            </li>
          </ul>
        </article>
      </section>

      <footer>
        <h2>👉 Get started</h2>
        <h3>Click Continue to configure your credentials and preferences.</h3>
        <button type="button">Continue</button>
      </footer>
    </main>
  );
}

export default Home;
