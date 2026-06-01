<?php

namespace App\Models;
use App\Models\ProgrammingLanguage;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public $timestamps = false;
    protected $table = 'projects';
    protected $fillable = [
        'name',
        'description',
        'download_link',
        'programming_language_id',
        'person_id',
    ];
    public function programmingLanguages()
    {
        return $this->belongsToMany(ProgrammingLanguage::class);
    }
}
