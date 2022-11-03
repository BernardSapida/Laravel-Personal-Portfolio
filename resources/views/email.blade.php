@component('mail::message')
    <h1>Viewers Message</h1>
    <p>Name: {{ $name }}</p>
    <p>Email: {{ $email }}</p>
    <p>Subject: {{ $subject }}</p>
    <p>Message: {{ $message }}</p>
    @component('mail::button', ['url' => 'https://bernardsapida.herokuapp.com/'])
        Visit Website
    @endcomponent
@endcomponent