// this code is written by GNU Emacs

(function($) {
 console.log('function is now started.');
 // initialize
 var init = function() {
 // preload image
 baseImg = new Image();
 baseImg.src = 'image.jpg';
 stage = new createjs.Stage('result');
 console.log('init ok.');
 }
 
 // generate collage
 var genImage = function() {
 var img = new createjs.Bitmap(baseImg);
 
 stage.addChild(img);
 
 // define location of text
 // input[type="text"]のnameをキーとし、X座標、Y座標、フォントサイズ、行揃えを持たせている
 // 色などそれ以上の設定が必要な場合は配列で持たせておくと管理しやすい。
 var txt = {
 'txt' :  {
 'x' : 250,
 'y' : 365,
 'size' : '26px',
 'align' : 'center'
 }
 }
 
 // generate object of text
 $.each(txt, function(key, value) {
        // content
        var content = $('#' + key).val();
        
        if(key == 'txt') {
        var content = content.replace(/[\r|\r\n|\n]/g, "").replace(/(.{15})/g, "$1" + "\n");
        }
        
        var obj = new createjs.Text(content);
        
        obj.textAlign = value.align;
        obj.font = 'bold ' + value.size + '/1.5 Meiryo, sans-serif';
        console.log('size is ' + value.size);
        obj.x = value.x;
        obj.y = value.y;
        
        stage.addChild(obj);
        });
 }
 
 //保存させる処理
 //ここだけはブラウザ上で完結できなかった…。
 //base64をデコードしてheaderを付加してechoするだけのPHPへPOSTしています
 var save = function(){
     var png = stage.toDataURL('image/png'); //base64エンコードした画像データ生成
     if(png){
        $('input[name="img"]').remove();
        $('#saveform').append('<input type="hidden" name="img" value="'+png+'" />');
        return true;
     } else {
        return false;
     }
 }
 
 $(function() {
   // define canvas object
   $(window).on('load', function() {
                init();
                });
   
   // generate canvas
   $('#update').on('click', function(e) {
                   // repeating new operator
                   stage = new createjs.Stage('result');
                   genImage();
                   stage.update();
                   });
   
   //「画像として保存」ボタンが押された時の処理
   $('#saveform').on('submit',function(){
                     save();
                     });
   });
 }) (jQuery);
