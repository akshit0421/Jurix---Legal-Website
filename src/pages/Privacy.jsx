import './PageContent.css';

export default function Privacy() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="section-label">Legal</div>
          <h1>Privacy <em>Policy</em></h1>
          <p>JuriX is built with privacy at its core. This policy explains what data we collect, why we collect it, and how it is protected.</p>
        </div>
      </div>
      <div className="content-wrap">
        <div className="intro-box">
          This Privacy Policy applies to the JuriX iOS application and associated services operated by JuriX ("we", "us", "our"). By using the app, you agree to the practices described here. JuriX does not involve third-party services in its core legal workflow — all data remains within the platform.
        </div>

        <div className="ps" id="s1">
          <h3>📁 1. Information We Collect</h3>
          <p><strong>A. Client Account Information</strong></p>
          <ul>
            <li>Full name, email address, phone number</li>
            <li>Password (stored hashed — never readable)</li>
            <li>Location data (only when permission granted, used for lawyer discovery)</li>
          </ul>
          <p><strong>B. Lawyer Professional Information</strong></p>
          <ul>
            <li>Bar Council registration ID and Bar ID photo (for verification)</li>
            <li>Practice areas, years of experience, professional bio, education details, certificates (optional), achievements (optional)</li>
          </ul>
          <p><strong>C. Case &amp; Legal Data</strong></p>
          <ul>
            <li>Enquiry details submitted by clients</li>
            <li>Chat messages in In Discussion mode (secure in-chat — inaccessible to JuriX)</li>
            <li>Secured agreement forms and documents (accessible only to client and connected lawyer)</li>
            <li>Case status and progress records</li>
          </ul>
          <p><strong>D. Court &amp; Calendar Data</strong></p>
          <ul>
            <li>Tracked case numbers and hearing preferences</li>
            <li>Meeting dates and calendar sync preferences (if Calendar Sync is enabled)</li>
          </ul>
          <p><strong>E. Device &amp; Technical Data</strong></p>
          <ul>
            <li>Device model, iOS version, app version, crash logs</li>
          </ul>
        </div>

        <div className="ps" id="s2">
          <h3>⚙️ 2. How We Use Your Information</h3>
          <ul>
            <li><strong>App Functionality:</strong> Running accounts, matching clients with lawyers, processing enquiries, facilitating chats and agreement signing.</li>
            <li><strong>Lawyer Verification:</strong> Verifying Bar Council credentials via API or manual review before activation.</li>
            <li><strong>Location Services:</strong> Using location data solely to display region-relevant lawyers on the home screen.</li>
            <li><strong>Court Data Services:</strong> Fetching real-time hearings and daily cause lists from official court for the lawyer dashboard.</li>
            <li><strong>Calendar Sync:</strong> Syncing meetings and hearing dates to your iPhone Calendar when you enable this feature.</li>
            <li><strong>Push Notifications:</strong> Enquiry responses, case status changes, hearing reminders, and meeting schedules.</li>
            <li><strong>Support &amp; Improvements:</strong> Responding to support requests and improving features using anonymised analytics.</li>
            <li><strong>Legal Compliance:</strong> Complying with applicable Indian laws and lawful authority requests.</li>
          </ul>
          <div className="hbox">We do <strong>not</strong> use your data for advertising, profiling, or automated legal decision-making.</div>
        </div>

        <div className="ps" id="s3">
          <h3>🤝 3. Data Sharing</h3>
          <p>JuriX does <strong>not sell, rent, or share your personal data</strong> with third parties for commercial purposes.</p>
          <ul>
            <li><strong>Client ↔ Lawyer:</strong> Enquiry details shared only with the specific lawyer you contact. Encrypted chat and documents accessible only to both parties.</li>
            <li><strong>Official Court APIs:</strong> No personal user data sent — only queries to retrieve public court data.</li>
            <li><strong>Legal Requirements:</strong> Disclosure when required by law or to protect user safety.</li>
          </ul>
        </div>

        <div className="ps" id="s4">
          <h3>🔒 4. Data Storage &amp; Protection</h3>
          <ul>
            <li><strong>Secured Chat:</strong> In Discussion messages encrypted end-to-end — even JuriX cannot read them.</li>
            <li><strong>Secured Document:</strong> Agreement forms stored with encryption, accessible only to the respective client and lawyer.</li>
            <li><strong>Passwords:</strong> Stored as irreversible cryptographic hashes.</li>
          </ul>
        </div>

        <div className="ps" id="s5">
          <h3>✅ 5. Your Rights</h3>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information.</li>
            <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
          </ul>
        </div>

        <div className="ps" id="s7">
          <h3>👤 6. Children's Privacy</h3>
          <p>JuriX is intended for users aged <strong>18 and above.</strong> We do not knowingly collect data from children under 18.</p>
        </div>

        <div className="ps" id="s8">
          <h3>🔄 7. Changes to This Policy</h3>
          <p>We may update this policy as the app evolves. Significant changes will be communicated via in-app notification or email. Continued use constitutes acceptance of the updated policy.</p>
        </div>
      </div>
    </main>
  );
}
