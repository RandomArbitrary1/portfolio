<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    public $timestamps = false;
    protected $table = 'works';
    protected $fillable = [
        'employer',
        'function',
        'function_description',
        'work_start',
        'work_end',
        'person_id',
    ];
}
