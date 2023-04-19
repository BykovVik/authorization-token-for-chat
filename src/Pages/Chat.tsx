import { useEffect} from "react";

type Props = {
    changeState: Function
}

function ChatBoard(props:Props) {

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.clear()
            props.changeState(false)
        }, 300000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="Alert-box">
            <h1>This is chat</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores non eos quaerat unde est laborum dolore ad eaque officia! Totam quia iure aut tempore obcaecati reprehenderit, consequatur fugit ut.</p>
        </div>
    )
}

export default ChatBoard