import cx from '../src/canvas_x'
import mMain from './assets/mMain.png'
import avatar from './assets/avatar.jpg'

// 编辑界面
cx.renderEditor(document.getElementById('test2'), {
  type: 'url',
  parts: [
    {
      type: 'image',
      url: mMain.src,
      width: 200,
      height: 200,
      editable: true
    },
    {
      type: 'text',
      text: '可以编辑哦！',
      editable: true,
      maxLength: 12,
      placeholder: 'xxxxx',
      size: '20px',
      y: 150
    }
  ],
  width: 200,
  height: 210,
  compress: 1,
  background: 'beige',
  resetButtonText: '重新编辑'
})

// 高级绘制
cx.makeImage({
  type: 'url',
  parts: [
    {
      type: 'image',
      url: mMain.src,
      width: 600,
      height: 600
    },
    {
      type: 'image',
      url: avatar.src,
      width: 300,
      height: 300,
      radius: 1,
      padding: 5,
      background: '#fff',
      x: 150,
      y: 40,
      clipOptions: {
        zoom: true,
        align: 'center'
      }
    },
    {
      type: 'qrcode',
      text: 'https://github.com/sayll/canvas_x',
      logo: 'https://avatars3.githubusercontent.com/u/18632641?s=40&v=4',
      x: -40,
      y: -40,
      width: 160,
      height: 160,
      padding: 4,
      background: '#fff',
      level: 3
    },
    {
      type: 'text',
      text: '水平测试\n水平测试',
      textAlign: 'right',
      y: 0,
      color: '#abcdef',
      size: '40px',
      bold: true
    },
    {
      type: 'text',
      text: '垂直测试\n垂直测试',
      textAlign: 'center',
      lineAlign: 'bottom',
      x: 0,
      color: '#abcdef',
      size: '40px',
      bold: true
    }
  ],
  width: 600,
  height: 600
}, (err, data) => {
  document.getElementById('test').src = data
})
