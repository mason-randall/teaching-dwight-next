export default function Field(props: {
    label?: string,
    placeholder?: string,
    name?: string,
}) {
    return (
        <>
            <p>{props.label}</p>
            <input className="p-4 bg-white rounded-2xl" placeholder={props.placeholder} name={props.name}/>
        </>
    )
}