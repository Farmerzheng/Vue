export const singer = state =>state.singer

	// fullScreen:false,
	// playing:false,
	// playlist:[],
	// sequenceList:[],
	// mode:playMode.sequence,
	// currentIndex:-1

export const fullScreen = state => state.fullScreen

export const playing = state => state.playing

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) =>{
	return state.playlist[state.currentIndex]||{}
}	