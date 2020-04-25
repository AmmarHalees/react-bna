import React,{memo} from 'react';
import './style.css';
import { Button } from '../Button';

const ImageControls = ({setWidth, chosen }) => {

    return (

        <div className="button_group_container">

            <Button background={chosen === "0" ? "rgba(0, 0, 0, 0.64)" : "none"} onClick={()=>setWidth("0")}>Before</Button>

            <Button background={chosen === "50" ? "rgba(0, 0, 0, 0.64)" : "none"} onClick={()=>setWidth("50")}>Comparison</Button>

            <Button background={chosen === "100" ? "rgba(0, 0, 0, 0.64)" : "none"} onClick={()=>setWidth("100")}>After</Button>

        </div>

    );
}

export default memo(ImageControls);