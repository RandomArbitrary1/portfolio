import { Form, usePage } from '@inertiajs/react';
import { toast, Toaster } from 'sonner';
import Header from '@/components/header';
import { update } from '@/routes/person';


export default function Edit(props) {
    const person = props.contact;
    return (
        <>
            <Header />
            <h1>Bewerk Persoon informatie V</h1>
            <br/>
            <Form
                action={update(person.id)}
                onSuccess={() => {
                    toast('Bericht bewerkt');
                }}
            >
                <input
                    type="text"
                    name="first_name"
                    placeholder="Voornaam"
                    defaultValue={person.first_name}
                />
                <br />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Achternaam"
                    defaultValue={person.last_name}
                />
                <br />
                <input
                    name="phonenumber"
                    placeholder="phonenumber"
                    defaultValue={person.phonenumber}
                ></input>
                <br />
                <input type="text" name="email" placeholder="email@email.com" defaultValue={person.email}/>
                <br />
                <textarea
                    name="description"
                    placeholder="description"
                    defaultValue={person.description}
                />
                <br />
                <input
                    type="text"
                    name="profile_picture"
                    placeholder="profile_picture"
                    defaultValue={person.profile_picture}
                />
                <br />
                <input
                    type="date"
                    name="date_of_birth"
                    placeholder="date_of_birth"
                    defaultValue={person.date_of_birth}
                />
                <br />
                <br/>
                <input type="submit" value="Versturen" />
            </Form>
        </>
    );
}
