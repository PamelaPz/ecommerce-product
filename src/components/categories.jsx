import close from "../assets/images/icon-close.svg"

function Categories(props) {
    return (
        <ul className={props.class}>
            <li><img src={close} alt="close" /></li>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}

export default Categories;