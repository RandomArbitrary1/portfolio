<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\WorksController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('biography');
});
Route::get('/biography', function () {
    return Inertia::render('biography', [
        'persons' => \App\Models\Person::all(),
        'hobbys' => \App\Models\Hobby::all(),
        'works' => \App\Models\Work::all(),
    ]); // <-- name of your TSX component in resources/js/Pages
});
Route::get('/projects', function (Illuminate\Http\Request $request) {
    return Inertia::render('projects', [
        'projects' => \App\Models\Project::with('programmingLanguages')
            ->when($request->search, fn($q, $search) =>
            $q->where('name', 'like', "%{$search}%")
                ->orWhere('description', 'like', "%{$search}%")
            )
            ->get(),
        'programmingLanguages' => \App\Models\ProgrammingLanguage::all(),
        'filters' => $request->only('search'),
    ]);
});

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/person', [PersonController::class, 'index'])->name('person');
Route::get('/hobby', [HobbyController::class, 'index'])->name('hobby');
Route::get('/project', [ProjectController::class, 'index'])->name('project');
Route::get('/work', [WorksController::class, 'index'])->name('work');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::post('/person', [PersonController::class, 'store'])->name('person.store');
Route::post('/hobby', [HobbyController::class, 'store'])->name('hobby.store');
Route::post('/project', [ProjectController::class, 'store'])->name('project.store');
Route::post('/work', [WorksController::class, 'store'])->name('work.store');

Route::post('/contact{contact}', [ContactController::class, 'destroy'])->name('contact.destroy');
Route::post('/person{person}', [PersonController::class, 'destroy'])->name('person.destroy');
Route::post('/hobby{hobby}', [HobbyController::class, 'destroy'])->name('hobby.destroy');
Route::post('/project{project}', [ProjectController::class, 'destroy'])->name('project.destroy');
Route::post('/work{work}', [WorksController::class, 'destroy'])->name('work.destroy');

Route::get('/login', function () {
    return Inertia::render('account'); // <-- name of your TSX component in resources/js/Pages
})->name('login');

Route::get('/contact/edit/{contact}', [ContactController::class, 'edit'])->name('contact.edit');
Route::post('/contact/edit/{contact}', [ContactController::class, 'update'])->name('contact.update');

Route::get('/person/edit/{person}', [PersonController::class, 'edit'])->name('person.edit');
Route::post('/person/edit/{person}', [PersonController::class, 'update'])->name('person.update');

Route::get('/hobby/edit/{hobby}', [HobbyController::class, 'edit'])->name('hobby.edit');
Route::post('/hobby/edit/{hobby}', [HobbyController::class, 'update'])->name('hobby.update');

Route::get('/project/edit/{project}', [ProjectController::class, 'edit'])->name('project.edit');
Route::post('/project/edit/{project}', [ProjectController::class, 'update'])->name('project.update');

Route::get('/work/edit/{work}', [WorksController::class, 'edit'])->name('work.edit');
Route::post('/work/edit/{work}', [WorksController::class, 'update'])->name('work.update');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth'])->name('biography');
Route::get('/logout', function () {
    return Inertia::render('biography'); // <-- name of your TSX component in resources/js/Pages
});
