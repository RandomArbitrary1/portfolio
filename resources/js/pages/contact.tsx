import { Form, usePage } from '@inertiajs/react';
import { toast, Toaster } from 'sonner';
import Header from '@/components/header';
import { destroy, store, edit } from '@/routes/contact';


export default function Contact() {
    const contacts = usePage().props.contacts;
    const { auth } = usePage().props as any;
    return (
        <>
            <Toaster />
            <Header />
            <div className="flex flex-col items-center">
                <h1>Contact informatie:</h1> <br /> <br />
                <p>Telefoonnummer: 06-18852544</p> <br />
                <p>Email: Danilo.prakken@gmail.com</p> <br />
                <p>Note: Graag niet gebruiken om spam mee te sturen</p> <br />
                <h1>Contact Formulier v</h1> <br />
                <Form
                    action={store()}
                    onSuccess={() => {
                        toast('Bericht verzonden');
                    }}
                >
                    <input
                        className="bg-purple-950"
                        type="text"
                        name="name"
                        placeholder="Jouw Naam"
                    />
                    <br />
                    <br />
                    <input
                        className="bg-purple-950 "
                        type="email"
                        name="email"
                        placeholder="Jouw Email"
                    />
                    <br />
                    <br />
                    <textarea
                        className="bg-purple-950"
                        name="message"
                        placeholder="Jouw Bericht"
                    ></textarea>
                    <br />
                    <input
                        className="rounded-lg bg-green-600 p-2"
                        type="submit"
                        value="Versturen"
                    />
                </Form>
                <br />
                {auth.user && (
                    <div className="flex flex-wrap gap-3 p-2">
                        {contacts.map((contact) => (
                            <div className="max-w-sm rounded-lg bg-purple-950 p-3">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                                <br />
                                <div className="rounded-lg bg-purple-900 p-2">
                                    <p>{contact.message}</p>
                                </div>
                                <br />
                                <Form
                                    action={destroy(contact.id)}
                                    onSuccess={() => {
                                        toast('Bericht verwijderd!');
                                    }}
                                >
                                    <input
                                        className="h-9 w-11 rounded-lg bg-red-600"
                                        type="submit"
                                        value="X"
                                        onClick={(e) => {
                                            if (
                                                !confirm(
                                                    'Weet je zeker dat je dit bericht wilt verwijderen?',
                                                )
                                            ) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                </Form>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
