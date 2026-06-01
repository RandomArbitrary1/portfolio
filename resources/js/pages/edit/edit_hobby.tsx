import { Form, usePage } from '@inertiajs/react';
import { toast, Toaster } from 'sonner';
import Header from '@/components/header';
import { update } from '@/routes/hobby';

export default function Edit(props) {
    const hobby = props.hobby;
    return (
        <>
            <Header />
            <h1>INFORMATIE</h1>
            <Form
                action={update(hobby.id)}
                onSuccess={() => {
                    toast('Bericht bewerkt');
                }}
            >
                <input
                    type="text"
                    name="hobby_name"
                    placeholder="Hobby naam"
                    defaultValue={hobby.hobby_name}
                />
                <input
                    type="text"
                    name="person_id"
                    placeholder="De ID van de persoon"
                    defaultValue={hobby.person_id}
                />
                <br />
                <br />
                <input type="submit" value="Versturen" />
            </Form>
        </>
    );
}
