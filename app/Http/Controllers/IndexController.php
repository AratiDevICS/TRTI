<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use DB;

class IndexController extends Controller
{
    //

    public function index(Request $request){

        $value = session()->get('locale');
        App::setLocale($value);
        return view('welcome');
    }

    public function changeLanguage(Request $request){
        App::setLocale($request->lang);
        session()->put('locale', $request->lang);  
        return redirect()->back();
    }
}