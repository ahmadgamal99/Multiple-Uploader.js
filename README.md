# Multiple-Uploader.js

Multiple Uploader is a pure javaScript library that uploads multiple images with previewing them realtime. 

It's fully configurable, can be styled according to your needs.

<div align="center">
  <img width="674" alt="Multiple Uploader Gif" src="https://s4.gifyu.com/images/multiple-uploader.gif">
</div>

## Quickstart

After Downloading files just add these lines of code:

```html
<head>
    <link href="./src/css/main.css" rel="stylesheet" type="text/css"> 
</head>
<body>

<form action="" method="" enctype="multipart/form-data" id="my-form" ></form>

<div class="multiple-uploader" id="multiple-uploader">
  <div class="mup-msg">
    <span class="mup-main-msg">click to upload images.</span>
    <span class="mup-msg" id="max-upload-number">Upload up to 10 images</span>
    <span class="mup-msg">Only images, pdf and psd files are allowed for upload</span>
  </div>
</div>

<script src="./src/js/multiple-uploader.js"></script>
<script>

    let multipleUploader = new MultipleUploader('#multiple-uploader').init({
        maxUpload : 20, // maximum number of uploaded images
        maxSize:2, // in size in mb
        filesInpName:'images', // input name sent to backend
        formSelector: '#my-form', // form selector
    });

  multipleUploader.clear(); // this function clears all uploaded images
  
</script>
</body>
```


---

> ⚠️ **NOTE**: We are currently support uploading images only

## Main features ✅

- Image thumbnail previews.
- Image sizes previews on hover.
- Deleting uploaded images.
- Set maximum size for the images.
- Set maximum number of uploaded images.
- Well tested.

# MIT License