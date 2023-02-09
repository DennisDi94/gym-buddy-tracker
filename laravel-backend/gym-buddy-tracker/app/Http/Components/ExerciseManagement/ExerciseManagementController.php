<?php

namespace App\Http\Components\ExerciseManagement;

use App\Models\Workout;

class ExerciseManagementController 
{

    public function list()
    {
        return Workout::all();
    }
}
