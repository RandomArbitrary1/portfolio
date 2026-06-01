import { Form, usePage } from '@inertiajs/react';
import { toast, Toaster } from 'sonner';
import Header from '@/components/header';
import { update } from '@/routes/contact';


export default function Edit(props) {
    const contact = props.contact;
    return (
        <>
            <Header />
            <h1>INFORMATIE</h1>
            <Form
                action={update(contact.id)}
                onSuccess={() => {
                    toast('Bericht bewerkt');
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Jouw Naam"
                    defaultValue={contact.name}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Jouw Email"
                    defaultValue={contact.email}
                />
                <br />
                <textarea name="message" placeholder="Jouw Bericht">
                    {contact.message}
                </textarea>
                <br />
                <input type="submit" value="Versturen" />
            </Form>
        </>
    );
}
