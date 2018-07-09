## Description
This application give you feature of compressing image file.

## Usage
### Common  
1. run ``npm install``  
2. run ``brew install graphicsmagick``  

### To resize image files.
1. To put image files you want to resize into the img-original folder.  
2. run ``npx gulp resize``  
3. you can see img-resize folder. The resized image files will be there.

### To compress image files.
1. To put image files you want to compress into the img-resize folder.  
2. run ``npx gulp compress``  
3. you can see img-compressed folder. The compressed image files will be there.

### To delete ALL image files.
1. run ``npx gulp clean``  
2. img-original, img-resize, img-compressed files get removed.  

### To delete img-original image files.
1. run ``npx gulp clean:original``  
2. img-original files get removed.  

### To delete img-resize image files.
1. run ``npx gulp clean:resize``  
2. img-resize files get removed.  

### To delete img-compressed image files.
1. run ``npx gulp clean:compress``  
2. img-compressed files get removed.  


##  Refer site
[npm gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)  
[refer site for creating this application](http://c-geru.com/as_blind_side/2017/04/gulpcompressedimage.html)  
[mozjpeg](https://github.com/mozilla/mozjpeg)  
