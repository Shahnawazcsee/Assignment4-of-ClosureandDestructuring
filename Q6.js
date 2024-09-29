function createPlaylist(playlistName) {
    const songs = []; // Private array to store songs

    return {
        addSong: function(songName, artist) {
            songs.push({ songName, artist }); // Add the song to the playlist
            console.log(`Added "${songName}" by ${artist} to "${playlistName}".`);
        },
        listSongs: function() {
            if (songs.length === 0) {
                console.log(`"${playlistName}" is empty.`);
            } else {
                console.log(`Songs in "${playlistName}":`);
                songs.forEach((song, index) => {
                    console.log(`${index + 1}. "${song.songName}" by ${song.artist}`);
                });
            }
        }
    };
}

// Example usage:

// Create a new playlist
const myPlaylist = createPlaylist('My Favorite Songs');

// Add songs to the playlist
myPlaylist.addSong('Shape of You', 'Ed Sheeran'); 
// Added "Shape of You" by Ed Sheeran to "My Favorite Songs."
myPlaylist.addSong('Blinding Lights', 'The Weeknd'); 
// Added "Blinding Lights" by The Weeknd to "My Favorite Songs."
myPlaylist.addSong('Watermelon Sugar', 'Harry Styles'); 
// Added "Watermelon Sugar" by Harry Styles to "My Favorite Songs."

// List songs in the playlist
myPlaylist.listSongs(); 
// Songs in "My Favorite Songs":
// 1. "Shape of You" by Ed Sheeran
// 2. "Blinding Lights" by The Weeknd
// 3. "Watermelon Sugar" by Harry Styles
