<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/touch-icon.png" rel="apple-touch-icon" />
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div id="app">
            @include ('layouts.header')

            <div class="container">
                <router-view></router-view>
            </div>
        </div>

        @include ('layouts.footer')

        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
