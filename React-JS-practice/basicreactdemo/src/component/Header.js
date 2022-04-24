export default function Header(props)
{
    return(
        <div>
            <marquee>
                <h5>
                    Welcome To {props.compName}: Country: {props.countryName}
                </h5>
                <hr color="red" size="3"/>
            </marquee>
        </div>
    )
}