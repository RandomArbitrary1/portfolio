import { Form, usePage } from '@inertiajs/react';
import { toast } from 'sonner';
import Header from '@/components/header';
import { update } from '@/routes/work';

export default function Edit() {
    const { work } = usePage().props as any;
    return (
        <>
            <Header />
            <h1>Werk bewerken</h1>
            <br />
            <Form
                action={update(work.id)}
                onSuccess={() => {
                    toast('Werk bewerkt!');
                }}
            >
                <input
                    type="text"
                    name="employer"
                    placeholder="Werkgever"
                    defaultValue={work.employer}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="function"
                    placeholder="Functie"
                    defaultValue={work.function}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="function_description"
                    placeholder="Beschrijving"
                    defaultValue={work.function_description}
                />
                <br />
                <br />
                <input
                    type="date"
                    name="work_start"
                    defaultValue={work.work_start?.slice(0, 10)}
                />
                <br />
                <br />
                <input
                    type="date"
                    name="work_end"
                    defaultValue={work.work_end?.slice(0, 10)}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="person_id"
                    placeholder="Persoon ID"
                    defaultValue={work.person_id}
                />
                <br />
                <br />
                <input type="submit" value="Opslaan" />
            </Form>
        </>
    );
}
