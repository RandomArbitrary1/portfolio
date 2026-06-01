<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{

    public function index()
    {
        return Inertia::render('contact',[
            'contacts' => Contact::all(),
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);
        Contact::create($validated);
        return redirect()->route('contact');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contact');
    }
    public function edit(Contact $contact)
    {
        return Inertia::render('edit/edit', [
            'contact' => $contact,
        ]);
    }
    public function update(Contact $contact, Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);
        $contact->update($validated);
        return redirect()->route('contact');
    }

}
