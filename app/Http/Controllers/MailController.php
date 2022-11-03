<?php

namespace App\Http\Controllers;
use Mail;
use App\Mail\MyEmail;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MailController extends Controller {
    public function sendMail(Request $request) {

        $validated = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email'],
            'subject' => ['required'],
            'message' => ['required']
        ]);

        Mail::to("BernardSapida1706@gmail.com")->send(
            new MyEmail(
                $validated['name'], 
                $validated['email'], 
                $validated['subject'], 
                $validated['message']
            )
        );
        return view('welcome');
    } 
}