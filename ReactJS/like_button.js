
const e = React.createElement;

function LikeButton(){
    //display like button
    return e(
        'button',
        {
            onClick: () => alert('Success')
        },
        'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);