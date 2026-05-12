'use client';

import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage(`✅ Success: ${result.filename}`);
        setFile(null);
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage('❌ Failed to upload');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card" style={{ marginTop: '2rem', border: '2px dashed var(--border)', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Submit Documents</h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Upload your previous results or ID proof (PDF, JPG, PNG)
      </p>
      
      <form onSubmit={handleUpload}>
        <div style={{ marginBottom: '1.5rem' }}>
          <input 
            type="file" 
            onChange={handleFileChange} 
            style={{ 
              display: 'block', 
              width: '100%', 
              padding: '1rem', 
              border: '1px solid var(--border)', 
              borderRadius: '8px',
              cursor: 'pointer'
            }} 
          />
        </div>
        
        {file && (
          <p style={{ fontSize: '0.8rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: '600' }}>
            Selected: {file.name}
          </p>
        )}

        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={!file || uploading}
          style={{ width: '100%', justifyContent: 'center', opacity: !file || uploading ? 0.5 : 1 }}
        >
          {uploading ? 'Uploading...' : 'Upload Document'}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: message.includes('Success') ? '#10b981' : '#ef4444' }}>
          {message}
        </p>
      )}
    </div>
  );
}
