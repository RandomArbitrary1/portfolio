import { Form, usePage } from '@inertiajs/react';
import { toast, Toaster } from 'sonner';
import Header from '@/components/header';
import { update } from '@/routes/project';

export default function Edit(props) {
    console.log(props); // add this
    const project = props.project;
    const programmingLanguages = props.programmingLanguages;

    return (
        <>
            <Header />
            <h1>INFORMATIE</h1>
            <Form
                action={update(project.id)}
                onSuccess={() => {
                    toast('Bericht bewerkt');
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="naam"
                    defaultValue={project.name}
                />
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder="Description"
                    defaultValue={project.description}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="download_link"
                    placeholder="Download link"
                    defaultValue={project.download_link}
                />
                <input
                    type="text"
                    name="person_id"
                    placeholder="De ID van de persoon"
                    defaultValue={project.person_id}
                />
                <br />
                <br />

                <label>Programming Languages</label>
                <select name="programming_language_ids[]" multiple>
                    {programmingLanguages.map((lang) => (
                        <option
                            key={lang.id}
                            value={lang.id}
                            selected={project.programming_languages?.some(
                                (l) => l.id === lang.id,
                            )}
                        >
                            {lang.language_name}
                        </option>
                    ))}
                </select>

                <br /><br/>
                <input type="submit" value="Versturen" />
            </Form>
        </>
    );
}
