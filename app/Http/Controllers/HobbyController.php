<?php
namespace App\Http\Controllers;

use App\Models\Hobby;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HobbyController extends Controller
{
    public function index()
    {
        return Inertia::render('/biography',[
            'hobbys' => Hobby::all(),
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'hobby_name' => 'required',
            'person_id' => 'required',
        ]);
        Hobby::create($validated);
        return redirect()->route('hobby');
    }

    public function edit(Hobby $hobby)
    {
        return Inertia::render('edit/edit_hobby', [
            'hobby' => $hobby,
        ]);
    }
    public function destroy(Hobby $hobby)
    {
        $hobby->delete();

        return redirect()->route('hobby');
    }
    public function update(Hobby $hobby, Request $request)
    {
        $validated = $request->validate([
            'hobby_name' => 'required',
            'person_id' => 'required',
        ]);
        $hobby->update($validated);
        return redirect()->route('hobby');
    }
}
