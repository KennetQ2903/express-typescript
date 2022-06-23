import express from 'express'
import * as diaryServices from '../services/diarieServices'
import { toNewDiaryEntry } from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getDiariesEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})

export default router
