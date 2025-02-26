'use client'
import Field from "../../../components/inputs/Field";
import {LoginUser} from "../../../utils/actions";

export default function LoginPage() {

    return (
        <form action={LoginUser}>
            <h1>Login</h1>
            <Field placeholder="example@me.com" label="Email" name="email"/>
            <Field placeholder="*******" label="Password" name="password"/>
            <button type="form">Submit</button>
        </form>
    )
}