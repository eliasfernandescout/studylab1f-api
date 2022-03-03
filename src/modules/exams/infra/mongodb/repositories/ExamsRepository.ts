// import mongoose from 'mongoose'
// import { Exams } from '@/modules/exams/infra/mongodb/entities'
// import { ILoadExamsApiContract, NLoadExamsApiRepository } from '@/modules/exams/contracts'

// const contactSchema = new mongoose.Schema({
//   _id: String,
//   name: String
// })

// const ExamsDoc = mongoose.model<Exams>('Exams', contactSchema)

// export class ExamsRepository implements ILoadExamsApiContract {
//   createExamsInDatabase(receivedData: NLoadExamsApiRepository.Params): NLoadExamsApiRepository.Result {
//     const examsInstance = new Exams(receivedData)

//     const availableExams = new ExamsDoc(examsInstance)
//     availableExams.save()
//     return availableExams
//   }
// }
