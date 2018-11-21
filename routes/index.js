const express = require('express');
const router = express.Router();
const itor = require('../services/itor')


const subscribers = new Map()

class Subscription{
  constructor(id, res){
    this.id = id
    this.res = res
    subscribers.set(id, this)
  }

  emit(event, data){
    this.res.write('event: ' + event + '\n' )
    this.res.write('data: ' + data + '\n\n')
  }

  end(){
    subscribers.delete(this.id)
  }


}

router.get('/subscribe', (req, res) => {

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })

  const subscription = new Subscription(req.query.id, res)
  req.on("close", function() {
    subscription.end()
  })
})


router.get('/itor', (req, res) => {
  const subscription = subscribers.get(req.headers['x-client-id'])
  if(subscription){
    setTimeout(() => {
      subscription.emit('itor', itor(parseInt(req.query.value)))
    }, 2000)
    return res.status(202).end()
  }
  res.status(204).end()
})

module.exports = router;
