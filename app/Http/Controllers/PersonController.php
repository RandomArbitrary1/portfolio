<?php
namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonController extends Controller
{
    public function index()
    {
        return Inertia::render('/biography',[
            'contacts' => Person::all(),
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'phonenumber' => 'required',
            'email' => 'required',
            'description' => 'required',
            'profile_picture' => 'required',
            'date_of_birth' => 'required',
        ]);
        Person::create($validated);
        return redirect()->route('person');
    }

    public function edit(Person $person)
    {
        return Inertia::render('edit/edit_person', [
            'contact' => $person,
        ]);
    }
    public function destroy(Person $person)
    {
        $person->delete();

        return redirect()->route('person');
    }
    public function update(Person $person, Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'phonenumber' => 'required',
            'email' => 'required',
            'description' => 'required',
            'profile_picture' => 'required',
            'date_of_birth' => 'required',
        ]);
        $person->update($validated);
        return redirect()->route('person');
    }
}
