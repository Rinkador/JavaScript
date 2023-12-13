<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 1 : Nombre de caractères</title>
    <style>
        html {
            font-family: sans-serif;
        }
        body {
            width: 50%;
            max-width: 800px;
            min-width: 480px;
            margin: 0 auto;
        }

        .result {
            color: palevioletred;
            padding: 3px;
        }

        .warning {
            color: purple;
            padding: 3px;
        }
    </style>
</head>

<body>
    <h1>Nombre de e dans chaque titre de post</h1>
    <p>Formulaire de saisie</p>
    <div class="form">
        <label for="post">Nombre de post(s): </label>
        <input type="text" id="post" class="post">
        <input type="submit" value="Calculer" class="submitPost">
    </div>
    <div>
        <p class="message"></p>
    </div>
    <script>
        let elInput = document.querySelector('.post');
        let elSubmit = document.querySelector('.submitPost');
        let message = document.querySelector('.message');

        // 1.
        let value = '';

        function eventInput(event) {
           
        }

        elInput.addEventListener('input', eventInput);

        // 2.
        function onClick(event) {
        }

        elSubmit.addEventListener('click', onClick);
    </script>
</body>
</html>