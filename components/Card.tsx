export default function Card(props: {
    title: string,
}) {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}