import { Router } from 'express'
import { personRepository } from '../om/person.js'

export const router = Router()

router.get('/get', async (req, res) => {
  var id = req.query.id;
  var person;
  if (id != null) {
    person = await personRepository.search().where('id').equals(Number(id)).return.all();
  }else{
    person = await personRepository.search().return.all();
  }
  res.send(person)
})
router.put('/', async (req, res) => {
  var id = req.query.id;
  var person;
  var result;
  if (id != null) {
    person = await personRepository.search().where('id').equals(Number(id)).return.first();
    result = person.keys;
    console.log(result);
  }
  person.name = req.body.name ?? null

  await personRepository.save(person)

  res.send(person)
})
router.post('/', async (req, res) => {
    // const person = await personRepository.createAndSave(req.body)
    console.log(req.body);
    req.body.id = Number(req.body.id);
    const person = await personRepository.createAndSave(req.body);
    res.send(person)
  })

