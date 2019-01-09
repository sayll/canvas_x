# canvas_x
canvas绘制海报，生成logo二维码。也可生成编辑界面，用户自定义输入，一键生成。
> 默认开启图片跨域，但服务端的图片也需要后端进行相应的跨域设置。

## 使用方法

### npm 下载使用
```
npm i -S @sayll/canvas_x
// js 片段
import canvas_x from '@sayll/canvas_x'
// TODO
canvas_x.makeImage({...})
```

### 直接引用
可直接通过script标签引入`lib/canvas_x.js`，也可当第三方模块引入。
> 通过script引入，可通过全局变量`canvas_x`直接使用。详情可见demo。

![预览](./demo/assets/doc.png "预览")

## 接口
|函数|描述|
|----|----|
|[makeImage](#makeImage)(options, ...)|绘制一个图片|
|[renderEditor](#renderEditor)(container, options, callback)|创建编辑节点DOM| 

## makeImage
高阶合成图片
> 可以接受三个类型：图片，文字，二维码

|参数|类型|描述|
|---|---|---|
|options|object|[MakeImageOptions](#MakeImageOptions)（详情请见，核心配置项）|
|callback|function|回调参数：(error?: string, data?: string) => void|

## renderEditor
生成编辑界面
> 可以接受三个类型：图片，文字，二维码

|参数|类型|描述|
|---|---|---|
|container|HTMLElement|一个容器元素节点|
|options|object|[MakeImageOptions](#MakeImageOptions)（详情请见，核心配置项|
|callback|function|回调参数：(base64: string) => void|

## MakeImageOptions
绘图核心配置项

|参数|类型|描述|
|---|---|---|
|parts|array|各组成部分([ImageEntry](#ImageEntry) , [TextEntry](#TextEntry) , [QRCodeEntry](#QRCodeEntry)): 详细见基础类型参数|
|width|number|最终图片宽度，建议为显示容器的二倍|
|height|number|最终图片高度，建议为显示容器的二倍|
|background|string|画布底色|
|buttonText|string|编辑模式下，绘制画布按钮文案：null时，隐藏按钮。默认：'绘制画布'|
|resetButtonText|string|编辑模式下，重新编辑按钮文案：为空或null时，隐藏按钮。默认：'重新编辑'|
|compress|number|最终图片压缩比，默认0.8|

## 基础类型参数

### ImageEntry 
表示一个图片部分。

|参数|类型|描述|
|---|---|---|
|type|string|指定为图片类型：'image'|
|url|string|要绘制的图片地址，可以是 http: 或 data: 格式|
|radius|number|半径率，0-1之间|
|padding|number|内边距。通过background控制边框颜色，默认为'#fff'|
|background|string|默认为'#fff'|
|width|number|绘制的宽度|
|height|number|绘制的高度|
|editable|boolean|能否编辑，编辑模式下使用|
|selectImage|function|如需替换自己的资源为替换图片，可使用此参数； 参数返回一个 callback 接受你替换的图片 (base64或url) 注：当 editable 设置为 true 时，selectImage 将阻止默认 input[type=file]选取图片的默认行为|
|x|number|相对于左上角的水平坐标|
|y|number|相对于左上角的垂直坐标|
|opacity|number|透明度。0-1 之间|
|clipOptions|object|x: 表示截取图片的x定位; y: 表示截取图片的y定位; zoom: 是否进行图片等比缩放|

### TextEntry
表示一个文本部分。

|参数|类型|描述|
|---|---|---|
|type|string|指定为文本类型：'text'|
|text|string|要绘制的内容。使用 \n 换行|
|size|string|字体大小|
|color|string|字体颜色|
|bold|boolean|是否加粗|
|textAlign|string|文本对齐方式，"center"、"left"、"right"，根据基准点（x,y）水平对齐。默认：'left'|
|lineAlign|string|文本对齐方式，"top"、"middle"、"bottom"，根据基准点（x,y）垂直对齐。默认：'top'|
|editable|boolean|能否编辑，编辑模式下使用|
|x|number|相对于左上角的水平坐标|
|y|number|相对于左上角的垂直坐标|
|opacity|number|透明度。0-1 之间|

### QRCodeEntry
表示一个二维码部分

|参数|类型|描述|
|---|---|---|
|type|string|指定为二维码类型：'qrcode'|
|text|string|要绘制的内容。网址需要使用 http: 开头|
|padding|number|内边距。通过background控制边框颜色，默认为'#fff'|
|background|string|默认为'#fff'|
|level|number|容错等级。1-5，数值越大容错越高|
|logo|string|二维码logo的地址,可以是 http: 或 data: 格式|
|width|number|绘制的宽度|
|height|number|绘制的高度|
|x|number|相对于左上角的水平坐标|
|y|number|相对于左上角的垂直坐标|
|opacity|number|透明度。0-1 之间|

## 开发命令
|`npm run <script>`|note|
|------------------|-----------|
|`build`|打包文件|
|`build:dev`|监听修改|
|`browse`|启动server|
|`start`|start 整个项目server服务|
