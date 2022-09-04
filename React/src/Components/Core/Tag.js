export const Tag = props => {
    return (
        <div className="tag">
            <span>{props.label}</span>
            <i className="material-icons" onClick={props.onRemove}>
                x
            </i>
        </div>
    );
};
