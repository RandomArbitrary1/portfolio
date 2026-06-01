import { Form, usePage } from '@inertiajs/react';
import { toast } from 'sonner';
import Header from '@/components/header';
import { edit } from '@/routes/person';

import {
    destroy as destroy_hobby,
    edit as edit_hobby,
    store as store_hobby,
} from '@/routes/hobby';
import {
    destroy as destroy_work,
    edit as edit_work,
    store as store_work,
} from '@/routes/work';

export default function Hallo() {
    const persons = usePage().props.persons;
    const hobbys = usePage().props.hobbys;
    const works = usePage().props.works;
    const { auth } = usePage().props as any;
    return (
        <>
            <Header />
            <br />
            {auth.user && (
                <Form
                    action={store_hobby()}
                    onSuccess={() => toast('Bericht verzonden')}
                >
                    <input
                        type="text"
                        name="hobby_name"
                        placeholder="Hobby naam"
                    />
                    <br />
                    <input
                        type="text"
                        name="person_id"
                        placeholder="Persoon ID"
                    />
                    <br />
                    <input type="submit" value="Versturen" />
                </Form>
            )}
            <>
                {auth.user && (
                    <Form
                        action={store_work()}
                        onSuccess={() => toast('Bericht verzonden')}
                    >
                        <input
                            type="text"
                            name="employer"
                            placeholder="Employer"
                        />
                        <br />
                        <input
                            type="text"
                            name="function"
                            placeholder="function"
                        />
                        <br />
                        <textarea
                            name="function_description"
                            placeholder="function_description"
                        />
                        <br />
                        <input
                            type="date"
                            name="work_start"
                            placeholder="work_start"
                        />
                        <br />
                        <input
                            type="date"
                            name="work_end"
                            placeholder="work_end"
                        />
                        <br />
                        <input
                            type="text"
                            name="person_id"
                            placeholder="Persoon ID"
                        />
                        <br />
                        <input type="submit" value="Versturen" />
                    </Form>
                )}
            </>
            <br />
            {persons.map((person) => (
                <div>
                    {auth.user && (
                        <>
                            <Form action={edit(person.id)}>
                                <input
                                    className="h-15 w-60 rounded-lg bg-green-600"
                                    type="submit"
                                    value="Bewerk Danilo Info"
                                />
                            </Form>
                        </>
                    )}
                    <br />
                    <div className="flex flex-wrap items-center justify-center gap-3 p-2">
                        <div>
                            <div className="flex max-w-sm items-center gap-3 p-2">
                                <img
                                    className="h-auto w-100 rounded-lg border-4 border-purple-950"
                                    src={`/images/${person.profile_picture}`}
                                    alt={person.profile_picture}
                                />
                            </div>
                            <div className="flex max-w-md flex-wrap gap-3 rounded-lg bg-purple-950 p-2">
                                <p className="text-2xl font-bold">
                                    Hallo! Ik ben {person.first_name}{' '}
                                    {person.last_name}
                                </p>
                                <p>Geboren op: {person.date_of_birth}</p>
                                <p>{person.description}</p>
                            </div>
                        </div>
                        <div className="max-w-xs rounded-lg bg-purple-950 p-2">
                            <p>Mijn hobbies zijn dingen zoals:</p>
                            <div className="flex flex-wrap gap-3 p-2">
                                {hobbys.map((hobby) => (
                                    <div
                                        key={hobby.id}
                                        className="max-w-sm rounded-lg bg-purple-900 p-3"
                                    >
                                        <p>{hobby.hobby_name},</p>
                                        {auth.user && (
                                            <>
                                                <Form
                                                    action={edit_hobby(
                                                        hobby.id,
                                                    )}
                                                >
                                                    <input
                                                        className="h-6 w-15 rounded-lg bg-green-600"
                                                        type="submit"
                                                        value="Edit"
                                                    />
                                                </Form>
                                                <Form
                                                    action={destroy_hobby(
                                                        hobby.id,
                                                    )}
                                                    onSuccess={() =>
                                                        toast(
                                                            'Bericht verwijderd!',
                                                        )
                                                    }
                                                >
                                                    <input
                                                        className="h-7 w-7 rounded-lg bg-red-600"
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
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 p-2 text-2xl font-bold">
                        <p>Mijn werk ervaring:</p>
                    </div>
                    <div
                        className="flex-box flex flex-col items-center gap-3 p-2" // maybe you do need two <divs>
                    >
                        {works.map((work) => (
                            <div
                                key={work.id}
                                className="max-w-sm rounded-lg bg-purple-950 p-3"
                            >
                                <p>Employer: {work.employer}</p>
                                <p>Functie: {work.function}</p>
                                <p className="rounded-lg bg-purple-900 p-2">
                                    {work.function_description}
                                </p>
                                <p>Gestart: {work.work_start?.slice(0, 10)}</p>
                                <p>Gestopt: {work.work_end?.slice(0, 10)}</p>

                                {auth.user && (
                                    <>
                                        <Form action={edit_work(work.id)}>
                                            <input
                                                className="h-6 w-15 rounded-lg bg-green-600"
                                                type="submit"
                                                value="Edit"
                                            />
                                        </Form>
                                        <Form
                                            action={destroy_work(work.id)}
                                            onSuccess={() =>
                                                toast('Bericht verwijderd!')
                                            }
                                        >
                                            <input
                                                className="h-7 w-7 rounded-lg bg-red-600"
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
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <br />
        </> // END
    );
}
