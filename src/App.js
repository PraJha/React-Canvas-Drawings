import React from 'react';
import HealthBar from './containers/healthbar'

function App() {
    const style = {
        width: '100%',
        height: '100%'
    };
    return (
        <div style={style}>
            <HealthBar />
        </div>
    );
}

export default App;
