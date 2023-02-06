interface HandshakeOptions {
	product?: number
	productFlags?: number[]
	platform?: number
}

interface LibrespotSessionOptions {
	deviceId: string
	address?: string
	port?: number
	handshakeOptions?: HandshakeOptions
}

interface LibrespotOptions {
	clientId?: string
	deviceId?: string
	scopes?: string[]
	sessionOptions?: LibrespotSessionOptions
}

interface LibrespotCredentials {
	username: string
	password: string
}

interface SpotifyArtist {
	name: string
	id: string
	uri: string
	externalUrl: string
}

interface SpotifyTrack {
	artists: SpotifyArtist[]
	discNumber?: number
	trackNumber: number
	durationMs: number
	explicit: boolean
	id: string
	uri: string
	isLocal: boolean
	name: string
	externalUrl: string
}