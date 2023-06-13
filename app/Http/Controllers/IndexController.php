<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App;
use DB;

class IndexController extends Controller
{
    //

    // public function index(Request $request){

    //     $value = session()->get('locale');
    //     App::setLocale($value);
    //     return view('welcome');
    // }

    public function index(Request $request){

        
        if(session()->get('locale') == '')
        {
            $selected_language = 'en';
        }
        else{
           $selected_language = session()->get('locale');
        }
        $menuType='';
        if(session()->get('locale') == 'en' || session()->get('locale') == '')
        {
            $menuType='top-menu';
        }
        else{
            $menuType='top-marathi-menu';
        }
        
        App::setLocale($selected_language);
        $main_menu = DB::table('trti_menu')
        ->where('parent_id', 1)
        ->where('menutype', $menuType)
        ->where('published', 1)
        ->where('home', 0)
        ->where(function ($main_menu) {
            $lang = (session()->get('locale') == 'en' || session()->get('locale') == '') ? 'en-GB' : 'mr-IN' ;
            $main_menu->where('language', '=', '*')
                  ->orWhere('language', '=', $lang);
        })->get();
        return view('welcome',compact('main_menu'));
    }

    public function changeLanguage(Request $request){
        App::setLocale($request->lang);
        session()->put('locale', $request->lang);  
        return redirect()->back();
    }
}