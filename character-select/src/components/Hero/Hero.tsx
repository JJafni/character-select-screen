import { HyperTextDemo } from "./HyperText";

const Hero = () => {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-[#102a63] to-[#000000]"
            style={{
                margin: '0',
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <HyperTextDemo />
            <h1>ola w8</h1>
        </div>
    );
};

export { Hero };
