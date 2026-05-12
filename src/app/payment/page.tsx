export default function Payment() {
  const plans = [
    { name: 'Basic', price: '$99', period: 'month', features: ['2 Subjects', 'Weekly Sessions', 'Basic Study Materials', 'Email Support'] },
    { name: 'Premium', price: '$199', period: 'month', features: ['5 Subjects', 'Daily Sessions', 'Advanced Study Materials', '24/7 Support', '1-on-1 Mentorship'], recommended: true },
    { name: 'Elite', price: '$299', period: 'month', features: ['All Subjects', 'Unlimited Sessions', 'Personalized Curriculum', 'Priority Support', 'Exam Prep Bundle'] },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Investment in Future</h1>
        <p className="section-subtitle">Choose the plan that best fits your academic goals. All plans include a 7-day trial period.</p>

        {/* Pricing Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem',
          marginBottom: '5rem'
        }}>
          {plans.map((plan, index) => (
            <div key={index} className="card" style={{ 
              position: 'relative', 
              border: plan.recommended ? '2px solid var(--secondary)' : '1px solid var(--border)',
              transform: plan.recommended ? 'scale(1.05)' : 'none',
              zIndex: plan.recommended ? 10 : 1
            }}>
              {plan.recommended && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  backgroundColor: 'var(--secondary)', 
                  color: 'var(--primary)', 
                  padding: '0.25rem 1rem', 
                  borderRadius: '20px', 
                  fontSize: '0.8rem', 
                  fontWeight: '700' 
                }}>
                  RECOMMENDED
                </div>
              )}
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                <span style={{ color: 'var(--text-muted)' }}>/{plan.period}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.95rem' }}>
                    <span style={{ color: '#10b981' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Secure Payment UI */}
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#f8fafc' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Secure Checkout</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem', filter: 'grayscale(100%) opacity(0.5)' }}>💳 VISA</span>
              <span style={{ fontSize: '1.5rem', filter: 'grayscale(100%) opacity(0.5)' }}>💳 MASTERCARD</span>
              <span style={{ fontSize: '1.5rem', filter: 'grayscale(100%) opacity(0.5)' }}>💳 AMEX</span>
            </div>
          </div>

          <form style={{ display: 'grid', gap: '2rem' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Cardholder Name</label>
                <input type="text" placeholder="John Doe" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Card Number</label>
                <div style={{ position: 'relative' }}>
                  <input type="text" placeholder="**** **** **** ****" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)', width: '100%' }} />
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>🔒</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>CVV</label>
                  <input type="text" placeholder="***" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }} />
                </div>
              </div>
              <div style={{ 
                backgroundColor: '#ecfdf5', 
                border: '1px solid #10b981', 
                padding: '1rem', 
                borderRadius: '8px', 
                display: 'flex', 
                gap: '1rem', 
                alignItems: 'center',
                color: '#065f46',
                fontSize: '0.9rem'
              }}>
                <span>🛡️</span>
                Your payment information is encrypted and securely processed.
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem', fontSize: '1.1rem' }}>
                Complete Secure Payment
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
