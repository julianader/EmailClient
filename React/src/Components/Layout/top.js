import image from "../../Images/18.png";

function Top(props) {
    return (
        <div>
            <h1>
                A new email client <br /> designed to keep you <br /> calm and focused
            </h1>
            <img className="img" src={image} alt="working img on laptop" />
        </div>
    );
}

export default Top;
