import {SyntheticEvent, useState} from "react";
import {trpc} from "../../utils/trpc";
import {router} from "next/client";
export default function SecretStep(user: any) {

    const [secret, setSecret] = useState('');
    const RegisterBridgeMutation = trpc.auth.RegisterBridgeUser.useMutation();
    const handleSecret = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        RegisterBridgeMutation.mutateAsync({
            email: user.user.user.email,
            code: secret,
        }).then((res) => {
            router.push('/home')
        })
    }

    return (
        <form onSubmit={handleSecret}>
            <input type="number" placeholder="Secret Code" value={secret} onChange={(e) => setSecret(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}



