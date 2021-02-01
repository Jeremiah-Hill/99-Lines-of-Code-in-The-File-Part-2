document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button')
    let btnText = document.createTextNode('Sing!')
    button.appendChild(btnText);
    button.className = ('btn btn-outline-success')
    document.body.appendChild(button);


    function singSong() {
        let friends = [
            'Mike', 'Janet', 'Allen', 'Samson', 'Terrance'
        ];
        for (let f = 0; f < friends.length; f++) {
            let friendsDiv = document.createElement('div');
            friendsDiv.className = ('friends');
            let friendsHeader = document.createElement('h3');
            friendsHeader.innerText = friends[f] + (' ');
            document.body.appendChild(friendsDiv);
            let paragraph = document.getElementsByClassName('friends');
            paragraph[f].appendChild(friendsHeader);
            for (let j = 99; j >= 1; j--) {
                var song = document.createElement('p')
                song.className = ('justify-content-md-center')
                if (j === 2) {
                    song.innerText = (" 2 lines of code in the file, 2 lines of code; " + friends[f] + " strikes one out, clears it all out, 1 line of code in the file. ");
                } else if (j === 1) {
                    song.innerText = (" 1 line of code in the file, 1 line of code; " + friends[f] + " strikes one out, clears it all out, no more lines of code in the file. ");
                } else {
                    song.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friends[f] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file. ");
                }
                paragraph[f].appendChild(song)
            }
        }
    }

    button.addEventListener('click', function() {
        singSong();
    })
})