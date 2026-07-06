const B2_AUTH_URL = 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account'

interface B2AuthResponse {
  authorizationToken: string
  apiUrl: string
  downloadUrl: string
  minimumPartSize: number
}

interface B2FileResponse {
  fileId: string
  fileName: string
  downloadUrl: string
}

let authCache: { token: string; apiUrl: string; expiresAt: number } | null = null

async function authorizeB2(): Promise<B2AuthResponse> {
  if (authCache && Date.now() < authCache.expiresAt) {
    return {
      authorizationToken: authCache.token,
      apiUrl: authCache.apiUrl,
      downloadUrl: '',
      minimumPartSize: 5000000,
    }
  }

  const keyId = process.env.B2_APPLICATION_KEY_ID
  const appKey = process.env.B2_APPLICATION_KEY

  if (!keyId || !appKey) {
    throw new Error('B2 credentials not configured')
  }

  const basicAuth = Buffer.from(`${keyId}:${appKey}`).toString('base64')

  const res = await fetch(B2_AUTH_URL, {
    headers: { Authorization: `Basic ${basicAuth}` },
  })

  if (!res.ok) throw new Error('B2 authorization failed')

  const data: B2AuthResponse & { authorizationToken: string } = await res.json()

  authCache = {
    token: data.authorizationToken,
    apiUrl: data.apiUrl,
    expiresAt: Date.now() + 3600000,
  }

  return data
}

export async function getB2DownloadUrl(fileName: string): Promise<string> {
  const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_URL
  if (imagesUrl) {
    return `${imagesUrl}/file/${process.env.B2_BUCKET_NAME}/${fileName}`
  }

  const auth = await authorizeB2()
  const bucketName = process.env.B2_BUCKET_NAME

  const res = await fetch(
    `${auth.apiUrl}/b2api/v2/b2_get_download_url`,
    {
      method: 'POST',
      headers: {
        Authorization: auth.authorizationToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName,
        bucketName,
      }),
    }
  )

  if (!res.ok) throw new Error('Failed to get download URL')

  const data: B2FileResponse = await res.json()
  return data.downloadUrl
}

export async function listB2Files(prefix?: string): Promise<string[]> {
  const auth = await authorizeB2()
  const bucketName = process.env.B2_BUCKET_NAME

  const res = await fetch(
    `${auth.apiUrl}/b2api/v2/b2_list_file_names`,
    {
      method: 'POST',
      headers: {
        Authorization: auth.authorizationToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bucketName,
        prefix: prefix || '',
        maxFileCount: 100,
      }),
    }
  )

  if (!res.ok) throw new Error('Failed to list files')

  const data = await res.json()
  return data.files?.map((f: { fileName: string }) => f.fileName) || []
}
