import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button, NextUIProvider} from "@nextui-org/react";
import Maps from './Maps';

const App = () => {
    return(
        <Maps/>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
