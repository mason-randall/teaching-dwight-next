export default function Field(props: {
    label?: string,
    placeholder?: string,
}) {
    return (
        <>
            <p>{props.label}</p>
            <input placeholder={props.placeholder} aria-label={props.label}/>
        </>
    )
}