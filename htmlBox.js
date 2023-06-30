const html = {
  htmlContainer: function (data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      box-sizing: border-box;
      padding: 0%;
      margin: 0%;
    }
  </style>
</head>
<body>
  ${data}
</body>
</html>
    `;
  },
  mainData: `<script src="/main.js"></script>`,
  styleData: `<script src="/style.js"></script>`,
};

export default html;
