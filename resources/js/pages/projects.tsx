import { Form, usePage, router} from '@inertiajs/react';
import { useState, useEffect } from 'react';
import Header from '@/components/header';
import { destroy, store, edit } from '@/routes/project';
import { toast } from 'sonner';
export default function Index({ projects, filters = {}}) {
    // const projects = usePage().props.projects;
    const [search, setSearch] = useState(filters.search ?? '');

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.get('/projects', { search }, {
                preserveState: true,
                replace: true,
            });
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);







    const programmingLanguages = usePage().props.programmingLanguages;
    const { auth } = usePage().props as any;
    return (
        <>
            <Header />
            <div className="flex flex-col items-center">
            <h1>Projecten die gemaakt zijn door mij: v</h1>
            <div className="mb-6 flex gap-3 p-2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Zoek door alle projecten:"
                    className="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
            </div>
            </div>
            <br />

            {auth.user && (
                <Form
                    action={store()}
                    onSuccess={() => toast('Bericht verzonden')}
                >
                    <input type="text" name="name" placeholder="naam" />
                    <br />
                    <textarea name="description" placeholder="Description" />
                    <br />
                    <input
                        type="text"
                        name="download_link"
                        placeholder="download_link"
                    />
                    <br />
                    <select name="programming_language_ids[]" multiple>
                        {programmingLanguages.map((lang) => (
                            <option key={lang.id} value={lang.id}>
                                {lang.language_name}
                            </option>
                        ))}
                    </select>
                    <br />
                    <input
                        type="text"
                        name="person_id"
                        placeholder="persoon id"
                    />
                    <br />
                    <input type="submit" value="Versturen" />
                </Form>
            )}
            <br />
            <div className="flex flex-wrap gap-3 p-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="max-w-sm rounded-lg bg-purple-950 p-3"
                    >
                        <p className="text-2xl font-bold">{project.name}</p>
                        <p>{project.description}</p>
                        <a
                            href={project.download_link}
                            className="text-blue-400"
                        >
                            Download Here!
                        </a>

                        {project.programming_languages?.map((lang) => (
                            <div key={lang.id} className="w-fit bg-blue-950">
                                <p>{lang.language_name}</p>
                            </div>
                        ))}

                        {auth.user && (
                            <>
                                <br />
                                <Form action={edit(project.id)}>
                                    <input
                                        className="h-10 w-30 rounded-lg bg-green-600"
                                        type="submit"
                                        value="Edit"
                                    />
                                </Form>
                                <br />
                                <Form
                                    action={destroy(project.id)}
                                    onSuccess={() =>
                                        toast('Bericht verwijderd!')
                                    }
                                >
                                    <input
                                        className="h-10 w-10 rounded-lg bg-red-600"
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
        </>
    );
}
