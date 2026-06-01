<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Person extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phonenumber',
        'email',
        'description',
        'profile_picture',
        'date_of_birth',
    ];
}
