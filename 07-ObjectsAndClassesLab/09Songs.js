function solve (input) {

    let songArr = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
for (let index = 1; index < input.length -1; index++) {

    let songData = input[index].split('_');
        let typeList, name, time;
        [typeList, name, time] = [songData[0], songData[1], songData[2]];
        songArr.push(new Song(typeList, name, time));
    
        
}
if (input[input.length-1] != 'all') {
for (const songs of songArr) {
    if (songs.typeList === input[input.length-1]) {
        console.log(songs.name);
    }

}
} else {
    for (const songs of songArr) {
        
            console.log(songs.name);
        
    
    }
}        
    

}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    
    );