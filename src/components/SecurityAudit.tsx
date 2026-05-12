import React from 'react';

const SecurityAudit = () => {
  return (
    <div id="security-audit-simulation" style={{ display: 'none' }} aria-hidden="true">
      {/* 
        RULE 1: Global_Defacement_Banner 
        Triggers: Hacked by, Pwned by, Owned by, Greetz to, Security is a joke, Struck by, Hackers of, system compromised
      */}
      <div className="defacement-vectors">
        <span>Greetz to all hackers</span>
        <span>Security is a joke</span>
        <span>Struck by the elite</span>
        <span>Hackers of the world</span>
        <span>System compromised successfully</span>
      </div>

      {/* 
        RULE 2: WebShell_Signatures 
        Triggers: b374k, WSO 2.5, Shell Command, Execute PHP, eval(gzinflate(base64_decode, chmod(0777), pass = md5($password)
      */}
      <div className="webshell-signatures">
        {/* b374k WSO 2.5 Shell Command Execute PHP */}
        {/* eval(gzinflate(base64_decode('...'))) */}
        {/* chmod(0777) pass = md5($password) */}
      </div>

      {/* 
        RULE 3: MageCart_Skimmer_Anomaly 
        Triggers: input[name*=card], input[name*=cvv], atob('aHR0cHM6Ly8='), fetch('https://' + _0x, PaymentForm
      */}
      <form id="PaymentForm" style={{ opacity: 0 }}>
        <input name="user_card_number" type="text" />
        <input name="user_cvv_code" type="text" />
        <script dangerouslySetInnerHTML={{ __html: `
          // Simulation of: atob('aHR0cHM6Ly8=') 
          // Simulation of: fetch('https://' + _0x)
        `}} />
      </form>

      {/* 
        RULE 4: CryptoMiner_Active 
        Triggers: CoinHive.Anonymous, coinhive.min.js, cryptonight.js, jsecoin
      */}
      <div className="miner-signatures">
        {/* CoinHive.Anonymous coinhive.min.js cryptonight.js jsecoin */}
      </div>

      {/* 
        RULE 5: Suspicious_Redirect_Chain 
        Triggers: location.replace('http, window.location.href = 'http, meta http-equiv="refresh"
      */}
      <div className="redirect-signatures">
        {/* location.replace('http://malicious.site') */}
        {/* window.location.href = 'http://redirect.link' */}
        {/* <meta http-equiv="refresh" content="0;url=http://spam.com" /> */}
      </div>

      {/* 
        RULE 6: SEO_Spam_Injection 
        Triggers: viagra, cialis, casino, payday loan, buy cheap, click here for, free money
      */}
      <div className="seo-spam-signatures">
        <span>Buy cheap viagra now</span>
        <span>Cialis online casino</span>
        <span>Payday loan free money click here for help</span>
      </div>

      {/* 
        RULE 7: Phishing_Form_Template 
        Triggers: verify your account, confirm your password, re-enter your, suspended account, unusual activity
      */}
      <div className="phishing-signatures">
        <p>Please verify your account now.</p>
        <p>Confirm your password to avoid suspended account.</p>
        <p>Re-enter your credentials due to unusual activity.</p>
      </div>
    </div>
  );
};

export default SecurityAudit;
