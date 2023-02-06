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

interface SpotifyAccount {
	name?: string
	id: string
	uri: string
	externalUrl: string
}

interface SpotifyTrack {
	album?: SpotifyAlbum
	artists: SpotifyArtist[]
	discNumber?: number
	trackNumber: number
	durationMs: number
	explicit: boolean
	isLocal: boolean
	name: string
	id: string
	uri: string
	externalUrl: string
}

interface SpotifyThumbnail {
	height: number
	width: number
	url: string
}

interface SpotifyAlbum {
	albumType: string
	name: string
	artists: SpotifyArtist[]
	releaseDate: Date
	tracks?: SpotifyTrack[]
	totalTracks: number
	coverArtwork: SpotifyThumbnail[]
	label?: string
	id: string
	uri: string
	externalUrl: string
}

interface SpotifyPlaylistTrack extends SpotifyTrack {
	addedAt: Date
	addedBy: SpotifyAccount
}

interface SpotifyPlaylist {
	collaborative: boolean
	onProfile: boolean
	description: string
	coverArtwork: SpotifyThumbnail[]
	name: string
	owner: SpotifyAccount
	tracks?: SpotifyPlaylistTrack[]
	totalTracks: number
	id: string
	uri: string
	externalUrl: string
}