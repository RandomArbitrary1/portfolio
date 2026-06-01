<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hobby extends Model
{
    public $timestamps = false;
    protected $table = 'hobbys';
    protected $fillable = [
        'hobby_name',
        'person_id',
    ];
}
