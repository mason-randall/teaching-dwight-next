import Button from "../../../components/Button";
import Field from "../../../components/inputs/Field";

export default function LoginPage() {

    const user = {
        name: 'John Doe',
        age: 22
    }

    return (
        <>
            <h1>Login</h1>
            <Field placeholder="example@me.com" label="Email"/>
            <Field placeholder="*******" label="Password"/>
        </>
    )
}