<?php
namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorksController extends Controller
{
    public function index()
    {
        return Inertia::render('/biography',[
            'works' => Work::all(),
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'employer' => 'required',
            'function' => 'required',
            'function_description' => 'required',
            'work_start' => 'required',
            'work_end' => 'required',
            'person_id' => 'required',
        ]);
        Work::create($validated);
        return redirect()->route('work');
    }

    public function edit(Work $work)
    {
        return Inertia::render('edit/edit_work', [
            'work' => $work,
        ]);
    }
    public function destroy(Work $work)
    {
        $work->delete();

        return redirect()->route('work');
    }
    public function update(Work $work, Request $request)
    {
        $validated = $request->validate([
            'employer' => 'required',
            'function' => 'required',
            'function_description' => 'required',
            'work_start' => 'required',
            'work_end' => 'required',
            'person_id' => 'required',
        ]);
        $work->update($validated);
        return redirect()->route('work');
    }
}
