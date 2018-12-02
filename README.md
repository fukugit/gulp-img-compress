# gulp-img-compress
This application give you the feature of resize/compressing image file.  
<br/>

## Description
This application provides the following features.  
1. Resize image, which is ``npx gulp resize``.  
2. Compress image, which is ``npx gulp compress``.  
3. Remove image, which is ``npx gulp clean``.  
<br/>

## Demo
None.  
<br/>

## Dependency
graphicsmagick(Should run the below command before using this application.)  
1. run ``npm install``  
2. run ``brew install graphicsmagick``  
<br/>

## Requirements
1. npm  
2. gulp  
3. To create the following folders.  
img-original  
img-resize  
img-compressed  
<br/>

## Usage
### To resize image files.
1. To put image files you want to resize, into the img-original folder.  
2. run ``npx gulp resize``  
3. you can see img-resize folder. The resized image files will be there.
<br/>

### To compress image files.
1. To put image files you want to compress, into the img-resize folder.  
2. run ``npx gulp compress``  
3. you can see img-compressed folder. The compressed image files will be there.
<br/>

### To delete ALL image files.
1. run ``npx gulp clean``  
2. img-original, img-resize, img-compressed files get removed.  
<br/>

### To delete img-original image files.
1. run ``npx gulp clean:original``  
2. img-original files get removed.  
<br/>

### To delete img-resize image files.
1. run ``npx gulp clean:resize``  
2. img-resize files get removed.  
<br/>

### To delete img-compressed image files.
1. run ``npx gulp clean:compress``  
2. img-compressed files get removed.  
<br/>

## References
[npm gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)  
[refer site for creating this application](http://c-geru.com/as_blind_side/2017/04/gulpcompressedimage.html)  
[mozjpeg](https://github.com/mozilla/mozjpeg)  
<br/>

## Licence
MIT  
<br/>

## Authors
[fukugit](https://github.com/fukugit)  
<br/>

## Conclusion
I believe this feature is more convenient than such web tool as it compress image files.  
