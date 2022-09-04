export default function WindowButtonContainer() {
    return (
        <div className="window-button-container flex flex-row">
            <WindowButton type="close" />
            <WindowButton type="minimize" />
            <WindowButton type="expand" />
        </div>
    );
};

function WindowButton({ type }) {
    return (
        <button className={`window-button window-button-${type}`} />
    );
};
