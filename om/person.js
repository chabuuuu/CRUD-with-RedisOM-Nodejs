import { Entity, Schema } from 'redis-om'
import client from './client.js'
/* our entity */
class Person extends Entity {}
/* create a Schema for Person */
const personSchema = new Schema(Person, {
    name: { type: 'string'},
    id: { type: 'number' }
  })
/* use the client to create a Repository just for Persons */
export const personRepository = client.fetchRepository(personSchema)
console.log("done creating");
/* create the index for Person */
await personRepository.createIndex()
