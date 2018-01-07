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
  resetButtonText: '重新编辑',
  width: 200,
  height: 200,
  compress: 1
})

// 高级绘制
cx.makeImage({
  type: 'url',
  parts: [
    {
      type: 'image',
      url: mMain.src,
      width: 300,
      height: 300
    },
    {
      type: 'image',
      url: avatar.src,
      width: 150,
      height: 150,
      radius: 1,
      padding: 5,
      background: '#fff',
      x: 75,
      y: 20
    },
    {
      type: 'qrcode',
      text: 'https://github.com/sayll/rollup',
      logo: 'https://avatars3.githubusercontent.com/u/18632641?s=40&v=4',
      x: -20,
      y: -40,
      width: 80,
      height: 80,
      padding: 2,
      background: '#fff',
      level: 3
    },
    {
      type: 'text',
      text: '测试\n测试',
      x: 10,
      y: -100,
      color: '#abcdef',
      size: '40px',
      bold: true
    }
  ],
  width: 300,
  height: 300
}, (err, data) => {
  document.getElementById('test').src = data
})
