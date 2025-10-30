import { NextResponse } from 'next/server'
import { minikitConfig } from '@/minikit.config'

export async function GET() {
  // Generate the manifest from minikit config
  const manifest = {
    accountAssociation: minikitConfig.accountAssociation,
    miniapp: minikitConfig.miniapp,
  }

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

