<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProgrammingLanguage;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $projects = Project::query()
            ->when($request->search, fn($q, $search) =>
            $q->where('name', 'like', "%{$search}%")
                ->orWhere('description', 'like', "%{$search}%")
            )
            ->get();

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'filters'  => $request->only('search'),
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'download_link' => 'required',
            'programming_language_ids' => 'required|array',
            'person_id' => 'required',
        ]);

        $project = Project::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
            'download_link' => $validated['download_link'],
            'person_id' => $validated['person_id'],
            'programming_language_id' => 0,
        ]);

        $project->programmingLanguages()->attach($validated['programming_language_ids']);

        return redirect()->route('project');
    }

    public function edit(Project $project)
    {
        return Inertia::render('edit/edit_project', [
            'project' => $project->load('programmingLanguages'),
            'programmingLanguages' => ProgrammingLanguage::all(),
        ]);
    }
    public function destroy(Project $project)
    {
        $project->delete();

        return redirect()->route('project');
    }
    public function update(Project $project, Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'download_link' => 'required',
            'person_id' => 'required',
        ]);

        $project->update($validated);

        $project->programmingLanguages()->sync(
            $request->input('programming_language_ids', [])
        );

        return redirect()->route('project');
    }
}
