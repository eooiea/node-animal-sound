const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name=="dog") {
        res.send({'sound':'멍멍'})
    }
    else if(name=="cat") {
        res.send({'sound':'야옹','img':'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg'})
    }
    else if(name=="pig") {
        res.send({'sound':'꿀꿀'})
    }
    else {
        res.send({'sound':'알수없음'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})