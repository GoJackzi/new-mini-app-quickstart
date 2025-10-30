'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}>
          Cubey
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.9,
        }}>
          Your AI Ad Companion
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}>
          Welcome to your mini-app! This is a quickstart template based on Base MiniKit.
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
        }}>
          <p style={{ marginBottom: '1rem' }}>
            Get started by customizing this page and adding your features.
          </p>
        </div>
      </div>
    </main>
  )
}

