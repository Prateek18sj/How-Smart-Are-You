const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');

no_btn.addEventListener('click', () =>{
    //when we first click the btn we want to add a position of absolute to the button.
    no_btn.style.position = 'absolute';

    //now we want to add a random position the next time it is clicked, we can do it by the use of random.
    //We are multiplying with the container width because we only want the no_btn to get a random position only inside the container.

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    //we can see how sometimes the button getes outside of the container
    //to prevent that we'll have to do this
    if(random_left >= container.clientWidth / 2){
        no_btn.style.left = `${random_left - no_btn.clientWidth}px`;
    }

    if(random_top >= container.clientHeight / 2){
        no_btn.style.top = `${random_top - no_btn.clientHeight}px`;
    }
    //what we're doing is if the random is greater then the container's width/2 then we want to add that random left - btn's width
});

//no_btn is done.

yes_btn.addEventListener('click', () =>{
    container.innerHTML = `<h2>
                            I knew it vaiii!! <br>
                            looooool.🤣🤣🤣🤣<br>
                            Finalllly maaan gyee aappppp. </h2>`
})