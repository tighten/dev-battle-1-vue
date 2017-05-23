<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as JavaScript;

class HomeController extends Controller
{
    public function index()
    {
        JavaScript::put(['auth_token' => env('AUTH_TOKEN')]);

        return view('router');
    }
}
